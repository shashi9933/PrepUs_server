const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    exam: { type: String, required: true, index: true }, // Linked to Exam ID
    subject: { type: String, required: true },
    topic: { type: String, required: true, index: true },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Medium'
    },
    questionText: { type: String, required: true },
    options: {
        type: [String],
        validate: [arrayLimit, '{PATH} must have exactly 4 options']
    },
    correctIndex: { type: Number, required: true, min: 0, max: 3 },
    explanation: { type: String, required: true },
    source: { type: String, default: 'General' }, // 'Current Affairs', 'Static', 'PYQ'
    meta: {
        isAiGenerated: { type: Boolean, default: false },
        dateCreated: { type: Date, default: Date.now },
        relevanceScore: { type: Number, default: 0 }
    }
}, { timestamps: true });

function arrayLimit(val) {
    return val.length === 4;
}

module.exports = mongoose.model('Question', questionSchema);
