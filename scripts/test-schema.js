require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/Question');

async function testValidation() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB for validation test.');

    // Test Case 1: Valid Question
    try {
        const validQ = new Question({
            exam: 'sbi-po',
            subject: 'GA',
            topic: 'Banking',
            questionText: 'Test Question?',
            options: ['A', 'B', 'C', 'D'],
            correctIndex: 1,
            explanation: 'Test Explanation'
        });
        await validQ.validate();
        console.log('✅ Valid Question passed validation.');
    } catch (err) {
        console.error('❌ Valid Question FAILED:', err.message);
    }

    // Test Case 2: Invalid Option Count (3 options)
    try {
        const invalidQ = new Question({
            exam: 'sbi-po',
            subject: 'GA',
            topic: 'Banking',
            questionText: 'Test Question 2',
            options: ['A', 'B', 'C'], // Invalid
            correctIndex: 1,
            explanation: 'Test Explanation'
        });
        await invalidQ.validate();
        console.log('❌ Invalid Question (3 options) passed validation (UNEXPECTED).');
    } catch (err) {
        console.log('✅ Invalid Question correctly rejected:', err.message);
    }

    mongoose.connection.close();
}

testValidation();
