const mongoose = require('mongoose');

const dailyTestSchema = new mongoose.Schema({
    date: { type: Date, required: true, index: true },
    examId: { type: String, required: true }, // e.g., 'sbi-po'
    title: { type: String, default: 'Daily Drill' },

    // Enhanced Questions with Order
    questions: [{
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
        order: { type: Number, default: 0 }
    }],

    isPublished: { type: Boolean, default: false },

    // Analytics for the test itself
    avgScore: { type: Number, default: 0 },
    totalAttempts: { type: Number, default: 0 },

    // Critical Additions
    duration: { type: Number, default: 600 }, // seconds (10 mins default)
    maxMarks: { type: Number, default: 10 },

    // Type of test
    type: { type: String, enum: ['daily', 'practice'], default: 'daily' },
    topic: { type: String, default: 'General' } // For subject-specific practice
}, { timestamps: true });

// Compound index: Only enforce one 'daily' test per exam per day
// Note: Date objects need careful query handling (start/end of day ranges)
dailyTestSchema.index({ date: 1, examId: 1 }, { unique: true, partialFilterExpression: { type: 'daily' } });

module.exports = mongoose.model('DailyTest', dailyTestSchema);
