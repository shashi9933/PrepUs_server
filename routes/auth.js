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
router.post('/update-profile', async (req, res) => {
    const { userId, name, email, targetExam } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (name) user.name = name;
        if (email) user.email = email;
        if (targetExam) user.targetExam = targetExam;

        user.isProfileComplete = true;
        await user.save();

        res.json({
            message: 'Profile updated',
            user: {
                id: user._id,
                phone: user.phone,
                name: user.name,
                targetExam: user.targetExam,
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

module.exports = router;

