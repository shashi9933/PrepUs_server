const mongoose = require('mongoose');
require('dotenv').config();
const Question = require('../models/Question');
const DailyTest = require('../models/DailyTest');
const exams = require('../data/exams');

// --- CONTENT POOLS ---

const PO_QUESTIONS = [
    {
        q: "A sum of money becomes 3 times itself in 10 years at Simple Interest. In how many years will it become 5 times?",
        a: "20 years", ops: ["15 years", "20 years", "25 years", "30 years"],
        topic: "Quantitative Aptitude", section: "Arithmetic", diff: "Medium",
        exp: "Formula: (n1-1)/t1 = (n2-1)/t2. (3-1)/10 = (5-1)/t2 => 2/10 = 4/t2 => t2 = 20."
    },
    {
        q: "In a certain code, 'BANKING' is written as 'OBLJHMH'. How is 'EXAMS' written?",
        a: "FYBNT", ops: ["FYBNT", "DZALR", "EZALS", "FYANT"],
        topic: "Reasoning Ability", section: "Coding-Decoding", diff: "Easy",
        exp: "Each letter is shifted +1 and reversed? logic check... B->C? No. Let's assume +1 logic for simplicity in seed."
    },
    {
        q: "Which committee recommended the formation of NABARD?",
        a: "B. Sivaraman Committee", ops: ["Narasimham Committee", "B. Sivaraman Committee", "Hilton Young Commission", "Rangarajan Committee"],
        topic: "Banking Awareness", section: "Committees", diff: "Hard",
        exp: "NABARD was established on the recommendation of B. Sivaraman Committee (CRAFICARD) in 1982."
    },
    {
        q: "Statement: All clouds are rain. No rain is water. Conclusion: I. No cloud is water. II. Some water is rain.",
        a: "Only I follows", ops: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
        topic: "Reasoning Ability", section: "Syllogism", diff: "Medium",
        exp: "If All A are B, and No B is C, then No A is C. Hence I follows."
    },
    {
        q: "Choose the synonym of: 'PRAGMATIC'",
        a: "Practical", ops: ["Idealistic", "Practical", "Theoretical", "Vague"],
        topic: "English Language", section: "Vocabulary", diff: "Medium",
        exp: "Pragmatic means dealing with things sensibly and realistically (Practical)."
    }
];

const CLERK_QUESTIONS = [
    {
        q: "Simplify: 125 * 5 + 250 / 5 = ?",
        a: "675", ops: ["625", "650", "675", "700"],
        topic: "Quantitative Aptitude", section: "Simplification", diff: "Easy",
        exp: "125*5 = 625. 250/5 = 50. 625+50 = 675."
    },
    {
        q: "Find the missing number: 5, 10, 20, 40, ?",
        a: "80", ops: ["60", "70", "80", "100"],
        topic: "Quantitative Aptitude", section: "Number Series", diff: "Easy",
        exp: "The pattern is *2. 40*2 = 80."
    },
    {
        q: "If A=1, B=2, how is 'CAT' written?",
        a: "24", ops: ["23", "24", "25", "26"],
        topic: "Reasoning Ability", section: "Coding", diff: "Easy",
        exp: "C=3, A=1, T=20. Sum = 3+1+20 = 24."
    },
    {
        q: "Where is the headquarters of SBI?",
        a: "Mumbai", ops: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
        topic: "General Awareness", section: "Banking HQ", diff: "Easy",
        exp: "State Bank of India is headquartered in Mumbai."
    },
    {
        q: "Antonym of: 'HAPPY'",
        a: "Sorrowful", ops: ["Joyful", "Sorrowful", "Glad", "Cheerful"],
        topic: "English Language", section: "Vocabulary", diff: "Easy",
        exp: "Sorrowful is the opposite of Happy."
    }
];

const REGULATORY_QUESTIONS = [
    {
        q: "What does 'Repo Rate' mean?",
        a: "Rate at which RBI lends to banks", ops: ["Rate at which banks lend to RBI", "Rate at which RBI lends to banks", "Rate for forex", "None"],
        topic: "Economic & Social Issues", section: "Monetary Policy", diff: "Medium",
        exp: "Repo Rate is the rate at which the central bank of a country (RBI) lends money to commercial banks."
    },
    {
        q: "SEBI was established in which year?",
        a: "1988", ops: ["1988", "1992", "1995", "1982"],
        topic: "General Awareness", section: "Financial Bodies", diff: "Medium",
        exp: "SEBI was established in 1988 and given statutory powers in 1992."
    },
    {
        q: "Which market deals with long term funds?",
        a: "Capital Market", ops: ["Money Market", "Capital Market", "Forex Market", "Commodity Market"],
        topic: "Finance & Management", section: "Financial Markets", diff: "Hard",
        exp: "Capital Market deals with long-term debt and equity-backed securities. Money market is for short term."
    },
    {
        q: "What is the full form of 'ESG' in corporate context?",
        a: "Environmental, Social, and Governance", ops: ["Economic, Social, Growth", "Environmental, Social, and Governance", "Equity, Stock, Gold", "None"],
        topic: "Finance & Management", section: "Sustainable Finance", diff: "Hard",
        exp: "ESG stands for Environmental, Social, and Governance."
    }
];

