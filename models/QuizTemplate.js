const mongoose = require('mongoose');

const quizTemplateSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // e.g., 'banking-quant-easy'
    title: { type: String, required: true },
    examCategory: { type: String, required: true }, // e.g., 'banking', 'ssc'
    examId: { type: String, default: null }, // Optional specific exam
    topic: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard', 'Mixed'], default: 'Mixed' },
    questionCount: { type: Number, default: 10 },
    duration: { type: Number, default: 10 }, // in minutes
    tags: [{ type: String }],
    accessLevel: { type: String, enum: ['Free', 'Premium'], default: 'Free' },

    // Critical Additions
    priority: { type: Number, default: 0 }, // For sorting/recommendation (higher = better)
    isActive: { type: Boolean, default: true, index: true } // To soft-delete templates

}, { timestamps: true });

module.exports = mongoose.model('QuizTemplate', quizTemplateSchema);
