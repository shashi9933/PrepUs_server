const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, sparse: true, unique: true }, // Sparse allows null/unique
    phone: { type: String, sparse: true, unique: true },

    // Auth Provider
    provider: { type: String, enum: ['google', 'phone', 'email'], required: true },
    googleId: { type: String },

    // Core Profile
    targetExam: { type: String }, // Primary exam goal
    onboardingCompleted: { type: Boolean, default: false }, // Standardized flag

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
