/**
 * Core Engine to analyze test attempts and generate insights.
 */

const analyzeAttempt = (attempt) => {
    const { questions, totalTimeTaken } = attempt;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    let score = 0;
    let maxMarks = questions.length * 1; // Assuming 1 mark per question for now

    // Section/Topic Wise Breakdown
    const topicMap = {};
    const difficultyMap = { Easy: { total: 0, correct: 0 }, Medium: { total: 0, correct: 0 }, Hard: { total: 0, correct: 0 } };
    const mistakeLog = [];

    questions.forEach(q => {
        // Populate Topic Map
        // Note: q.questionId might be populated or we need to pass the full question objects.
        // Assuming 'q' here has the populated Question details attached to it for analysis
        // checking if q.questionId is an object (populated)
        const questionDetails = q.questionId;

        if (!questionDetails) return; // Safety check

        const topic = questionDetails.topic || 'General';
        if (!topicMap[topic]) topicMap[topic] = { total: 0, correct: 0, timeSpent: 0 };

        topicMap[topic].total++;
        topicMap[topic].timeSpent += q.timeTaken;

        const diff = questionDetails.difficulty || 'Medium';
        difficultyMap[diff].total++;

        if (q.status === 'skipped' || q.selectedOption === -1) {
            skipped++;
        } else if (q.isCorrect) {
            correct++;
            score += 1; // Logic can be complex based on exam pattern
            topicMap[topic].correct++;
            difficultyMap[diff].correct++;
        } else {
            wrong++;
            score -= 0.25; // Negative marking (Configurable)

            // Mistake Classification Logic
            let mistakeType = 'Conceptual Error';
            if (q.timeTaken < 5) mistakeType = 'Careless/Silly Mistake';
            if (q.timeTaken > 120) mistakeType = 'Time Management Fail';

            mistakeLog.push({
                questionId: questionDetails._id,
                topic: topic,
                timeTaken: q.timeTaken,
                type: mistakeType
            });
        }
    });

    const accuracy = (correct / (correct + wrong)) * 100 || 0;

    // Recommendations
    const weakTopics = Object.keys(topicMap)
        .filter(t => (topicMap[t].correct / topicMap[t].total) < 0.5)
        .slice(0, 3); // Top 3 weak areas

    const strongTopics = Object.keys(topicMap)
        .filter(t => (topicMap[t].correct / topicMap[t].total) > 0.8)
        .slice(0, 3);

    return {
        summary: {
            score: score.toFixed(2),
            maxMarks,
            accuracy: accuracy.toFixed(2),
            correct,
            wrong,
            skipped,
            totalTime: totalTimeTaken
        },
        topicAnalysis: topicMap,
        difficultyAnalysis: difficultyMap,
        mistakes: mistakeLog,
        recommendations: {
            weakTopics,
            strongTopics,
            action: weakTopics.length > 0
                ? `Focus on revising: ${weakTopics.join(', ')}`
                : 'Good job! Try increasing speed.'
        }
    };
};

module.exports = { analyzeAttempt };
