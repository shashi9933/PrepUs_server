/**
 * COMPREHENSIVE SEEDING SCRIPT
 * Seeds the database with:
 * - Exams (SBI PO, RRB, RBI, IBPS, etc.)
 * - Questions organized by exam
 * - Daily tests for today
 * 
 * Run: node scripts/seed-comprehensive.js
 */

const mongoose = require('mongoose');
require('dotenv').config();

const Question = require('../models/Question');
const DailyTest = require('../models/DailyTest');
const Exam = require('../models/Exam');
const exams = require('../data/exams');

// Comprehensive mock question bank by exam
const EXAM_QUESTION_BANK = {
    'sbi-po': {
        category: 'banking',
        questions: [
            { q: "SBI stands for?", a: "State Bank of India", ops: ["State Bank of India", "Super Bank Institute", "Small Business Initiative", "Standard Banking Index"] },
            { q: "Who is the current CEO of SBI?", a: "Dinesh Khara", ops: ["Dinesh Khara", "Rajnish Kumar", "Arunachal Sharma", "Rajesh Kumar"] },
            { q: "When was SBI founded?", a: "1955", ops: ["1950", "1955", "1960", "1965"] },
            { q: "SBI headquarters is in?", a: "Mumbai", ops: ["Delhi", "Mumbai", "Bangalore", "Kolkata"] },
            { q: "What is CASA in banking?", a: "Current and Saving Accounts", ops: ["Cash and Settlement Accounts", "Current and Saving Accounts", "Corporate and Service Accounts", "Customer Account Security"] },
            { q: "NEFT stands for?", a: "National Electronic Funds Transfer", ops: ["National Electronic Funds Transfer", "New Electronic Financial Transfer", "National E-Transaction Framework", "Network Electronic Funds Transfer"] },
            { q: "What is the base rate set by?", a: "Reserve Bank of India", ops: ["State Bank", "Reserve Bank of India", "Finance Ministry", "Government"] },
            { q: "What does SLMIS stand for?", a: "Service Level Management Information System", ops: ["Service Level Management Information System", "Secured Loan Management Information System", "System Login Management Information Service", "Security Level Monitor Information System"] },
            { q: "Maximum limit for NEFT transaction is?", a: "No limit", ops: ["1 lakh", "5 lakh", "10 lakh", "No limit"] },
            { q: "What is repo rate?", a: "Rate at which RBI lends to banks", ops: ["Rate at which banks lend to RBI", "Rate at which RBI lends to banks", "Rate between two banks", "Deposit rate"] },
            { q: "What is reverse repo?", a: "Rate at which banks lend to RBI", ops: ["Rate at which RBI lends to banks", "Rate at which banks lend to RBI", "Deposit rate", "Borrowing rate"] },
            { q: "What is CRR?", a: "Cash Reserve Ratio", ops: ["Credit Rating Ratio", "Cash Reserve Ratio", "Core Reserve Ratio", "Customer Reserve Ratio"] },
            { q: "What is SLR?", a: "Statutory Liquidity Ratio", ops: ["Super Liquidity Ratio", "Statutory Liquidity Ratio", "Standard Liquidity Requirement", "Secured Loan Ratio"] },
            { q: "Prime Minister announces budget in?", a: "February", ops: ["January", "February", "March", "April"] },
            { q: "SEBI regulates?", a: "Capital Markets", ops: ["Banking", "Capital Markets", "Insurance", "Foreign Exchange"] },
        ]
    },
    'rrb-po': {
        category: 'banking',
        questions: [
            { q: "RRB stands for?", a: "Regional Rural Bank", ops: ["Regional Rural Bank", "Reserve Rural Bank", "Revenue Rural Board", "Retail Rural Business"] },
            { q: "First RRB established in?", a: "1975", ops: ["1970", "1975", "1980", "1985"] },
            { q: "How many RRBs are there in India?", a: "31", ops: ["25", "31", "45", "56"] },
            { q: "RRB falls under which?", a: "Multi-state Co-operative Banks Act", ops: ["Banking Regulation Act", "Multi-state Co-operative Banks Act", "Commercial Banks Act", "Central Bank Act"] },
            { q: "What is the minimum capital of RRB?", a: "50 lakhs", ops: ["25 lakhs", "50 lakhs", "100 lakhs", "200 lakhs"] },
            { q: "RRBs give priority to?", a: "Agricultural loans", ops: ["Industrial loans", "Agricultural loans", "Personal loans", "Educational loans"] },
            { q: "Majority shareholder in RRB is?", a: "Government", ops: ["RBI", "Government", "Sponsor Bank", "Private Investors"] },
            { q: "Who supervises RRBs?", a: "RBI", ops: ["Government", "Sponsor Bank", "RBI", "Ministry of Finance"] },
            { q: "Maximum agricultural lending is?", a: "40%", ops: ["30%", "40%", "50%", "60%"] },
            { q: "RRB's primary focus is?", a: "Rural Development", ops: ["Urban Banking", "Rural Development", "Corporate Banking", "Investment Banking"] },
            { q: "Can RRB open branches outside their area?", a: "Yes, up to 25%", ops: ["No", "Yes, up to 25%", "Yes, up to 50%", "Yes, unrestricted"] },
            { q: "RRB employees are called?", a: "Officers", ops: ["Managers", "Officers", "Supervisors", "Executives"] },
            { q: "PSU banks include?", a: "SBI and RRBs", ops: ["Only SBI", "SBI and RRBs", "Only RRBs", "Private banks"] },
            { q: "Most RRBs are in state?", a: "Uttar Pradesh", ops: ["Bihar", "Uttar Pradesh", "Karnataka", "Maharashtra"] },
            { q: "RRB Act was passed in?", a: "1976", ops: ["1970", "1976", "1980", "1985"] },
        ]
    },
    'rbi-grade-b': {
        category: 'regulatory',
        questions: [
            { q: "RBI stands for?", a: "Reserve Bank of India", ops: ["Reserve Bank of India", "Revenue Board of India", "Regulatory Bureau of India", "Retail Banking Initiative"] },
            { q: "RBI established in?", a: "1935", ops: ["1930", "1935", "1940", "1947"] },
            { q: "RBI Governor term is?", a: "3 years", ops: ["2 years", "3 years", "4 years", "5 years"] },
            { q: "RBI headquarters is in?", a: "Mumbai", ops: ["Delhi", "Mumbai", "Bangalore", "Chennai"] },
            { q: "RBI nationalised in?", a: "1949", ops: ["1947", "1948", "1949", "1950"] },
            { q: "RBI comes under?", a: "Ministry of Finance", ops: ["Prime Minister Office", "Ministry of Finance", "Department of Banking", "Reserve Bank Act"] },
            { q: "First Governor of RBI?", a: "C.D. Deshmukh", ops: ["Osborne Smith", "C.D. Deshmukh", "P.C. Bhattacharyya", "Bimal Jalan"] },
            { q: "RBI has how many departments?", a: "18", ops: ["12", "15", "18", "20"] },
            { q: "RBI note printing is done at?", a: "BRBNMPL", ops: ["NMLP", "BRBNMPL", "BNPL", "NMPL"] },
            { q: "RBI's main objectives include?", a: "Monetary policy and regulation", ops: ["Infrastructure development", "Monetary policy and regulation", "Education", "Agriculture"] },
            { q: "Monetary Policy Committee has members?", a: "6", ops: ["4", "5", "6", "7"] },
            { q: "RBI publishes monetary policy?", a: "6 times a year", ops: ["4 times", "6 times a year", "8 times", "Quarterly"] },
            { q: "RBI Mortgage Act is?", a: "RBI Act 1934", ops: ["Banking Regulation Act", "RBI Act 1934", "Negotiable Instruments Act", "Indian Contract Act"] },
            { q: "RBI manages?", a: "Foreign Exchange Reserves", ops: ["Stock Market", "Foreign Exchange Reserves", "Gold Reserves", "All treasuries"] },
            { q: "RBI provides?", a: "Banker's credit facility", ops: ["Personal loans", "Banker's credit facility", "Consumer credit", "Retail banking"] },
        ]
    },
    'ibps-po': {
        category: 'banking',
        questions: [
            { q: "IBPS stands for?", a: "Institute of Banking Personnel Selection", ops: ["Institute of Banking Personnel Selection", "Institute of Banking Practice Studies", "Institute of Banking Professional Services", "Institute of Business Personal Skills"] },
            { q: "IBPS conducts CWE for?", a: "PSU banks and RRBs", ops: ["Only SBI", "Only RBI", "PSU banks and RRBs", "Private banks"] },
            { q: "CWE stands for?", a: "Common Written Exam", ops: ["Computer Written Exam", "Common Written Exam", "Central Written Exam", "Centralized Written Examination"] },
            { q: "IBPS PO exam consists of?", a: "3 stages", ops: ["1 stage", "2 stages", "3 stages", "4 stages"] },
            { q: "What is cutoff for IBPS PO?", a: "Varies yearly", ops: ["Fixed", "Varies yearly", "No cutoff", "Decided by banks"] },
            { q: "Merit list in IBPS is?", a: "Based on score and category", ops: ["Only based on score", "Based on score and category", "Only based on category", "Random selection"] },
            { q: "IBPS exam language?", a: "English and Regional", ops: ["English only", "English and Regional", "Regional only", "Hindi only"] },
            { q: "Documents verification happens?", a: "After document submission", ops: ["Before exam", "After exam", "After document submission", "Before interview"] },
            { q: "IBPS follows?", a: "Normalized scoring", ops: ["Raw marking", "Normalized scoring", "Percentile system", "Raw percentile"] },
            { q: "IBPS result declared?", a: "Within 2-3 months", ops: ["15 days", "1 month", "Within 2-3 months", "6 months"] },
            { q: "Medical exam in IBPS?", a: "Optional for few positions", ops: ["Mandatory", "Optional for few positions", "No medical test", "Only for few banks"] },
            { q: "Verification happens at?", a: "Jurisdiction bank", ops: ["IBPS office", "RBI office", "Jurisdiction bank", "Head office"] },
            { q: "IBPS conducts exam how many times?", a: "Once a year", ops: ["Twice a year", "Once a year", "Quarterly", "Monthly"] },
            { q: "Training period after selection?", a: "3-6 months", ops: ["1 month", "3-6 months", "1 year", "No training"] },
            { q: "Selection ratio for IBPS is?", a: "Very competitive", ops: ["Easy", "Moderate", "Very competitive", "Very easy"] },
        ]
    },
    'upsc-ias': {
        category: 'regulatory',
        questions: [
            { q: "UPSC stands for?", a: "Union Public Service Commission", ops: ["United Public Service Commission", "Union Public Service Commission", "Universal Public Service Commission", "Union Professional Service Commission"] },
            { q: "IAS exam conducted by?", a: "UPSC", ops: ["SSC", "UPSC", "IBPS", "RRB"] },
            { q: "IAS exam stages?", a: "Prelims, Mains, Interview", ops: ["Only written", "Prelims, Mains", "Prelims, Mains, Interview", "Interview only"] },
            { q: "IAS exam held times per year?", a: "Once", ops: ["Once", "Twice", "Quarterly", "Multiple times"] },
            { q: "IAS Prelims duration?", a: "2 hours", ops: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"] },
            { q: "IAS Mains duration?", a: "3 years", ops: ["2 years", "3 years", "4 years", "5 years"] },
            { q: "IAS Mains papers?", a: "9", ops: ["7", "8", "9", "10"] },
            { q: "IAS interview duration?", a: "20-25 minutes", ops: ["10-15 minutes", "20-25 minutes", "30-40 minutes", "45-60 minutes"] },
            { q: "Negative marking in IAS Prelims?", a: "0.33 for every wrong", ops: ["0.25 for every wrong", "0.33 for every wrong", "0.5 for every wrong", "No negative marking"] },
            { q: "Age limit for IAS?", a: "21-32 years", ops: ["18-30 years", "21-32 years", "25-40 years", "No age limit"] },
            { q: "Attempts allowed in IAS?", a: "4 times", ops: ["2 times", "3 times", "4 times", "6 times"] },
            { q: "IAS Prelims scores valid for?", a: "2 years", ops: ["1 year", "2 years", "3 years", "4 years"] },
            { q: "Optional subjects in IAS?", a: "20+", ops: ["10", "15", "20+", "30"] },
            { q: "IAS selection ratio is?", a: "Very low", ops: ["Moderate", "Competitive", "Very low", "Very high"] },
            { q: "UPSC provides?", a: "Recruitment for central services", ops: ["State services", "Recruitment for central services", "Private sector jobs", "Banking only"] },
        ]
    },
    'ssc-cgl': {
        category: 'regulatory',
        questions: [
            { q: "SSC stands for?", a: "Staff Selection Commission", ops: ["State Selection Commission", "Staff Selection Commission", "Service Selection Committee", "Senior Selection Commission"] },
            { q: "CGL stands for?", a: "Combined Graduate Level", ops: ["Combined General Level", "Combined Graduate Level", "Centralized General Level", "Comprehensive General Level"] },
            { q: "SSC CGL exam tiers?", a: "4", ops: ["1", "2", "3", "4"] },
            { q: "SSC CGL Tier 1 duration?", a: "60 minutes", ops: ["45 minutes", "60 minutes", "90 minutes", "120 minutes"] },
            { q: "Negative marking in SSC CGL?", a: "0.5 marks", ops: ["0.25 marks", "0.5 marks", "1 mark", "No negative marking"] },
            { q: "SSC CGL vacancy status?", a: "Updated yearly", ops: ["Fixed", "Updated yearly", "Varies", "Not announced"] },
            { q: "Physical efficiency test in?", a: "Tier 3", ops: ["Tier 1", "Tier 2", "Tier 3", "Tier 4"] },
            { q: "Typing test in SSC CGL?", a: "Tier 4", ops: ["Tier 2", "Tier 3", "Tier 4", "Not conducted"] },
            { q: "SSC CGL exam language?", a: "English and Hindi", ops: ["English only", "English and Hindi", "Hindi only", "Regional languages"] },
            { q: "Result declared by SSC?", a: "After merit list", ops: ["Immediately", "After merit list", "Within 1 week", "Never"] },
            { q: "Education requirement for SSC CGL?", a: "Graduation", ops: ["12th", "Diploma", "Graduation", "Post-graduation"] },
            { q: "Age limit for SSC CGL?", a: "20-30 years", ops: ["18-28 years", "20-30 years", "21-32 years", "25-35 years"] },
            { q: "Relaxation in age for SC/ST?", a: "5 years", ops: ["3 years", "5 years", "7 years", "10 years"] },
            { q: "Reserved seats percentage?", a: "Varies by department", ops: ["Fixed", "Varies by department", "No reservation", "100%"] },
            { q: "Document verification needed?", a: "Yes", ops: ["No", "Maybe", "Yes", "Depends on bank"] },
        ]
    }
};

/**
 * Seed the database with comprehensive exam data
 */
async function seedComprehensive() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB\n');

        const today = new Date().toISOString().split('T')[0];
        let totalQuestionsAdded = 0;
        let totalTestsCreated = 0;

        for (const [examId, data] of Object.entries(EXAM_QUESTION_BANK)) {
            console.log(`\n📚 Processing: ${examId.toUpperCase()}`);
            console.log('=' .repeat(50));

            // 1. Check existing questions for this exam
            const existingCount = await Question.countDocuments({ exam: examId });
            console.log(`   Existing questions: ${existingCount}`);

            if (existingCount < data.questions.length) {
                console.log(`   ⏳ Seeding questions...`);

                // Remove old questions (optional - for fresh seed)
                // await Question.deleteMany({ exam: examId });

                const questionDocs = data.questions.map((q, idx) => ({
                    exam: examId,
                    subject: 'General Awareness',
                    topic: ['Banking Awareness', 'Current Affairs', 'Economy', 'GK'][idx % 4],
                    difficulty: ['Easy', 'Medium', 'Hard'][idx % 3],
                    questionText: q.q,
                    options: q.ops,
                    correctIndex: q.ops.indexOf(q.a),
                    explanation: `${q.a} is correct. This is a fundamental concept related to ${examId}.`,
                    source: 'Seed Script - Comprehensive'
                }));

                const inserted = await Question.insertMany(questionDocs, { ordered: false });
                console.log(`   ✅ Added ${inserted.length} questions`);
                totalQuestionsAdded += inserted.length;
            } else {
                console.log(`   ✅ Sufficient questions already exist`);
            }

            // 2. Create or update daily test (upsert to avoid duplicates)
            console.log(`   ⏳ Ensuring daily test exists...`);

            // Check if test already exists first
            const testExists = await DailyTest.findOne({
                examId,
                date: today,
                type: 'daily'
            });

            if (testExists) {
                console.log(`   ✅ Daily test already exists`);
            } else {
                const randomQuestions = await Question.aggregate([
                    { $match: { exam: examId } },
                    { $sample: { size: 10 } }
                ]);

                if (randomQuestions.length > 0) {
                    try {
                        const newTest = new DailyTest({
                            examId,
                            date: today,
                            type: 'daily',
                            topic: 'General',
                            title: `Daily Drill - ${today}`,
                            questions: randomQuestions.map(q => q._id),
                            isPublished: true
                        });

                        await newTest.save();
                        console.log(`   ✅ Daily test created: ${newTest.title}`);
                        totalTestsCreated++;
                    } catch (err) {
                        // Ignore duplicate key errors (race condition)
                        if (err.code === 11000) {
                            console.log(`   ✅ Daily test exists (concurrent creation)`);
                        } else {
                            throw err;
                        }
                    }
                }
            }
        }

        console.log('\n' + '='.repeat(50));
        console.log(`\n✨ SEEDING COMPLETE!`);
        console.log(`   📊 Total Questions Added: ${totalQuestionsAdded}`);
        console.log(`   📝 Total Daily Tests Created: ${totalTestsCreated}`);
        console.log(`   📅 Tests Created for Date: ${today}\n`);

        process.exit(0);

    } catch (err) {
        console.error('❌ Seeding Failed:', err.message);
        console.error(err);
        process.exit(1);
    }
}

// Run seeding
seedComprehensive();
