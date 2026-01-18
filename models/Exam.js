const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // e.g., 'sbi-po'
    title: { type: String, required: true },
    subtitle: String,
    category: { type: String, index: true }, // e.g., 'banking'
    level: String,
    quickInfo: mongoose.Schema.Types.Mixed, // Flexible structure for quick info
    dates: mongoose.Schema.Types.Mixed,
    eligibility: mongoose.Schema.Types.Mixed,
    pattern: mongoose.Schema.Types.Mixed,
    syllabus: mongoose.Schema.Types.Mixed,
    salary: mongoose.Schema.Types.Mixed,
    mockTests: [mongoose.Schema.Types.Mixed],
    faqs: [mongoose.Schema.Types.Mixed]
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);
