const express = require('express');
const router = express.Router();
const User = require('../models/User');
const TestAttempt = require('../models/TestAttempt');
const { generateDashboardStats } = require('../utils/analysisEngine');
const { verifyToken } = require('../utils/authMiddleware');

// GET /api/analytics/dashboard
// Get user analytics (requires auth)
router.get('/dashboard', verifyToken, async (req, res) => {
    // Get userId from authenticated token, can also accept query param for backward compatibility
    const userId = req.user?.id || req.query.userId;

    if (!userId) {
        return res.status(400).json({ error: 'User ID required' });
    }

    try {
        // 1. Fetch User Details (Streak, Level)
        const user = await User.findById(userId).select('name streak level exp targetExam');
        if (!user) return res.status(404).json({ error: 'User not found' });

        // 2. Fetch Test History (Populate questions to get Topics/Subjects)
        // Limit to last 50 tests for performance relative to "Realtime Dashboard"
        const attempts = await TestAttempt.find({ userId })
            .sort({ completedAt: -1 })
            .limit(50)
            .populate({
                path: 'questions.questionId',
                select: 'topic subject difficulty'
            });

        // 3. Generate Analytics
        const stats = generateDashboardStats(attempts);

        if (!stats) {
            // New User Case
            return res.json({
                user: {
                    name: user.name,
                    streak: user.streak,
                    level: user.level
                },
                isNewUser: true,
                message: "No test data available. Start practicing!"
            });
        }

        // 4. Construct Response
        res.json({
            user: {
                name: user.name,
                streak: user.streak,
                level: user.level,
                title: 'Aspirant' // Logic to change title based on Level
            },
            overview: stats.overall,
            readiness: {
                score: stats.overall.readiness,
                exam: user.targetExam || 'General',
                status: stats.overall.readiness > 70 ? 'Exam Ready' : 'Needs Practice'
            },
            trends: stats.trends || [],
            subjects: stats.subjects || {},
            mistakeProfile: stats.mistakes || {},
            weakAreas: stats.weakAreas || [],
            activityMap: stats.activity || {}
        });

    } catch (err) {
        console.error("Dashboard Analytics Error:", err);
        console.error("Stack:", err.stack);
        res.status(500).json({ error: 'Failed to generate analytics', details: err.message });
    }
});

module.exports = router;
