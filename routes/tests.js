const express = require('express');
const router = express.Router();
const { getOrCreateDailyTest } = require('../utils/dailyTestGenerator');
const { analyzeAttempt } = require('../utils/analysisEngine');
const TestAttempt = require('../models/TestAttempt');
const Question = require('../models/Question');

// GET /api/tests/daily/:examId
// Get today's test for an exam
router.get('/daily/:examId', async (req, res) => {
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

// POST /api/tests/submit
// Submit a test attempt
router.post('/submit', async (req, res) => {
    const { userId, testId, examId, responses, totalTimeTaken } = req.body;
    // responses: [{ questionId, selectedOption, timeTaken }]

    try {
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
        const newAttempt = new TestAttempt({
            userId, // Ensure userId is valid ObjectId if real user
            testId,
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

module.exports = router;
