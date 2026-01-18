const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String }, // Optional initially
    email: { type: String, unique: true, sparse: true }, // Sparse: Allows specific null/duplicates if needed, but uniqueness matters for non-null
    phone: { type: String, unique: true, sparse: true }, // Main identifier for OTP
    password: { type: String },
    googleId: String,

    // Auth specific
    otp: { type: String },
    otpExpires: { type: Date },
    isProfileComplete: { type: Boolean, default: false },

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
