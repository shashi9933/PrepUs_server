/**
 * Exam-Specific Database Manager
 * Organizes questions by exam for optimal query performance
 * 
 * Strategy:
 * - Each exam has its questions indexed separately
 * - All questions still in same collection, but with compound indexes
 * - Enables fast queries like: find questions for 'sbi-po' with topic 'Banking'
 * - No separate databases needed - MongoDB handles it efficiently
 */

const Question = require('../models/Question');
const DailyTest = require('../models/DailyTest');

/**
 * Ensure all necessary indexes exist for optimal performance
 * Call this once during app startup
 */
async function ensureIndexes() {
    try {
        console.log('Creating indexes...');
        
        try {
            await Question.collection.createIndex({ exam: 1 });
            console.log('✅ Index created: exam');
        } catch (e) {
            console.log('⚠️ Index exam:', e.message);
        }

        try {
            await Question.collection.createIndex({ exam: 1, topic: 1 });
            console.log('✅ Index created: exam + topic');
        } catch (e) {
            console.log('⚠️ Index exam+topic:', e.message);
        }

        try {
            await Question.collection.createIndex({ exam: 1, difficulty: 1 });
            console.log('✅ Index created: exam + difficulty');
        } catch (e) {
            console.log('⚠️ Index exam+difficulty:', e.message);
        }

        try {
            await DailyTest.collection.createIndex({ examId: 1, date: 1 }, { unique: true, sparse: true });
            console.log('✅ Index created: examId + date (unique)');
        } catch (e) {
            console.log('⚠️ Index examId+date:', e.message);
        }

        try {
            await DailyTest.collection.createIndex({ examId: 1 });
            console.log('✅ Index created: examId');
        } catch (e) {
            console.log('⚠️ Index examId:', e.message);
        }

        console.log('🎯 All performance indexes ready!');
    } catch (err) {
        console.error('⚠️ Index creation error:', err.message);
    }
}

/**
 * Get question statistics for an exam
 * Helps determine how many questions are available
 */
async function getExamStats(examId) {
    try {
        const total = await Question.countDocuments({ exam: examId });
        const byTopic = await Question.aggregate([
            { $match: { exam: examId } },
            { $group: { _id: '$topic', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        const byDifficulty = await Question.aggregate([
            { $match: { exam: examId } },
            { $group: { _id: '$difficulty', count: { $sum: 1 } } }
        ]);

        return {
            totalQuestions: total,
            byTopic,
            byDifficulty
        };
    } catch (err) {
        console.error('Error getting exam stats:', err);
        return null;
    }
}

/**
 * Fetch questions efficiently using compound indexes
 */
async function fetchExamQuestions({ examId, topic = null, difficulty = null, limit = 10 }) {
    try {
        const query = { exam: examId };
        
        if (topic && topic !== 'General') {
            query.topic = { $regex: topic, $options: 'i' };
        }
        
        if (difficulty) {
            query.difficulty = difficulty;
        }

        const questions = await Question.find(query).limit(limit).exec();
        return questions;
    } catch (err) {
        console.error('Error fetching questions:', err);
        throw err;
    }
}

/**
 * Get random sample of questions from an exam (for test generation)
 * Uses MongoDB aggregation for efficient random sampling
 */
async function getRandomQuestions({ examId, topic = null, difficulty = null, count = 10 }) {
    try {
        const matchStage = { exam: examId };
        
        if (topic && topic !== 'General') {
            matchStage.topic = { $regex: topic, $options: 'i' };
        }
        
        if (difficulty) {
            matchStage.difficulty = difficulty;
        }

        const questions = await Question.aggregate([
            { $match: matchStage },
            { $sample: { size: count } }
        ]);

        return questions;
    } catch (err) {
        console.error('Error getting random questions:', err);
        throw err;
    }
}

/**
 * Fast lookup for today's test (uses indexed query)
 * Returns test if exists, null otherwise
 */
async function getDailyTestIfExists(examId, date) {
    try {
        const test = await DailyTest.findOne({
            examId,
            date,
            type: 'daily'
        }).populate('questions').exec();

        return test;
    } catch (err) {
        console.error('Error getting daily test:', err);
        return null;
    }
}

/**
 * Create a new daily test if it doesn't exist
 * Uses atomic operation to prevent race conditions
 */
async function createOrGetDailyTest(examId, date, questionIds) {
    try {
        const test = await DailyTest.findOneAndUpdate(
            {
                examId,
                date,
                type: 'daily'
            },
            {
                $setOnInsert: {
                    examId,
                    date,
                    type: 'daily',
                    topic: 'General',
                    title: `Daily Drill - ${date}`,
                    questions: questionIds,
                    isPublished: true
                }
            },
            {
                upsert: true,
                new: true,
                lean: false
            }
        ).populate('questions').exec();

        return test;
    } catch (err) {
        console.error('Error creating/getting daily test:', err);
        throw err;
    }
}

module.exports = {
    ensureIndexes,
    getExamStats,
    fetchExamQuestions,
    getRandomQuestions,
    getDailyTestIfExists,
    createOrGetDailyTest
};
