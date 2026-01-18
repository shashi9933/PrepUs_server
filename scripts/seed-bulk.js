const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const Question = require('../models/Question');

async function seedBulk() {
    try {
        console.log("📂 Starting Bulk Import...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ DB Connected");

        // Read Data
        const dataPath = path.join(__dirname, '../data/bulk_import.json');
        if (!fs.existsSync(dataPath)) {
            throw new Error(`Data file not found at ${dataPath}`);
        }

        const rawData = fs.readFileSync(dataPath, 'utf-8');
        const questions = JSON.parse(rawData);

        console.log(`📊 Found ${questions.length} questions to import.`);

        let inserted = 0;
        let skipped = 0;

        for (const q of questions) {
            // Check for duplicate (Exam + Question Text)
            const exists = await Question.findOne({
                exam: q.exam,
                questionText: q.questionText
            });

            if (exists) {
                console.log(`   🔸 Skipped Duplicate: [${q.exam}] ${q.questionText.substring(0, 30)}...`);
                skipped++;
            } else {
                await Question.create(q);
                // console.log(`   ✅ Inserted: [${q.exam}] ${q.questionText.substring(0, 30)}...`);
                inserted++;
            }
        }

        console.log(`\n✨ Import Complete!`);
        console.log(`   ✅ Inserted: ${inserted}`);
        console.log(`   🔸 Skipped: ${skipped}`);

        process.exit(0);
    } catch (err) {
        console.error("❌ Error during bulk seed:", err);
        process.exit(1);
    }
}

seedBulk();
