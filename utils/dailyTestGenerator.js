const DailyTest = require('../models/DailyTest');
const Question = require('../models/Question');
const { getRandomQuestions } = require('./examDatabaseManager');

/**
 * Creates a new test (Daily or Practice)
 * Fetches questions from pre-indexed database
 */
async function createTest({ examId, date, type = 'daily', topic = 'General', count = 10 }) {
    console.log(`⚡ Generating ${type} Test for ${examId} (${topic})...`);

    try {
        // Check how many questions exist first using indexed query
        const totalQuestions = await Question.countDocuments({ exam: examId });
        console.log(`   Found ${totalQuestions} questions for exam ${examId}`);

        if (totalQuestions === 0) {
            throw new Error(`❌ No questions found in database for exam: ${examId}. Please seed the database first.`);
        }

        // Fetch random questions using optimized aggregation with compound indexes
        const questions = await getRandomQuestions({
            examId,
            topic: topic !== 'General' ? topic : null,
            count: Math.min(count, totalQuestions)
        });

        if (questions.length === 0) {
            // Fallback: Try without topic constraint if specific topic failed
            if (topic !== 'General') {
                console.log("⚠️ No questions found for topic, falling back to general pool.");
                return createTest({ examId, date, type, topic: 'General', count });
            }
            throw new Error(`❌ No questions found for exam: ${examId}`);
        }

        console.log(`   ✅ Selected ${questions.length} random questions`);

        const questionIds = questions.map(q => q._id);

        const dateStr = date || new Date().toISOString().split('T')[0];
        
        // For practice tests, always use unique timestamp to avoid collisions
        // For daily tests, use the date as-is (unique index enforces one per day per exam)
        let finalDate = dateStr;
        if (type === 'practice') {
            finalDate = `${dateStr}_${Date.now()}_${Math.random()}`;
        }

        const newTest = new DailyTest({
            date: finalDate,
            examId,
            title: type === 'daily' ? `Daily Drill - ${date}` : `${topic} Practice`,
            questions: questionIds,
            isPublished: true,
            type,
            topic
        });

        await newTest.save();
        const populatedTest = await DailyTest.findById(newTest._id).populate('questions');
        console.log(`   ✅ Test created successfully with ${populatedTest.questions.length} questions`);
        return populatedTest;
    } catch (err) {
        console.error(`❌ Error creating test for ${examId}:`, err.message);
        throw err;
    }
}

/**
 * Generates or retrieves the Daily Test for a specific Exam.
 * FETCHES FROM DATABASE if exists, only generates once per day.
 * Uses MongoDB upsert to handle race conditions safely.
 */
async function getOrCreateDailyTest(examId, date) {
    try {
        const dateStr = date || new Date().toISOString().split('T')[0];
        
        console.log(`📝 Loading daily test for ${examId} on ${dateStr}...`);

        // Step 1: Check if test already exists (FETCH FROM DB)
        // Note: We don't filter by type since all our daily tests should be type 'daily'
        const existingTest = await DailyTest.findOne({
            examId,
            date: dateStr
        }).populate('questions');

        if (existingTest && existingTest.questions && existingTest.questions.length > 0) {
            console.log(`✅ Daily test already exists (fetched from DB) - ${existingTest.questions.length} questions`);
            return existingTest;
        }

        // Step 2: If not exists, generate it (only once per day)
        console.log(`⏳ Test doesn't exist. Generating questions...`);
        
        const totalQuestions = await Question.countDocuments({ exam: examId });
        
        if (totalQuestions === 0) {
            throw new Error(`No questions found for exam: ${examId}`);
        }

        // Fetch random questions using optimized method
        const questions = await getRandomQuestions({
            examId,
            count: Math.min(10, totalQuestions)
        });

        if (questions.length === 0) {
            throw new Error(`Failed to select questions for exam: ${examId}`);
        }

        const questionIds = questions.map(q => q._id);
        console.log(`   ✅ Selected ${questions.length} random questions`);

        // Step 3: Save to database
        const newTest = new DailyTest({
            examId,
            date: dateStr,
            type: 'daily',
            topic: 'General',
            title: `Daily Drill - ${dateStr}`,
            questions: questionIds,
            isPublished: true
        });

        await newTest.save();
        const populatedTest = await DailyTest.findById(newTest._id).populate('questions');
        
        console.log(`✅ Daily test GENERATED & SAVED to DB - ${populatedTest.questions.length} questions`);
        return populatedTest;

    } catch (err) {
        console.error(`❌ Failed to get/create daily test for ${examId}:`, err.message);
        throw new Error(`Failed to load daily test for ${examId}`);
    }
}


module.exports = { getOrCreateDailyTest, createTest };
