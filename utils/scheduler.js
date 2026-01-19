const cron = require('node-cron');
const exams = require('../data/exams'); // Source of truth for exams
const { generateQuestions } = require('./aiGenerator');
const { getOrCreateDailyTest } = require('./dailyTestGenerator');
const Question = require('../models/Question');

const { getISTDate } = require('./dateUtils');

/**
 * Initialize all scheduled jobs
 */
function init() {
    console.log('⏰ Scheduler Service Initialized');

    // Schedule: Daily at 00:00 (Midnight)
    // Format: Minute Hour Day Month DayOfWeek
    cron.schedule('0 0 * * *', async () => {
        console.log('🔔 Running Daily Content Job...');
        await runDailyContentCycle();
    });
}

/**
 * The core logic that runs every day
 * 1. Iterate all exams
 * 2. Check question bank health
 * 3. Replenish if needed (AI)
 * 4. Generate/Ensure Daily Test exists
 */
async function runDailyContentCycle() {
    const today = getISTDate();
    console.log(`📅 IST Date: ${today.toISOString()}`);

    for (const exam of exams) {
        if (!exam.id) continue;

        try {
            console.log(`Processing ${exam.id}...`);

            // 1. Check Bank Health
            const count = await Question.countDocuments({ exam: exam.id });
            const THRESHOLD = 50;

            if (count < THRESHOLD) {
                console.log(`📉 Low inventory for ${exam.id} (${count} < ${THRESHOLD}). Triggering AI...`);
                // Generate 10 new questions to replenish
                const newQuestions = await generateQuestions(exam.id, 'General Awareness', 10);

                if (newQuestions.length > 0) {
                    await Question.insertMany(newQuestions);
                    console.log(`✅ Added ${newQuestions.length} new AI questions for ${exam.id}`);
                }
            }

            // 2. Generate Daily Test
            const test = await getOrCreateDailyTest(exam.id, today);
            console.log(`✨ Daily Test Ready: ${test.title} (${test.questions.length} Qs)`);

        } catch (err) {
            console.error(`❌ Job Failed for ${exam.id}:`, err.message);
        }
    }
    console.log('🏁 Daily Content Cycle Completed');
}

module.exports = { init, runDailyContentCycle };
