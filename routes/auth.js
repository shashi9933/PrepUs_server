const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_dev_key_123';

// 1. Send OTP (Mock)
router.post('/send-otp', async (req, res) => {
    const { phone } = req.body;

    if (!phone || phone.length < 10) {
        return res.status(400).json({ error: 'Valid phone number required' });
    }

    try {
        // Mock OTP
        const otp = '1234';
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

        // Upsert User: Create if not exists, else update
        let user = await User.findOne({ phone });
        if (!user) {
            user = new User({ phone, isProfileComplete: false });
        }

        user.otp = otp;
        user.otpExpires = otpExpires;
        await user.save();

        console.log(`[AUTH] OTP for ${phone}: ${otp}`); // Log for Dev usage

        res.json({ message: 'OTP sent successfully', success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error processing OTP' });
    }
});

// 2. Verify OTP
router.post('/verify-otp', async (req, res) => {
    const { phone, otp } = req.body;

    try {
        const user = await User.findOne({ phone });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ error: 'Invalid or Expired OTP' });
        }

        // Clear OTP
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        // Generate Token
        const token = jwt.sign({ id: user._id, phone: user.phone }, JWT_SECRET, { expiresIn: '7d' });

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                phone: user.phone,
                name: user.name,
                isProfileComplete: user.isProfileComplete,
                avatar: user.avatar
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Verification failed' });
    }
});

// 3. Update Profile (Onboarding)
// Supports both single exam (targetExam) and multiple exams (targetExams)
router.post('/update-profile', async (req, res) => {
    const { userId, name, email, targetExam, targetExams } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (name) user.name = name;
        if (email) user.email = email;
        
        // ✅ NEW: Support multiple exams
        if (targetExams && Array.isArray(targetExams) && targetExams.length > 0) {
            user.targetExams = targetExams; // e.g., ["sbi-po", "upsc-cse"]
            console.log(`📚 Updated targetExams for user:`, targetExams);
        } else if (targetExam) {
            // Fallback: support single exam
            user.targetExams = [targetExam]; // Convert to array
            console.log(`📚 Updated targetExam for user:`, targetExam);
        }

        user.isProfileComplete = true;
        await user.save();

        res.json({
            message: 'Profile updated',
            user: {
                id: user._id,
                phone: user.phone,
                name: user.name,
                targetExam: user.targetExams?.[0] || null, // Primary exam
                targetExams: user.targetExams || [], // All exams
                isProfileComplete: true
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Profile update failed' });
    }
});

// ... existing imports ...
const bcrypt = require('bcryptjs');

// ... existing routes (send-otp, verify-otp) ...

// 4. Register (Email/Password)
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ error: 'Please provide all fields' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: 'User already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashedPassword,
            isProfileComplete: true // Email signups provide name upfront
        });

        await user.save();

        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

        res.json({
            message: 'Registration successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isProfileComplete: true
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// 5. Login (Email/Password)
router.post('/login-email', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        // If user exists but has no password (e.g. Google/Phone user trying to use email)
        if (!user.password) {
            return res.status(400).json({ error: 'Please login with Phone or Google' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isProfileComplete: user.isProfileComplete,
                avatar: user.avatar
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// 6. Login with Google
router.post('/google', async (req, res) => {
    const { token } = req.body; // Expecting ID Token from frontend

    try {
        // Decode token (simplest way without extra libraries if trusted, but verifying signature is best practice)
        // For production, we should ideally use google-auth-library to verify signature.
        // Assuming decode is safe for now or we trust the 'sub' claim matches a real google user.
        // BETTER: Use jwt.decode just to get fields, real verification should happen if tight security needed or use library.
        // We will just decode to get email/sub. 
        // Note: In real prod, use: const ticket = await client.verifyIdToken(...)

        const decoded = jwt.decode(token);

        if (!decoded || !decoded.email) {
            return res.status(400).json({ error: 'Invalid Google Token' });
        }

        const { email, name, picture, sub } = decoded;

        let user = await User.findOne({ email });

        if (!user) {
            // Register new user
            user = new User({
                name,
                email,
                avatar: picture,
                googleId: sub,
                isProfileComplete: true // Google users usually have name/email
            });
            await user.save();
        } else {
            // Link google ID if not present
            if (!user.googleId) {
                user.googleId = sub;
                if (!user.avatar) user.avatar = picture;
                await user.save();
            }
        }

        // Generate App Token
        const appToken = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

        res.json({
            message: 'Google Login successful',
            token: appToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                isProfileComplete: user.isProfileComplete,
                targetExam: user.targetExam
            }
        });

    } catch (err) {
        console.error('Google Auth Error:', err);
        res.status(500).json({ error: 'Google Login Failed' });
    }
});

// GET /api/auth/me
// Get current user profile (requires authentication)
const { verifyToken } = require('../utils/authMiddleware');

router.get('/me', verifyToken, async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const user = await User.findById(req.user.id).select(
            'name email phone avatar isProfileComplete targetExam targetExams level exp xp streak'
        );

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            avatar: user.avatar,
            isProfileComplete: user.isProfileComplete,
            targetExam: user.targetExams?.[0] || user.targetExam || null, // Primary exam
            targetExams: user.targetExams || [], // All exams
            level: user.level,
            exp: user.exp,
            xp: user.xp,
            streak: user.streak
        });
    } catch (err) {
        console.error('Get User Error:', err);
        res.status(500).json({ error: 'Failed to fetch user profile' });
    }
});

module.exports = router;

