const DailyTest = require('../models/DailyTest');
const Question = require('../models/Question');

/**
 * Generates or retrieves the Daily Test for a specific Exam.
 * @param {string} examId - The exam ID (e.g., 'sbi-po')
 * @param {string} date - Date string 'YYYY-MM-DD'
 */
async function getOrCreateDailyTest(examId, date) {
    // 1. Check if test exists
    let existingTest = await DailyTest.findOne({ examId, date }).populate('questions');
    if (existingTest) {
        return existingTest;
    }

    // 2. If not, generate one
    console.log(`⚡ Generating Daily Test for ${examId} on ${date}...`);

    // Strategy: Pick 10 random questions for this exam
    // In future: Use smart selection based on topics
    const questions = await Question.aggregate([
        { $match: { exam: examId } },
        { $sample: { size: 10 } }
    ]);

    if (questions.length === 0) {
        throw new Error(`No questions found for exam: ${examId}`);
    }

    const questionIds = questions.map(q => q._id);

    const newTest = new DailyTest({
        date,
        examId,
        title: `Daily Drill - ${date}`,
        questions: questionIds,
        isPublished: true
    });

    await newTest.save();
    return await DailyTest.findById(newTest._id).populate('questions');
}

module.exports = { getOrCreateDailyTest };
