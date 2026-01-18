const mongoose = require('mongoose');
require('dotenv').config();
const Question = require('../models/Question');
const DailyTest = require('../models/DailyTest');
const exams = require('../data/exams');

const MOCK_TOPICS = {
    'banking': ['Banking Awareness', 'Quantitative Aptitude', 'Reasoning Ability', 'English Language'],
    'regulatory': ['Economic Issues', 'Finance', 'Management', 'Current Affairs']
};

const MOCK_QUESTIONS = [
    { q: "What is the full form of GDP?", a: "Gross Domestic Product", ops: ["Gross Domestic Product", "Gross Domestic Plan", "General Domestic Product", "Global Domestic Product"] },
    { q: "Who regulates the insurance sector in India?", a: "IRDAI", ops: ["RBI", "SEBI", "IRDAI", "PFRDA"] },
    { q: "The Headquarters of RBI is in?", a: "Mumbai", ops: ["Delhi", "Kolkata", "Mumbai", "Chennai"] },
    { q: "Which is the largest public sector bank?", a: "SBI", ops: ["PNB", "BoB", "SBI", "Canara"] },
    { q: "What implies a situation of rising prices?", a: "Inflation", ops: ["Deflation", "Inflation", "Stagflation", "Recession"] },
    { q: "If A is brother of B, and B is sister of C, how is C related to A?", a: "Brother or Sister", ops: ["Brother", "Sister", "Cousin", "Brother or Sister"] },
    { q: "Synonym of 'Abundant' is?", a: "Plentiful", ops: ["Scarce", "Plentiful", "Rare", "Few"] },
    { q: "Solve: 15% of 200 + 10?", a: "40", ops: ["30", "40", "50", "35"] }
];

async function seedAll() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB');

        const today = new Date().toISOString().split('T')[0];

        for (const exam of exams) {
            console.log(`\nProcessing ${exam.id}...`);

            // 1. Check if Generic Questions exist for this exam
            const count = await Question.countDocuments({ exam: exam.id });
            if (count < 10) {
                console.log(`   🔸 Low questions (${count}). Generating seeds...`);

                const newQs = [];
                for (let i = 0; i < 15; i++) {
                    const tbi = MOCK_QUESTIONS[i % MOCK_QUESTIONS.length];
                    const category = exam.category || 'banking';
                    const topics = MOCK_TOPICS[category] || MOCK_TOPICS['banking'];
                    const randomTopic = topics[i % topics.length];

                    newQs.push({
                        exam: exam.id,
                        subject: 'General',
                        topic: randomTopic,
                        difficulty: 'Medium',
                        questionText: `${tbi.q} (for ${exam.title})`,
                        options: tbi.ops,
                        correctIndex: tbi.ops.indexOf(tbi.a),
                        explanation: `The correct answer is ${tbi.a}. This is a standard concept in ${randomTopic}.`,
                        source: 'Seed Script'
                    });
                }

                const inserted = await Question.insertMany(newQs);
                console.log(`   ✅ Inserted ${inserted.length} questions.`);
            } else {
                console.log(`   🔹 Sufficient questions exist (${count}).`);
            }

            // 2. Ensure Daily Test Exists
            let test = await DailyTest.findOne({ examId: exam.id, date: today });
            if (!test) {
                // Fetch random Qs
                const questions = await Question.aggregate([
                    { $match: { exam: exam.id } },
                    { $sample: { size: 10 } }
                ]);

                if (questions.length > 0) {
                    const newTest = new DailyTest({
                        date: today,
                        examId: exam.id,
                        title: `Daily Drill - ${today}`,
                        questions: questions.map(q => q._id),
                        isPublished: true
                    });
                    await newTest.save();
                    console.log(`   🎉 Created Daily Test: ${newTest.title}`);
                } else {
                    console.log(`   ⚠️ Could not create test (No questions found)`);
                }
            } else {
                console.log(`   🔹 Daily test already exists.`);
            }
        }

        console.log('\n🏁 Seeding Complete!');
        process.exit(0);

    } catch (err) {
        console.error('❌ Seeding Failed:', err);
        process.exit(1);
    }
}

seedAll();
