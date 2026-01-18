const express = require('express');
const router = express.Router();
const { generateQuestions } = require('../utils/aiGenerator');
const { validateAndSanitize } = require('../utils/validator');
const Question = require('../models/Question');
const exams = require('../data/exams');

// POST /api/admin/generate-questions
// Body: { exam: 'sbi-po', topic: 'Banking', count: 5 }
router.post('/generate-questions', async (req, res) => {
    const { exam, topic, count } = req.body;

    if (!exam || !topic) {
        return res.status(400).json({ error: 'Exam and Topic are required' });
    }

    try {
        // 1. Generate
        const rawQuestions = await generateQuestions(exam, topic, count);

        // 2. Validate
        const { valid, invalid } = await validateAndSanitize(rawQuestions);

        // 3. Save Valid Questions
        let saved = [];
        if (valid.length > 0) {
            saved = await Question.insertMany(valid);
        }

        res.json({
            message: 'Generation Complete',
            stats: {
                requested: count,
                generated: rawQuestions.length,
                valid: valid.length,
                saved: saved.length,
                invalid: invalid.length
            },
            savedQuestions: saved,
            errors: invalid
        });
    } catch (err) {
        console.error('Details:', err);
        res.status(500).json({ error: 'Generation Pipeline Failed', details: err.message });
    }
});

// GET /api/admin/seed-database
// Seed the database with mock questions for all exams
router.get('/seed-database', async (req, res) => {
    try {
        console.log('🌱 Starting database seeding...');

        const MOCK_TOPICS = {
            'banking': ['Banking Awareness', 'Quantitative Aptitude', 'Reasoning Ability', 'English Language'],
            'regulatory': ['Economic Issues', 'Finance', 'Management', 'Current Affairs'],
            'general': ['General Knowledge', 'Reasoning', 'Quantitative', 'English']
        };

        const MOCK_QUESTIONS = [
            { q: "What is the full form of GDP?", a: "Gross Domestic Product", ops: ["Gross Domestic Product", "Gross Domestic Plan", "General Domestic Product", "Global Domestic Product"] },
            { q: "Who regulates the insurance sector in India?", a: "IRDAI", ops: ["RBI", "SEBI", "IRDAI", "PFRDA"] },
            { q: "The Headquarters of RBI is in?", a: "Mumbai", ops: ["Delhi", "Kolkata", "Mumbai", "Chennai"] },
            { q: "Which is the largest public sector bank?", a: "SBI", ops: ["PNB", "BoB", "SBI", "Canara"] },
            { q: "What implies a situation of rising prices?", a: "Inflation", ops: ["Deflation", "Inflation", "Stagflation", "Recession"] },
            { q: "If A is brother of B, and B is sister of C, how is C related to A?", a: "Brother or Sister", ops: ["Brother", "Sister", "Cousin", "Brother or Sister"] },
            { q: "Synonym of 'Abundant' is?", a: "Plentiful", ops: ["Scarce", "Plentiful", "Rare", "Few"] },
            { q: "Solve: 15% of 200 + 10?", a: "40", ops: ["30", "40", "50", "35"] },
            { q: "Who was the first President of India?", a: "Dr. Rajendra Prasad", ops: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. Radhakrishnan", "Sardar Vallabhbhai Patel"] },
            { q: "What is the capital of France?", a: "Paris", ops: ["London", "Paris", "Berlin", "Madrid"] },
            { q: "Which planet is closest to the Sun?", a: "Mercury", ops: ["Venus", "Mercury", "Earth", "Mars"] },
            { q: "What is 25% of 80?", a: "20", ops: ["15", "20", "25", "30"] },
            { q: "The author of 'Harry Potter' is?", a: "J.K. Rowling", ops: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"] },
            { q: "Which ocean is the largest?", a: "Pacific", ops: ["Atlantic", "Indian", "Pacific", "Arctic"] },
            { q: "What is the speed of light?", a: "3,00,000 km/s", ops: ["1,00,000 km/s", "2,00,000 km/s", "3,00,000 km/s", "4,00,000 km/s"] }
        ];

        let totalCreated = 0;
        let results = {};

        // Seed questions for each exam
        for (const exam of exams) {
            const category = exam.category || 'banking';
            const topics = MOCK_TOPICS[category] || MOCK_TOPICS['banking'];
            
            // Check if questions already exist
            const existingCount = await Question.countDocuments({ exam: exam.id });
            
            if (existingCount < 10) {
                console.log(`  Seeding ${exam.id} (${existingCount} existing)...`);

                const newQuestions = [];
                for (let i = 0; i < 15; i++) {
                    const mockQ = MOCK_QUESTIONS[i % MOCK_QUESTIONS.length];
                    const randomTopic = topics[i % topics.length];

                    newQuestions.push({
                        exam: exam.id,
                        subject: 'General',
                        topic: randomTopic,
                        difficulty: ['Easy', 'Medium', 'Hard'][i % 3],
                        questionText: `${mockQ.q} (${exam.title})`,
                        options: mockQ.ops,
                        correctIndex: mockQ.ops.indexOf(mockQ.a),
                        explanation: `The correct answer is ${mockQ.a}`
                    });
                }

                const created = await Question.insertMany(newQuestions);
                results[exam.id] = { created: created.length, total: existingCount + created.length };
                totalCreated += created.length;
            } else {
                results[exam.id] = { created: 0, total: existingCount };
            }
        }

        console.log('✅ Database seeding completed');
        
        res.json({
            message: 'Database seeded successfully',
            totalQuestionsCreated: totalCreated,
            examResults: results
        });
    } catch (err) {
        console.error('❌ Seeding error:', err.message);
        res.status(500).json({ error: 'Seeding failed', details: err.message });
    }
});

// GET /api/admin/check-database
// Check what's in the database
router.get('/check-database', async (req, res) => {
    try {
        const results = {};
        
        for (const exam of exams.slice(0, 5)) {  // Check first 5 exams
            const count = await Question.countDocuments({ exam: exam.id });
            results[exam.id] = count;
        }

        res.json({
            message: 'Database check complete',
            exams: results
        });
    } catch (err) {
        res.status(500).json({ error: 'Check failed', details: err.message });
    }
});

// POST /api/admin/bulk-insert-questions
// Bulk insert questions from array
router.post('/bulk-insert-questions', async (req, res) => {
    try {
        const questions = req.body;

        if (!Array.isArray(questions)) {
            return res.status(400).json({ error: 'Request body must be an array of questions' });
        }

        if (questions.length === 0) {
            return res.status(400).json({ error: 'No questions provided' });
        }

        console.log(`📥 Bulk inserting ${questions.length} questions...`);

        // Validate each question
        const validQuestions = questions.filter(q => {
            if (!q.exam || !q.questionText || !q.options || q.correctIndex === undefined) {
                console.warn(`⚠️ Skipping invalid question: ${q.questionText}`);
                return false;
            }
            return true;
        });

        if (validQuestions.length === 0) {
            return res.status(400).json({ error: 'No valid questions found' });
        }

        const inserted = await Question.insertMany(validQuestions);

        console.log(`✅ Successfully inserted ${inserted.length} questions`);

        res.json({
            message: 'Questions inserted successfully',
            inserted: inserted.length,
            skipped: questions.length - validQuestions.length,
            totalQuestions: inserted
        });
    } catch (err) {
        console.error('❌ Bulk insert error:', err.message);
        res.status(500).json({ error: 'Bulk insert failed', details: err.message });
    }
});

module.exports = router;
