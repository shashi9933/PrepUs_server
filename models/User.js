const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Optional if using OAuth
    googleId: String,
    avatar: String,

    // Progress & Gameification
    streak: { type: Number, default: 0 },
    lastActive: { type: Date, default: Date.now },
    totalQuestionsSolved: { type: Number, default: 0 },
    exp: { type: Number, default: 0 },
    level: { type: Number, default: 1 },

    // Preferences
    targetExam: { type: String }, // e.g., 'sbi-po'

    // Performance History (Summary)
    recentScores: [{ type: Number }], // Last 10 scores
    overallAccuracy: { type: Number, default: 0 }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
