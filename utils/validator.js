const Question = require('../models/Question');

/**
 * Validates AI-generated questions before insertion.
 * @param {Array} questions - Array of raw question objects from AI
 * @returns {Promise<Object>} - { valid: [], invalid: [] }
 */
async function validateAndSanitize(questions) {
    const valid = [];
    const invalid = [];

    for (const q of questions) {
        try {
            // 1. Basic Schema Validation using Mongoose
            const questionDoc = new Question(q);
            await questionDoc.validate();

            // 2. Logic Validation (Extra rules)
            if (q.options.length !== 4) throw new Error('Options count must be 4');
            if (q.correctIndex < 0 || q.correctIndex > 3) throw new Error('Invalid correctIndex');

            // 3. Duplicate Check (Mock logic for now)
            // const exists = await Question.findOne({ questionText: q.questionText });
            // if (exists) throw new Error('Duplicate Question');

            valid.push(questionDoc);
        } catch (err) {
            console.warn(`⚠️ Validation Failed: ${err.message}`);
            invalid.push({ question: q, error: err.message });
        }
    }

    return { valid, invalid };
}

module.exports = { validateAndSanitize };
