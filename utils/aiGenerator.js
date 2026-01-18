const MAX_RETRIES = 3;

/**
 * Generates questions using AI (Mock for now, ready for Gemini SDK)
 * @param {string} exam - Exam ID (e.g., 'sbi-po')
 * @param {string} topic - Topic (e.g., 'Banking Awareness')
 * @param {number} count - Number of questions (default 5)
 * @returns {Promise<Array>} - Array of validated question objects
 */
async function generateQuestions(exam, topic, count = 5) {
    console.log(`🤖 AI: Generating ${count} questions for ${exam} [${topic}]...`);

    const prompt = constructPrompt(exam, topic, count);

    // TODO: Call Gemini/OpenAI API here
    // const rawResponse = await callAI(prompt);

    // Mock Response for testing flow
    const MOCK_POOL = [
        { q: "Which body regulates the capital markets in India?", a: "SEBI", ops: ["RBI", "SEBI", "IRDAI", "NABARD"], t: "Financial Systems" },
        { q: "What does 'CRR' stand for in banking?", a: "Cash Reserve Ratio", ops: ["Cash Reserve Ratio", "Credit Reserve Ratio", "Core Reserve Ratio", "Central Reserve Ratio"], t: "Banking Terms" },
        { q: "Who is the current Governor of RBI?", a: "Shaktikanta Das", ops: ["Urjit Patel", "Raghuram Rajan", "Shaktikanta Das", "D Subbarao"], t: "Current Affairs" },
        { q: "The headquarters of World Bank is located in?", a: "Washington D.C.", ops: ["Geneva", "New York", "Washington D.C.", "Paris"], t: "International Org" },
        { q: "Which sector contributes most to India's GDP?", a: "Services", ops: ["Agriculture", "Industry", "Services", "Manufacturing"], t: "Economy" },
        { q: "What is the maximum limit for FDI in Public Sector Banks?", a: "20%", ops: ["20%", "49%", "74%", "100%"], t: "Banking Awareness" },
        { q: "When was the first Five Year Plan introduced?", a: "1951", ops: ["1947", "1950", "1951", "1955"], t: "Economy History" }
    ];

    const generatedMock = Array.from({ length: count }).map((_, i) => {
        const template = MOCK_POOL[Math.floor(Math.random() * MOCK_POOL.length)];
        return {
            exam: exam,
            subject: 'General Awareness',
            topic: template.t, // Varied topics
            difficulty: 'Medium',
            questionText: `${template.q} (Ver ${i + 1})`, // Make unique
            options: template.ops,
            correctIndex: template.ops.indexOf(template.a),
            explanation: `${template.a} is the correct answer because it fits the definition.`,
            source: 'AI Generated Mock'
        };
    });

    const mockResponse = JSON.stringify(generatedMock);

    try {
        const data = JSON.parse(mockResponse);
        return data; // Return strict JSON object
    } catch (error) {
        console.error('❌ AI: Failed to parse JSON response');
        return [];
    }
}

function constructPrompt(exam, topic, count) {
    return `
    Act as an expert exam setter for ${exam}.
    Generate ${count} multiple-choice questions on the topic: "${topic}".
    Difficulty: Medium.
    
    STRICT JSON FORMAT REQUIRED:
    [
      {
        "exam": "${exam}",
        "subject": "General Awareness",
        "topic": "${topic}",
        "difficulty": "Medium",
        "questionText": "...",
        "options": ["A", "B", "C", "D"],
        "correctIndex": 0,
        "explanation": "...",
        "source": "Current Affairs 2024"
      }
    ]
    
    Rules:
    1. Return ONLY valid JSON. No markdown, no conversation.
    2. options must be an array of exactly 4 strings.
    3. correctIndex must be 0-3.
  `;
}

module.exports = { generateQuestions };
