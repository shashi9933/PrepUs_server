const DailyTest = require('../models/DailyTest');
const Question = require('../models/Question');

/**
 * Creates a new test (Daily or Practice)
 */
async function createTest({ examId, date, type = 'daily', topic = 'General', count = 10 }) {
    console.log(`⚡ Generating ${type} Test for ${examId} (${topic})...`);

    try {
        // Strategy: Pick random questions for this exam
        const matchStage = { exam: examId };
        if (topic !== 'General' && type === 'practice') {
            // Simple regex matching for topic if provided (or exact match)
            matchStage.$or = [
                { subject: { $regex: topic, $options: 'i' } },
                { topic: { $regex: topic, $options: 'i' } }
            ];
        }

        // Check how many questions exist first
        const totalQuestions = await Question.countDocuments({ exam: examId });
        console.log(`   Found ${totalQuestions} questions for exam ${examId}`);

        if (totalQuestions === 0) {
            throw new Error(`❌ No questions found in database for exam: ${examId}. Please seed the database first.`);
        }

        const questions = await Question.aggregate([
            { $match: matchStage },
            { $sample: { size: Math.min(count, totalQuestions) } }
        ]);

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
 * Uses MongoDB upsert to handle race conditions safely.
 */
async function getOrCreateDailyTest(examId, date) {
    try {
        const dateStr = date || new Date().toISOString().split('T')[0];
        
        // Strategy: Use findOneAndUpdate with upsert to avoid race conditions
        // This is atomic at the database level
        
        console.log(`📝 Loading daily test for ${examId} on ${dateStr}...`);

        // First, generate the questions we want to use
        const matchStage = { exam: examId };
        const totalQuestions = await Question.countDocuments({ exam: examId });
        
        if (totalQuestions === 0) {
            throw new Error(`No questions found for exam: ${examId}`);
        }

        const questions = await Question.aggregate([
            { $match: matchStage },
            { $sample: { size: Math.min(10, totalQuestions) } }
        ]);

        if (questions.length === 0) {
            throw new Error(`Failed to select questions for exam: ${examId}`);
        }

        const questionIds = questions.map(q => q._id);
        console.log(`   ✅ Selected ${questions.length} random questions`);

        // Now use findOneAndUpdate with upsert to create or return existing
        const result = await DailyTest.findOneAndUpdate(
            { 
                examId, 
                date: dateStr, 
                type: 'daily' 
            },
            {
                $setOnInsert: {
                    examId,
                    date: dateStr,
                    type: 'daily',
                    topic: 'General',
                    title: `Daily Drill - ${dateStr}`,
                    questions: questionIds,
                    isPublished: true,
                    createdAt: new Date()
                }
            },
            { 
                upsert: true, 
                new: true 
            }
        ).populate('questions');

        if (result) {
            console.log(`✅ Daily test loaded for ${examId} (${result.questions.length} questions)`);
            return result;
        }

        throw new Error('Unexpected: upsert returned null');
    } catch (err) {
        console.error(`❌ Failed to get/create daily test for ${examId}:`, err.message);
        throw new Error(`Failed to load daily test for ${examId}`);
    }
}


module.exports = { getOrCreateDailyTest, createTest };
