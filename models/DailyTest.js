const mongoose = require('mongoose');

const dailyTestSchema = new mongoose.Schema({
    date: { type: String, required: true, index: true }, // Format: 'YYYY-MM-DD'
    examId: { type: String, required: true }, // e.g., 'sbi-po'
    title: { type: String, default: 'Daily Drill' },

    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],

    isPublished: { type: Boolean, default: false },

    // Analytics for the test itself
    avgScore: { type: Number, default: 0 },
    totalAttempts: { type: Number, default: 0 }
}, { timestamps: true });

// Compound index to ensure one test per exam per day
dailyTestSchema.index({ date: 1, examId: 1 }, { unique: true });

module.exports = mongoose.model('DailyTest', dailyTestSchema);
