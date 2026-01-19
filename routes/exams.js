const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');
const { optionalAuth } = require('../utils/authMiddleware');

// GET /api/exams/:examId/syllabus
// Fetch exam syllabus with dynamic subjects and topics
// This keeps frontend CLEAN - no hardcoding subjects
router.get('/:examId/syllabus', optionalAuth, async (req, res) => {
    const { examId } = req.params;

    try {
        console.log(`📚 Fetching syllabus for exam: ${examId}`);

        const exam = await Exam.findOne({ id: examId }).select('syllabus title');

        if (!exam) {
            return res.status(404).json({ error: 'Exam not found' });
        }

        // Extract subjects from syllabus (keys only)
        const subjects = Object.keys(exam.syllabus || {});

        // Build topics map: { "Subject": ["Topic1", "Topic2"] }
        const topicsMap = {};
        subjects.forEach(subject => {
            topicsMap[subject] = exam.syllabus[subject] || [];
        });

        console.log(`✅ Syllabus loaded:`, {
            exam: exam.title,
            subjects: subjects.length,
            totalTopics: Object.values(topicsMap).flat().length
        });

        res.json({
            examId,
            examTitle: exam.title,
            subjects,
            topicsMap,
            totalSubjects: subjects.length,
            totalTopics: Object.values(topicsMap).flat().length
        });
    } catch (err) {
        console.error('❌ Syllabus Fetch Error:', err);
        res.status(500).json({ error: 'Failed to fetch syllabus', details: err.message });
    }
});

// GET /api/exams
// Fetch all exams or filter by category
router.get('/', optionalAuth, async (req, res) => {
    try {
        const { category, q } = req.query;
        let query = {};

        if (category && category !== 'all') {
            query.category = category;
        }

        if (q) {
            query.$or = [
                { title: { $regex: q, $options: 'i' } },
                { subtitle: { $regex: q, $options: 'i' } }
            ];
        }

        const exams = await Exam.find(query).select('id title subtitle category level mockTests').lean();

        // Cache for 10 minutes
        res.set('Cache-Control', 'public, max-age=600');
        res.json(exams);
    } catch (err) {
        console.error('Fetch Exams Error:', err);
        res.status(500).json({ error: 'Failed to fetch exams' });
    }
});

// GET /api/exams/:examId
// Fetch full exam details
router.get('/:examId', optionalAuth, async (req, res) => {
    try {
        const { examId } = req.params;

        const exam = await Exam.findOne({ id: examId }).lean();

        if (!exam) {
            return res.status(404).json({ error: 'Exam not found' });
        }

        res.json(exam);
    } catch (err) {
        console.error('Fetch Exam Error:', err);
        res.status(500).json({ error: 'Failed to fetch exam' });
    }
});

module.exports = router;
