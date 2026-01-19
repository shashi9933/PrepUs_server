/**
 * Core Engine to analyze test attempts and generate insights.
 */

const analyzeAttempt = (attempt) => {
    // ... existing logic ...
    const { questions, totalTimeTaken } = attempt;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    let score = 0;
    let maxMarks = questions.length * 1;

    // Section/Topic Wise Breakdown
    const topicMap = {};
    const difficultyMap = { Easy: { total: 0, correct: 0 }, Medium: { total: 0, correct: 0 }, Hard: { total: 0, correct: 0 } };
    const mistakeLog = [];

    questions.forEach(q => {
        const questionDetails = q.questionId;
        if (!questionDetails) return;

        const topic = questionDetails.topic || 'General';
        const subject = questionDetails.subject || 'General Awareness'; // Ensure subject exists

        if (!topicMap[topic]) topicMap[topic] = { total: 0, correct: 0, timeSpent: 0, subject };

        topicMap[topic].total++;
        topicMap[topic].timeSpent += q.timeTaken;

        const diff = questionDetails.difficulty || 'Medium';
        if (difficultyMap[diff]) difficultyMap[diff].total++;

        if (q.status === 'skipped' || q.selectedOption === -1) {
            skipped++;
        } else if (q.isCorrect) {
            correct++;
            score += 1;
            topicMap[topic].correct++;
            if (difficultyMap[diff]) difficultyMap[diff].correct++;
        } else {
            wrong++;
            score -= 0.25;

            // Mistake Classification Logic
            let mistakeType = 'Conceptual Error';
            if (q.timeTaken < 5) mistakeType = 'Careless/Silly Mistake';
            else if (q.timeTaken > 120) mistakeType = 'Time Management Fail';

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
        .slice(0, 3);

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

/**
 * Aggregates multiple TestAttempts to generate Dashboard High-Level Metrics
 */
const generateDashboardStats = (history) => {
    if (!history || history.length === 0) return null;

    let totalTests = history.length;
    let totalQuestions = 0;
    let totalCorrect = 0;
    let totalScore = 0;
    let totalMaxScore = 0;

    // Aggregators
    const subjectStats = {};
    const topicStats = {};
    const mistakeCounts = {};
    const dailyActivity = {}; // Date -> count

    history.forEach(attempt => {
        if (!attempt) return; // Skip null/undefined attempts
        
        totalScore += attempt.score || 0;
        totalMaxScore += attempt.maxMarks || 0;

        // Populate Daily Activity (for Heatmap)
        // Use createdAt (from timestamps) or completedAt or fallback to now
        const date = attempt.completedAt || attempt.createdAt || new Date();
        
        // Safely create date to avoid "Invalid time value" error
        let dateKey;
        try {
            const dateObj = new Date(date);
            if (isNaN(dateObj.getTime())) {
                // Date is invalid, use today
                dateKey = new Date().toISOString().split('T')[0];
            } else {
                dateKey = dateObj.toISOString().split('T')[0];
            }
        } catch (err) {
            console.warn('Invalid date in attempt:', date, err.message);
            dateKey = new Date().toISOString().split('T')[0]; // Use today if date is invalid
        }
        
        dailyActivity[dateKey] = (dailyActivity[dateKey] || 0) + 1;

        // Process Questions in Attempt
        if (attempt.questions) {
            attempt.questions.forEach(q => {
                const qDetail = q.questionId;
                if (!qDetail) return;

                totalQuestions++;
                if (q.isCorrect) totalCorrect++;

                // Subject/Topic Aggregation
                const subject = qDetail.subject || 'General';
                const topic = qDetail.topic || 'General';

                if (!subjectStats[subject]) subjectStats[subject] = { total: 0, correct: 0, time: 0 };
                subjectStats[subject].total++;
                subjectStats[subject].time += q.timeTaken || 0;
                if (q.isCorrect) subjectStats[subject].correct++;

                if (!topicStats[topic]) topicStats[topic] = { total: 0, correct: 0, subject };
                topicStats[topic].total++;
                if (q.isCorrect) topicStats[topic].correct++;

                // Mistake Aggregation
                if (!q.isCorrect && q.status !== 'skipped') {
                    // Re-infer mistake type if not stored, or use simple heuristics
                    // For now, let's categorize purely by time for bulk
                    let type = 'Conceptual';
                    if ((q.timeTaken || 0) < 5) type = 'Silly Mistake';
                    else if ((q.timeTaken || 0) > 100) type = 'Time Pressure';

                    mistakeCounts[type] = (mistakeCounts[type] || 0) + 1;
                }
            });
        }
    });

    // 1. Exam Readiness Score (0-100)
    // Formula: (Accuracy * 0.5) + (Coverage * 0.3) + (Consistency * 0.2)
    // Simplified for now: Pure Accuracy scaled + Consistency bonus
    const overallAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
    const consistencyBonus = Math.min(totalTests * 2, 20); // Cap at 20 points
    let readinessScore = Math.min((overallAccuracy * 0.8) + consistencyBonus, 100);

    // 2. Identify Weak Areas
    const weakTopics = Object.entries(topicStats)
        .map(([name, stats]) => ({
            name,
            accuracy: (stats.correct / stats.total) * 100,
            total: stats.total
        }))
        .filter(t => t.accuracy < 60 && t.total > 2) // Filtering significant weak areas
        .sort((a, b) => a.accuracy - b.accuracy)
        .slice(0, 5);

    return {
        overall: {
            testsTaken: totalTests,
            avgScore: (totalScore / totalTests).toFixed(1),
            accuracy: overallAccuracy.toFixed(1),
            readiness: readinessScore.toFixed(0)
        },
        trends: history.slice(0, 10).map(h => {
            // Handle date safely - use createdAt or completedAt
            const date = h.completedAt || h.createdAt || new Date();
            let dateStr;
            try {
                dateStr = new Date(date).toLocaleDateString();
            } catch (err) {
                console.warn('Invalid date in history:', date, err.message);
                dateStr = new Date().toLocaleDateString();
            }
            
            return {
                date: dateStr,
                score: h.score,
                accuracy: h.accuracy
            };
        }).reverse(),
        subjects: subjectStats,
        weakAreas: weakTopics,
        mistakes: mistakeCounts,
        activity: dailyActivity
    };
};

module.exports = { analyzeAttempt, generateDashboardStats };
