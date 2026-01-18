const { generateQuestions } = require('./aiGenerator');
const { validateAndSanitize } = require('./validator');
const { getOrCreateDailyTest } = require('./dailyTestGenerator');
const Question = require('../models/Question');
const exams = require('../data/exams');

/**
 * Orchestrates the daily workflow:
 * 1. Generate new Questions via AI
 * 2. Save them to DB
 * 3. Create a Daily Test using fresh + existing questions
 */
async function runDailyScheduler() {
    console.log('🚀 Scheduler: Starting Daily Routine...');
    const today = new Date().toISOString().split('T')[0];

    for (const exam of exams) {
        const examId = exam.id;
        console.log(`Processing ${examId}...`);

        try {
            // Step 1: Generate Fresh Content (e.g., 5 new questions/day)
            // Pick a random topic from syllabus if available, else generic
            const topic = 'Banking Awareness'; // TODO: Rotate topics
            const rawQ = await generateQuestions(examId, topic, 5);

            // Step 2: Validate & Save
            const { valid } = await validateAndSanitize(rawQ);
            if (valid.length > 0) {
                await Question.insertMany(valid);
                console.log(`  ✅ Saved ${valid.length} new questions for ${examId}`);
            }

            // Step 3: Create the Daily Test
            // This will pull from the pool we just added to
            const test = await getOrCreateDailyTest(examId, today);
            console.log(`  🎉 Test Ready: ${test.title} (${test.questions.length} Qs)`);

        } catch (err) {
            console.error(`  ❌ Failed for ${examId}:`, err.message);
        }
    }
    console.log('🏁 Scheduler: Routine Complete.');
}

module.exports = { runDailyScheduler };
