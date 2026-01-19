const mongoose = require('mongoose');

const testAttemptSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    // Improved Linking
    testId: { type: mongoose.Schema.Types.ObjectId, ref: 'DailyTest', required: true, index: true },
    testType: { type: String, enum: ['daily', 'generated', 'mock', 'practice'], default: 'practice' },

    examId: { type: String, required: true }, // Snapshot of exam context

    score: { type: Number, required: true },
    maxMarks: { type: Number, required: true },
    accuracy: { type: Number, required: true }, // Percentage
    rank: { type: Number }, // Populated post-processing or via leaderboard logic

    totalTimeTaken: { type: Number, required: true }, // Seconds

    questions: [{
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        selectedOption: { type: Number },
        correctOption: { type: Number }, // Stored for historical integrity
        isCorrect: { type: Boolean },
        timeTaken: { type: Number }, // Seconds spent on this question
        status: { type: String, enum: ['attempted', 'skipped', 'review'], default: 'attempted' }
    }],

    sectionAnalysis: { type: Map, of: Object }, // e.g. { "Quant": { score: 10, total: 15 } }
    weakTopics: [{ type: String }],
    strongTopics: [{ type: String }]

}, { timestamps: true });

// Index for leaderboard queries
testAttemptSchema.index({ testId: 1, score: -1, totalTimeTaken: 1 });

module.exports = mongoose.model('TestAttempt', testAttemptSchema);