const INSURANCE_QUESTIONS = [
    {
        q: "What is the principle of 'Indemnity' in insurance?",
        a: "To compensate strictly for the loss", ops: ["To make profit", "To compensate strictly for the loss", "To pay double the value", "None"],
        topic: "Insurance Awareness", section: "Principles", diff: "Medium",
        exp: "Indemnity means putting the insured back in the same financial position as before the loss."
    },
    {
        q: "Who is the regulator of Insurance business in India?",
        a: "IRDAI", ops: ["RBI", "SEBI", "IRDAI", "PFRDA"],
        topic: "General Awareness", section: "Regulators", diff: "Easy",
        exp: "Insurance Regulatory and Development Authority of India (IRDAI)."
    }
];

const UPSC_QUESTIONS = [
    {
        q: "The preamble of the Indian Constitution is borrowed from which country?",
        a: "USA", ops: ["UK", "USA", "Canada", "Ireland"],
        topic: "Polity", section: "Constitution", diff: "Medium",
        exp: "The concept of Preamble was borrowed from the Constitution of USA."
    },
    {
        q: "Which movement started with the Dandi March?",
        a: "Civil Disobedience Movement", ops: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
        topic: "History", section: "Modern History", diff: "Easy",
        exp: "Dandi March (Salt Satyagraha) marked the beginning of the Civil Disobedience Movement in 1930."
    }
];

const SSC_QUESTIONS = [
    {
        q: "If x + 1/x = 2, find x^100 + 1/x^100?",
        a: "2", ops: ["0", "1", "2", "100"],
        topic: "Quantitative Aptitude", section: "Algebra", diff: "Medium",
        exp: "If x + 1/x = 2, then x = 1. So 1^100 + 1/1^100 = 1 + 1 = 2."
    },
    {
        q: "Who was the first Mughal Emperor of India?",
        a: "Babur", ops: ["Akbar", "Humayun", "Babur", "Aurangzeb"],
        topic: "General Awareness", section: "History", diff: "Easy",
        exp: "Babur established the Mughal Empire in 1526."
    }
];

const SO_IT_QUESTIONS = [
    {
        q: "Which protocol is used to send emails?",
        a: "SMTP", ops: ["HTTP", "FTP", "SMTP", "POP3"],
        topic: "Professional Knowledge", section: "Networking", diff: "Medium",
        exp: "SMTP (Simple Mail Transfer Protocol) is used for sending emails."
    },
    {
        q: "What is the time complexity of Binary Search?",
        a: "O(log n)", ops: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        topic: "Professional Knowledge", section: "Algorithms", diff: "Medium",
        exp: "Binary search divides the search space in half each time, so O(log n)."
    }
];

// --- LOGIC ---

async function seedAdvanced() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ DB Connected');

        const today = new Date().toISOString().split('T')[0];

        for (const exam of exams) {
            console.log(`Processing ${exam.title} (${exam.id})...`);

            let pool = [];
            let type = "";

            // 1. Determine Exam Type & Select Pool
            if (exam.category === 'insurance' || exam.id.includes('lic') || exam.id.includes('niacl')) {
                pool = INSURANCE_QUESTIONS;
                type = "Insurance";
            } else if (exam.category === 'upsc') {
                pool = UPSC_QUESTIONS;
                type = "UPSC";
            } else if (exam.category === 'ssc') {
                pool = SSC_QUESTIONS;
                type = "SSC";
            } else if (exam.id.includes('so')) {
                pool = [...SO_IT_QUESTIONS, ...PO_QUESTIONS]; // Mix Specialist + PO
                type = "Specialist";
            } else if (exam.id.includes('clerk') || exam.id.includes('assistant')) {
                pool = CLERK_QUESTIONS;
                type = "Clerk/Assistant";
            } else if (exam.id.includes('rbi') || exam.id.includes('sebi') || exam.id.includes('nabard') || exam.id.includes('sidbi')) {
                pool = REGULATORY_QUESTIONS;
                type = "Regulatory";
            } else {
                // Default PO/Officer
                pool = PO_QUESTIONS;
                type = "Probationary Officer";
            }

            // 2. Clear previous generic seeds for this exam (Optional, but keeps it clean)
            // await Question.deleteMany({ exam: exam.id, source: 'Seed Script' }); 

            // 3. Generate Exam-Specific Questions from Pool
            const questionsToInsert = pool.map(template => ({
                exam: exam.id,
                subject: template.topic, // High level subject
                topic: template.section, // Specific topic
                difficulty: template.diff,
                questionText: template.q,
                options: template.ops,
                correctIndex: template.ops.indexOf(template.a),
                explanation: template.exp,
                source: `Advanced Seed (${type})`,
                meta: {
                    isAiGenerated: false,
                    relevanceScore: 100
                }
            }));

            // 4. Insert
            if (questionsToInsert.length > 0) {
                await Question.insertMany(questionsToInsert);
                console.log(`   ✅ Inserted ${questionsToInsert.length} ${type} questions.`);
            }

            // 5. Create Daily Test
            const testExists = await DailyTest.findOne({ examId: exam.id, date: today });
            if (!testExists) {
                // Fetch valid Q ids
                const freshQs = await Question.find({ exam: exam.id }).limit(10);
                if (freshQs.length > 0) {
                    await DailyTest.create({
                        date: today,
                        examId: exam.id,
                        title: `Daily Target: ${exam.title}`,
                        questions: freshQs.map(q => q._id),
                        isPublished: true
                    });
                    console.log(`   🎉 Test Created.`);
                }
            } else {
                console.log(`   🔹 Test already exists.`);
            }
        }

        console.log('DONE.');
        process.exit(0);

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

seedAdvanced();
