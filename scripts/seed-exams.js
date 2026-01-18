require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../models/Exam');
const staticExams = require('../data/exams');

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('❌ MONGO_URI is missing in .env file');
    process.exit(1);
}

const seedExams = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to DB');

        console.log(`📋 Found ${staticExams.length} exams to seed...`);

        for (const examData of staticExams) {
            // Upsert: Update if exists, Insert if new
            await Exam.findOneAndUpdate(
                { id: examData.id },
                examData,
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
            console.log(`   ✅ Processed: ${examData.title}`);
        }

        console.log('🎉 Exam Seeding Complete!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Seeding Error:', err);
        process.exit(1);
    }
};

seedExams();
