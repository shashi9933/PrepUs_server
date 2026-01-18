const DailyTest = require('../models/DailyTest');
const Question = require('../models/Question');

/**
 * Generates or retrieves the Daily Test for a specific Exam.
 * @param {string} examId - The exam ID (e.g., 'sbi-po')
 * @param {string} date - Date string 'YYYY-MM-DD'
 */
/**
 * Creates a new test (Daily or Practice)
 */
async function createTest({ examId, date, type = 'daily', topic = 'General', count = 10 }) {
    console.log(`⚡ Generating ${type} Test for ${examId} (${topic})...`);

    // Strategy: Pick random questions for this exam
    const matchStage = { exam: examId };
    if (topic !== 'General' && type === 'practice') {
        // Simple regex matching for topic if provided (or exact match)
        matchStage.$or = [
            { subject: { $regex: topic, $options: 'i' } },
            { topic: { $regex: topic, $options: 'i' } }
        ];
    }

    const questions = await Question.aggregate([
        { $match: matchStage },
        { $sample: { size: count } }
    ]);

    if (questions.length === 0) {
        // Fallback: Try without topic constraint if specific topic failed
        if (topic !== 'General') {
            console.log("⚠️ No questions found for topic, falling back to general pool.");
            return createTest({ examId, date, type, topic: 'General', count });
        }
        throw new Error(`No questions found for exam: ${examId}`);
    }

    const questionIds = questions.map(q => q._id);

    const dateStr = date || new Date().toISOString().split('T')[0];
    // For practice tests, we need unique dates to avoid unique index collisions
    const finalDate = type === 'practice' ? `${dateStr}_${Date.now()}` : dateStr;

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
    return await DailyTest.findById(newTest._id).populate('questions');
}

/**
 * Generates or retrieves the Daily Test for a specific Exam.
 */
async function getOrCreateDailyTest(examId, date) {
    // 1. Check if test exists
    let existingTest = await DailyTest.findOne({ examId, date, type: 'daily' }).populate('questions');
    if (existingTest) {
        return existingTest;
    }

    // 2. If not, generate one
    return createTest({ examId, date, type: 'daily' });
}

module.exports = { getOrCreateDailyTest, createTest };
