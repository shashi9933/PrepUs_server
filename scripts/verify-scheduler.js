require('dotenv').config();
const mongoose = require('mongoose');
const { runDailyContentCycle } = require('../utils/scheduler');

async function testScheduler() {
    console.log('🧪 Starting Scheduler Verification...');

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to DB');

        console.log('▶️ Triggering Daily Cycle...');
        await runDailyContentCycle();

        console.log('✅ Cycle Completed Successfully');
    } catch (err) {
        console.error('❌ Scheduler Failed:', err);
    } finally {
        await mongoose.disconnect();
        console.log('👋 Disconnected');
    }
}

testScheduler();
