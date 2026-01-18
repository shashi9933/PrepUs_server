const mongoose = require('mongoose');
const { generateDashboardStats } = require('../utils/analysisEngine');

// Mock Data
const mockHistory = [
    {
        score: 8, maxMarks: 10, accuracy: 80, completedAt: new Date(),
        questions: [
            { isCorrect: true, timeTaken: 30, questionId: { topic: 'Algebra', subject: 'Quant', difficulty: 'Medium' } },
            { isCorrect: true, timeTaken: 25, questionId: { topic: 'Algebra', subject: 'Quant', difficulty: 'Easy' } },
            { isCorrect: false, timeTaken: 5, status: 'attempted', questionId: { topic: 'Geometry', subject: 'Quant', difficulty: 'Hard' } }, // Silly mistake?
            { isCorrect: true, timeTaken: 120, questionId: { topic: 'Puzzles', subject: 'Reasoning', difficulty: 'Hard' } }
        ]
    },
    {
        score: 5, maxMarks: 10, accuracy: 50, completedAt: new Date(Date.now() - 86400000), // Yesterday
        questions: [
            { isCorrect: false, timeTaken: 150, status: 'attempted', questionId: { topic: 'Puzzles', subject: 'Reasoning', difficulty: 'Hard' } }, // Time fail
            { isCorrect: true, timeTaken: 40, questionId: { topic: 'Grammar', subject: 'English', difficulty: 'Medium' } }
        ]
    }
];

console.log("🔍 Testing Analytics Aggregation...");

try {
    const stats = generateDashboardStats(mockHistory);

    console.log("\n📊 Overview:");
    console.log(JSON.stringify(stats.overall, null, 2));

    console.log("\n📉 Weak Areas:");
    console.log(JSON.stringify(stats.weakAreas, null, 2));

    console.log("\n🧠 Mistake Profile:");
    console.log(JSON.stringify(stats.mistakes, null, 2));

    console.log("\n✅ Verification Successful if metrics match logic.");
} catch (e) {
    console.error("❌ Verification Failed:", e);
}
