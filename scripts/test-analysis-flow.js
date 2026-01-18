const http = require('http');

function request(method, path, data) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 5000,
            path,
            method,
            headers: { 'Content-Type': 'application/json' }
        };

        if (data) options.headers['Content-Length'] = data.length;

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => resolve(JSON.parse(body)));
        });

        req.on('error', reject);
        if (data) req.write(data);
        req.end();
    });
}

async function runFlow() {
    try {
        console.log('STEP 1: Generate Questions...');
        const genData = await request('POST', '/api/admin/generate-questions', JSON.stringify({
            exam: 'sbi-po', topic: 'Flow Test', count: 5
        }));

        const questions = genData.savedQuestions;
        if (!questions || questions.length === 0) throw new Error('No questions generated');
        console.log(`✅ Generated ${questions.length} questions`);
        const qIds = questions.map(q => q._id);

        console.log('STEP 2: Submit Test Attempt...');
        const submitPayload = JSON.stringify({
            userId: '65a000000000000000000000',
            testId: 'flow-test-1',
            examId: 'sbi-po',
            totalTimeTaken: 300,
            responses: [
                { questionId: qIds[0], selectedOption: 0, timeTaken: 4 }, // Assume Correct/Wrong based on chance
                { questionId: qIds[1], selectedOption: -1, timeTaken: 10 }, // Skipped
                { questionId: qIds[2], selectedOption: 2, timeTaken: 100 }, // Slow
                { questionId: qIds[3], selectedOption: 0, timeTaken: 20 },
                { questionId: qIds[4], selectedOption: 1, timeTaken: 20 }
            ]
        });

        const attemptData = await request('POST', '/api/tests/submit', submitPayload);
        console.log('✅ Analysis Received:');
        console.log('   Score:', attemptData.analysis.summary.score);
        console.log('   Accuracy:', attemptData.analysis.summary.accuracy + '%');
        console.log('   Mistakes:', attemptData.analysis.mistakes.length);
        console.log('   Recommendation:', attemptData.analysis.recommendations.action);

    } catch (err) {
        console.error('❌ Flow Failed:', err);
    }
}

runFlow();
