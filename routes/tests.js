const express = require('express');
const router = express.Router();
const { getOrCreateDailyTest, createTest, createTestFromTemplate } = require('../utils/dailyTestGenerator');
const { analyzeAttempt } = require('../utils/analysisEngine');
const TestAttempt = require('../models/TestAttempt');
const Question = require('../models/Question');
const QuizTemplate = require('../models/QuizTemplate');
const { verifyToken, optionalAuth } = require('../utils/authMiddleware');

// GET /api/tests/templates
// Fetch all available quiz templates
router.get('/templates', optionalAuth, async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};
        if (category && category !== 'All') {
            query.examCategory = category.toLowerCase();
        }

        console.log(`📋 Fetching templates with query:`, query);
        const templates = await QuizTemplate.find(query);
        console.log(`✅ Found ${templates.length} templates`);
        res.json(templates);
    } catch (err) {
        console.error('Fetch Templates Error:', err);
        res.status(500).json({ error: 'Failed to fetch quiz templates' });
    }
});

// GET /api/tests/daily/:examId
// Get today's test for an exam (Optional auth - no need to be logged in to view questions)
router.get('/daily/:examId', optionalAuth, async (req, res) => {
    const { examId } = req.params;
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    try {
        const test = await getOrCreateDailyTest(examId, today);
        res.json(test);
    } catch (err) {
        console.error('Daily Test Error:', err);
        res.status(500).json({ error: 'Failed to load daily test', details: err.message });
    }
});

// GET /api/tests/:testId
// Fetch a specific test by ID (for practice/generated tests)
router.get('/:testId', optionalAuth, async (req, res) => {
    try {
        const DailyTest = require('../models/DailyTest');
        console.log(`📖 Fetching test: ${req.params.testId}`);
        
        // Populate nested questionId
        const test = await DailyTest.findById(req.params.testId).populate('questions.questionId');
        if (!test) {
            console.error(`❌ Test not found: ${req.params.testId}`);
            return res.status(404).json({ error: 'Test not found' });
        }
        
        console.log(`✅ Test fetched: ${test.title} with ${test.questions.length} questions`);
        res.json(test);
    } catch (err) {
        // If ID is invalid mongo ID, check if it was actually meant to be daily/:examId logic (backward compat if needed, but we used separate route)
        console.error('❌ Fetch Test Error:', err);
        res.status(500).json({ error: 'Failed to fetch test', details: err.message });
    }
});

// POST /api/tests/submit
// Submit a test attempt (Required auth to track attempts)
router.post('/submit', verifyToken, async (req, res) => {
    const { userId, testId, examId, responses, totalTimeTaken } = req.body;
    // responses: [{ questionId, selectedOption, timeTaken }]

    try {
        // Securely get ID from token
        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const finalUserId = req.user.id;

        // 1. Fetch full questions to check answers
        const questionIds = responses.map(r => r.questionId);
        const dbQuestions = await Question.find({ _id: { $in: questionIds } });
        const qMap = new Map(dbQuestions.map(q => [q._id.toString(), q]));

        // 2. Build Attempt Object
        const attemptQuestions = responses.map(r => {
            const q = qMap.get(r.questionId);
            if (!q) return null;

            const isCorrect = r.selectedOption === q.correctIndex;
            const status = r.selectedOption === -1 ? 'skipped' : 'attempted';

            return {
                questionId: q._id,
                selectedOption: r.selectedOption,
                correctOption: q.correctIndex,
                isCorrect,
                timeTaken: r.timeTaken,
                status,
                // attach full question for analysis
                _questionDetails: q
            };
        }).filter(x => x !== null);

        // 3. Run Analysis
        // We pass the attempt structure enhanced with full question details for the engine
        const analysisInput = {
            questions: attemptQuestions.map(aq => ({ ...aq, questionId: aq._questionDetails })), // Analysis engine expects populated questionId
            totalTimeTaken
        };

        const analysisResults = analyzeAttempt(analysisInput);

        // 4. Save to DB
        // Fetch the test to determine its type and other metadata
        const DailyTest = require('../models/DailyTest');
        const testDoc = await DailyTest.findById(testId);

        let testType = 'practice';
        if (testDoc) {
            testType = testDoc.type || 'practice';
        }

        const newAttempt = new TestAttempt({
            userId, // Ensure userId is valid ObjectId if real user
            testId,
            testType,
            // ... other fields
            examId,
            score: analysisResults.summary.score,
            maxMarks: analysisResults.summary.maxMarks,
            accuracy: analysisResults.summary.accuracy,
            totalTimeTaken,
            questions: attemptQuestions.map(aq => {
                // Remove _questionDetails before saving to keep DB clean
                const { _questionDetails, ...rest } = aq;
                return rest;
            }),
            sectionAnalysis: analysisResults.topicAnalysis,
            weakTopics: analysisResults.recommendations.weakTopics,
            strongTopics: analysisResults.recommendations.strongTopics
        });

        await newAttempt.save();

        res.json({
            message: 'Test Submitted Successfully',
            attemptId: newAttempt._id,
            analysis: analysisResults
        });

    } catch (err) {
        console.error('Submit Error:', err);
        res.status(500).json({ error: 'Submission Failed', details: err.message });
    }
});

// POST /api/tests/generate
// Generate practice test from DATABASE ONLY (NO AI)
// This endpoint MUST only sample from existing questions
router.post('/generate', async (req, res) => {
    const { examId, topic, count, templateId, type = 'practice' } = req.body;

    console.log('🎯 Generate Test Request:', { examId, topic, count, templateId, type });

    // ✅ CRITICAL: Disable AI generation for practice mode
    // Always use database sampling ONLY
    if (type === 'practice' && !process.env.ALLOW_AI_GENERATION) {
        console.log('✅ Practice mode: Using database questions only');
    }

    // Production Guard: Disable on-demand generation if flag is set
    if (process.env.DISABLE_GENERATION === 'true') {
        return res.status(403).json({
            error: 'On-demand generation is disabled. Please use scheduled tests.',
            code: 'GENERATION_DISABLED'
        });
    }

    try {
        let test;
        if (templateId) {
            console.log(`📝 Creating test from template: ${templateId}`);
            test = await createTestFromTemplate(templateId);
        } else {
            // Ensure we ONLY create from database questions
            console.log(`📝 Creating practice test for exam: ${examId}, topic: ${topic}`);
            test = await createTest({
                examId,
                topic: topic || 'General',
                type: 'practice',
                count: count || 15,
                dbOnly: true // Force database-only sampling
            });
        }

        if (!test || !test.questions || test.questions.length === 0) {
            throw new Error(`No questions found in database for exam: ${examId}, topic: ${topic}`);
        }

        console.log(`✅ Test created successfully:`, { 
            testId: test._id, 
            questionsCount: test.questions.length,
            source: 'database'
        });
        
        res.json({
            testId: test._id,
            title: test.title,
            count: test.questions.length,
            testType: test.type,
            source: 'database'
        });
    } catch (err) {
        console.error('❌ Generate Test Error:', err);
        const statusCode = err.message.includes('No questions found') ? 404 : 500;
        res.status(statusCode).json({
            error: 'Failed to generate test',
            details: err.message,
            code: statusCode === 404 ? 'NO_QUESTIONS' : 'INTERNAL_ERROR'
        });
    }
});

module.exports = router;
