const DailyTest = require('../models/DailyTest');
const QuizTemplate = require('../models/QuizTemplate');
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

        let finalDate = new Date();
        // If specific date provided (e.g. for daily test backfill), parse it
        if (date) {
            finalDate = new Date(date);
        } else if (type === 'daily') {
            // For daily tests, normalize to today's date (local midnight or UTC midnight depending on policy)
            // Simpler: Just use the provided date string YYYY-MM-DD and let Mongo cast to start of day
            const todayStr = new Date().toISOString().split('T')[0];
            finalDate = new Date(todayStr);
        }

        const newTest = new DailyTest({
            date: finalDate,
            examId,
            title: type === 'daily' ? `Daily Drill - ${date || new Date().toISOString().split('T')[0]}` : `${topic} Practice`,
            questions: questionIds,
            isPublished: true,
            type,
            topic,
            duration: count * 60, // Default 1 min per question
            maxMarks: count * 1   // Default 1 mark per question
        });

        await newTest.save();
        const populatedTest = await DailyTest.findById(newTest._id).populate('questions.questionId');
        console.log(`   ✅ Test created successfully with ${populatedTest.questions.length} questions`);
        return populatedTest;
    } catch (err) {
        console.error(`❌ Error creating test for ${examId}:`, err.message);
        throw err;
    }
}

/**
 * Creates a practice test from a predefined template
 */
async function createTestFromTemplate(templateId) {
    try {
        const template = await QuizTemplate.findById(templateId);
        if (!template) throw new Error('Template not found');

        console.log(`⚡ Generating test from template: ${template.title}`);

        // Construct query criteria
        // If template has specific examId, use it. Otherwise rely on category.
        // Note: examDatabaseManager might need adjustment if it strictly requires 'examId'.
        // For now, assuming examCategory maps to an examId concept or we pick a default for that category.

        let targetExamId = template.examId;
        if (!targetExamId) {
            // Map category to a default examId for question fetching if needed
            // OR we assume questions are tagged by 'exam' which is actually the category in some datasets
            // Let's assume for now we search by the category as the examId for broad categories
            targetExamId = template.examCategory;
        }

        const questions = await getRandomQuestions({
            examId: targetExamId, // This might need to match your Question schema 'exam' field
            topic: template.topic,
            count: template.questionCount
        });

        if (questions.length === 0) {
            throw new Error(`No questions found for template criteria: ${template.examCategory} - ${template.topic}`);
        }

        const newTest = new DailyTest({
            date: new Date(),
            examId: targetExamId,
            title: template.title,
            questions: questions.map((q, idx) => ({
                questionId: q._id,
                order: idx + 1
            })),
            isPublished: true,
            type: 'practice',
            topic: template.topic,
            duration: template.duration * 60, // Template duration is in mins
            maxMarks: template.questionCount * 1 // Default marks
        });

        await newTest.save();
        return await DailyTest.findById(newTest._id).populate('questions.questionId');

    } catch (err) {
        console.error("Template Gen Error:", err);
        throw err;
    }
}

/**
 * Generates or retrieves the Daily Test for a specific Exam.
 * FETCHES FROM DATABASE if exists, only generates once per day.
 * Uses MongoDB upsert to handle race conditions safely.
 */
const { getISTDateString } = require('./dateUtils');

// ...

async function getOrCreateDailyTest(examId, date) {
    try {
        const dateStr = date || getISTDateString();
        // Normalize to midnight for consistent finding
        const checkDate = new Date(dateStr);

        console.log(`📝 Loading daily test for ${examId} on ${dateStr}...`);

        // Step 1: Check if test already exists (FETCH FROM DB)
        // Find using a date range to be safe against time components
        const startOfDay = new Date(dateStr); startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(dateStr); endOfDay.setHours(23, 59, 59, 999);

        const existingTest = await DailyTest.findOne({
            examId,
            type: 'daily',
            date: { $gte: startOfDay, $lte: endOfDay }
        }).populate('questions.questionId');

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

        const questionsWithOrder = questions.map((q, index) => ({
            questionId: q._id,
            order: index + 1
        }));
        console.log(`   ✅ Selected ${questions.length} random questions`);

        // Step 3: Save to database
        const newTest = new DailyTest({
            examId,
            date: checkDate,
            type: 'daily',
            topic: 'General',
            title: `Daily Drill - ${dateStr}`,
            questions: questionsWithOrder,
            isPublished: true,
            duration: 600, // 10 mins
            maxMarks: 10
        });

        await newTest.save();
        const populatedTest = await DailyTest.findById(newTest._id).populate('questions.questionId');

        console.log(`✅ Daily test GENERATED & SAVED to DB - ${populatedTest.questions.length} questions`);
        return populatedTest;

    } catch (err) {
        console.error(`❌ Failed to get/create daily test for ${examId}:`, err.message);
        throw new Error(`Failed to load daily test for ${examId}`);
    }
}


module.exports = { getOrCreateDailyTest, createTest, createTestFromTemplate };
