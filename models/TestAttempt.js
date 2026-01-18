const mongoose = require('mongoose');

const testAttemptSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    testId: { type: String, required: true }, // Could be DailyTest ID or Static Mock ID
    examId: { type: String, required: true }, // e.g., 'sbi-po'

    // High-level Metrics
    score: { type: Number, required: true },
    maxMarks: { type: Number, required: true },
    accuracy: { type: Number, required: true }, // %
    totalTimeTaken: { type: Number, required: true }, // in seconds

    // Question-level Analysis
    questions: [{
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        selectedOption: { type: Number, default: -1 }, // -1 if skipped
        correctOption: { type: Number, required: true },
        isCorrect: { type: Boolean, required: true },
        timeTaken: { type: Number, default: 0 }, // seconds spent on this Q
        status: { type: String, enum: ['attempted', 'skipped', 'review'], default: 'attempted' }
    }],

    // Analysis Snapshots (Computed post-submit)
    sectionAnalysis: { type: Map, of: mongoose.Schema.Types.Mixed }, // { 'Quant': { score: 10, accuracy: 80% } }
    weakTopics: [String],
    strongTopics: [String],

    completedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('TestAttempt', testAttemptSchema);
