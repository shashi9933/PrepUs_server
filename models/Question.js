const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    exam: { type: String, required: true, index: true }, // e.g., 'sbi-po', 'ssc-cgl'
    topic: { type: String, required: true, index: true }, // e.g., 'Quantitative Aptitude'
    subtopic: { type: String }, // e.g., 'Profit and Loss'

    // Critical Addition: Section (Broad category for analysis)
    section: { type: String, index: true }, // e.g., 'Reasoning', 'English', 'Quant'

    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },

    questionText: { type: String, required: true },
    options: [{ type: String, required: true }], // Array of 4-5 strings
    correctIndex: { type: Number, required: true }, // 0-based index

    explanation: { type: String },

    // Metadata
    source: { type: String, default: 'AI Generated' }, // 'PYQ-2023', 'Mock-1'
    year: { type: Number }, // Critical for PYQs (e.g. 2023)

    // Lifecycle
    status: { type: String, enum: ['active', 'deprecated'], default: 'active', index: true },

    tags: [{ type: String }] // extra metadata
}, { timestamps: true });

// Compound index for faster random sampling
questionSchema.index({ exam: 1, topic: 1, difficulty: 1 });

module.exports = mongoose.model('Question', questionSchema);
