const express = require('express');
const router = express.Router();
const { generateQuestions } = require('../utils/aiGenerator');
const { validateAndSanitize } = require('../utils/validator');
const Question = require('../models/Question');

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

module.exports = router;
