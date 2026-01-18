const mongoose = require('mongoose');
require('dotenv').config();
const Question = require('../models/Question');
const User = require('../models/User');
const DailyTest = require('../models/DailyTest');
const exams = require('../data/exams');

// Mock request/response for testing Routes logic directly (unit-like integration test)
// But better to verify data integrity first.

async function verifySystem() {
    try {
        console.log("🔍 Starting System Verification...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ DB Connected");

        // 1. Verify Seeding (Exam Specifics)
        console.log("\n📊 Verifying Question Pools...");

        const poolsToCheck = [
            { id: 'sbi-po', expectedType: 'Probationary Officer' },
            { id: 'lic-aao', expectedType: 'Insurance' },
            { id: 'upsc-cse', expectedType: 'UPSC' },
            { id: 'ssc-cgl', expectedType: 'SSC' },
            { id: 'rbi-grade-b', expectedType: 'Regulatory' }
        ];

        for (const item of poolsToCheck) {
            const count = await Question.countDocuments({ exam: item.id });
            const sample = await Question.findOne({ exam: item.id });

            if (count > 0) {
                console.log(`   ✅ ${item.id}: Found ${count} questions.`);
                if (sample) console.log(`      Sample Info: Subject="${sample.subject}", Source="${sample.source}"`);
            } else {
                console.log(`   ❌ ${item.id}: NO Questions found! (Seeding logic failed?)`);
            }
        }

        // 2. Verify Daily Tests
        console.log("\n📅 Verifying Daily Tests...");
        const today = new Date().toISOString().split('T')[0];
        const testsCount = await DailyTest.countDocuments({ date: today });
        console.log(`   found ${testsCount} tests for today (${today}).`);
        if (testsCount > 0) console.log("   ✅ Daily Tests Generated.");
        else console.log("   ❌ Daily Tests MISSING.");

        // 3. Verify Auth Schema & Data
        console.log("\n🔐 Verifying Auth Schema...");

        // Cleanup test user if exists
        const testPhone = '9999999999';
        await User.deleteMany({ phone: testPhone });

        // Simulate Auth Flow
        console.log("   ➡️ Creating Test User (OTP Flow)...");
        const newUser = new User({
            phone: testPhone,
            otp: '1234',
            otpExpires: new Date(Date.now() + 600000)
        });
        await newUser.save();
        console.log("   ✅ User Saved with Phone & OTP.");

        const savedUser = await User.findOne({ phone: testPhone });
        if (savedUser && savedUser.otp === '1234') {
            console.log("   ✅ Data Integrity Check Passed: Phone and OTP match.");
        } else {
            console.log("   ❌ Data Integrity Check FAILED.");
        }

        // Cleanup
        await User.deleteMany({ phone: testPhone });
        console.log("   🧹 Cleanup: Test user deleted.");

        console.log("\n✨ Verification Complete.");
        process.exit(0);

    } catch (e) {
        console.error("❌ Verification Error:", e);
        process.exit(1);
    }
}

verifySystem();
