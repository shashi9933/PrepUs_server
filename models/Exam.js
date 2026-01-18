const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // e.g., 'sbi-po'
    camelId: String,
    title: { type: String, required: true },
    subtitle: String,
    category: { type: String, index: true }, // 'banking', 'regulatory', etc.
    level: String,

    // Structured Data Objects
    quickInfo: {
        conductingBody: String,
        level: String,
        mode: String,
        frequency: String,
        vacancies: String
    },

    dates: {
        notification: String,
        applicationStart: String,
        admitCard: String,
        examDate: String,
        result: String
    },

    eligibility: {
        nationality: String,
        education: String,
        age: {
            min: Number,
            max: Number
        },
        ageRelaxation: Object,
        attempts: Object
    },

    // Array of objects
    pattern: [
        {
            phase: String,
            totalQuestions: mongoose.Schema.Types.Mixed,
            totalMarks: Number,
            totalDuration: String,
            sections: [{
                name: String,
                questions: mongoose.Schema.Types.Mixed,
                marks: Number,
                duration: String
            }]
        }
    ],

    // Flexible syllabus object (Keys are section names)
    syllabus: { type: Map, of: [String] },

    salary: {
        basic: String,
        gross: String,
        deductions: String,
        inHand: String,
        allowances: [String],
        careerGrowth: String
    },

    mockTests: [{
        id: String,
        title: String,
        type: String,
        questions: Number,
        time: Number
    }],

    faqs: [{
        question: String,
        answer: String
    }]

}, { timestamps: true });

// Index for fast lookups
examSchema.index({ id: 1 });
examSchema.index({ category: 1 });

module.exports = mongoose.model('Exam', examSchema);
