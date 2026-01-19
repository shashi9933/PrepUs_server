const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, sparse: true, unique: true }, // Sparse allows null/unique
    phone: { type: String, sparse: true, unique: true },
    password: { type: String }, // For email/password auth

    // Auth Provider
    provider: { type: String, enum: ['google', 'phone', 'email'], default: 'phone' },
    googleId: { type: String },

    // OTP for phone auth
    otp: { type: String },
    otpExpires: { type: Date },

    // Profile Completion
    isProfileComplete: { type: Boolean, default: false },
    avatar: { type: String },

    // Core Profile
    targetExam: { type: String }, // (DEPRECATED) - Use targetExams instead
    targetExams: [{ type: String }], // New: Multiple exam support (e.g., ["sbi-po", "upsc-cse"])
    level: { type: Number, default: 1 },
    exp: { type: Number, default: 0 },

    // Access Control
    role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' },
    isPremium: { type: Boolean, default: false },

    // Gamification
    xp: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    lastActive: { type: Date },

    // User Preferences
    preferences: {
        language: { type: String, default: 'en' },
        difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
        reminders: { type: Boolean, default: true }
    }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
