const exams = [
    // --- BANKING & FINANCIAL SECTOR ---
    {
        id: 'sbi-po',
        camelId: 'sbiPo',
        title: 'SBI PO',
        subtitle: 'State Bank of India – Probationary Officer',
        category: 'banking',
        level: 'National',
        quickInfo: {
            conductingBody: 'State Bank of India (SBI)',
            level: 'National',
            mode: 'Online (Prelims + Mains) + Interview',
            frequency: 'Annually',
            vacancies: '1600–2000+ (Varies yearly)'
        },
        dates: {
            notification: 'Sep–Oct (Tentative)',
            applicationStart: 'Sep–Oct (Tentative)',
            admitCard: 'Nov (Prelims) / Jan (Mains)',
            examDate: 'Dec (Prelims)',
            result: 'Mar–Apr (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation in any discipline from a recognized University',
            age: { min: 21, max: 30 },
            ageRelaxation: { sc_st: 5, obc: 3, pwd: 15, general: 0 },
            attempts: {
                general: '4',
                obc: '7',
                sc_st: 'Unlimited',
                pwd: '7'
            }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '60 min',
                sections: [
                    { name: 'English Language', questions: 30, marks: 30, duration: '20 min' },
                    { name: 'Quantitative Aptitude', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'Reasoning Ability', questions: 35, marks: 35, duration: '20 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 157,
                totalMarks: 250,
                totalDuration: '3.5 hours',
                sections: [
                    { name: 'Reasoning & Computer Aptitude', questions: 40, marks: 50, duration: '50 min' },
                    { name: 'Data Analysis & Interpretation', questions: 30, marks: 50, duration: '45 min' },
                    { name: 'General/Economy/Banking Awareness', questions: 50, marks: 60, duration: '45 min' },
                    { name: 'English Language', questions: 35, marks: 40, duration: '40 min' },
                    { name: 'Descriptive Test (English)', questions: 2, marks: 50, duration: '30 min' }
                ]
            },
            {
                phase: 'Interview / Group Exercise',
                totalQuestions: '-',
                totalMarks: 50,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 30, duration: '-' },
                    { name: 'Group Exercises', questions: '-', marks: 20, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': [
                'Simplification', 'Quadratic Equations', 'Number Series', 'Data Interpretation',
                'Profit & Loss', 'Time & Work', 'Simple & Compound Interest', 'Time, Speed & Distance'
            ],
            'Reasoning Ability': [
                'Puzzles & Seating Arrangement', 'Syllogism', 'Blood Relations', 'Direction Sense',
                'Coding-Decoding', 'Inequality', 'Input-Output'
            ],
            'English Language': [
                'Reading Comprehension', 'Cloze Test', 'Para Jumbles', 'Error Spotting', 'Fillers', 'Vocabulary'
            ],
            'General/Banking Awareness': [
                'Current Affairs', 'Banking Awareness', 'Financial Awareness', 'Economic News', 'RBI Circulars'
            ],
            'Computer Aptitude': [
                'Computer Fundamentals', 'Internet & Networking', 'MS Office', 'Hardware & Software Basics'
            ]
        },
        salary: {
            basic: '41960',
            gross: '65000 - 70000',
            deductions: '10000 - 12000 (Approx)',
            inHand: '55000 - 58000',
            allowances: ['DA', 'HRA', 'CCA', 'Medical', 'Travel'],
            careerGrowth: 'PO -> Deputy Manager -> Manager -> Chief Manager -> AGM -> DGM -> GM -> CGM -> DMD -> MD -> Chairman'
        },
        mockTests: [
            { id: 'sbi-po-mock-1', title: 'SBI PO Prelims Full Mock 1', type: 'Free', questions: 100, time: 60 },
            { id: 'sbi-po-mock-2', title: 'SBI PO Prelims Full Mock 2', type: 'Premium', questions: 100, time: 60 }
        ],
        faqs: [
            { question: 'Is there any percentage criteria for SBI PO?', answer: 'No, just graduation.' },
            { question: 'Is there an attempt limit for SBI PO?', answer: 'No, there is no attempt limit subject to age eligibility.' },
            { question: 'Is descriptive test compulsory?', answer: 'Yes, qualifying the descriptive test is mandatory.' }
        ]
    },
    {
        id: 'sbi-clerk',
        camelId: 'sbiClerk',
        title: 'SBI Clerk',
        subtitle: 'State Bank of India – Junior Associate',
        category: 'banking',
        level: 'National',
        quickInfo: {
            conductingBody: 'SBI',
            level: 'National',
            mode: 'Online (Prelims + Mains) + Language Test',
            frequency: 'Annually',
            vacancies: '6000–8000+ (Varies yearly)'
        },
        dates: {
            notification: 'Aug–Sep (Tentative)',
            applicationStart: 'Aug (Tentative)',
            admitCard: 'Sep (Prelims) / Nov (Mains)',
            examDate: 'Sep–Oct (Prelims)',
            result: 'Dec–Jan (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation in any discipline',
            age: { min: 20, max: 28 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '60 min',
                sections: [
                    { name: 'English Language', questions: 30, marks: 30, duration: '20 min' },
                    { name: 'Numerical Ability', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'Reasoning Ability', questions: 35, marks: 35, duration: '20 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 190,
                totalMarks: 200,
                totalDuration: '2 hours 40 min',
                sections: [
                    { name: 'General/Financial Awareness', questions: 50, marks: 50, duration: '35 min' },
                    { name: 'General English', questions: 40, marks: 40, duration: '35 min' },
                    { name: 'Quantitative Aptitude', questions: 50, marks: 50, duration: '45 min' },
                    { name: 'Reasoning Ability & Computer Aptitude', questions: 50, marks: 60, duration: '45 min' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': [
                'Simplification & Approximation', 'Data Interpretation', 'Number Series',
                'Quadratic Equations', 'Arithmetic'
            ],
            'Reasoning Ability': [
                'Puzzles & Seating Arrangement', 'Alphanumeric Series', 'Syllogism',
                'Blood Relations', 'Coding-Decoding'
            ],
            'English Language': [
                'Reading Comprehension', 'Cloze Test', 'Fill in the Blanks',
                'Error Spotting', 'Sentence Rearrangement'
            ],
            'General Awareness': ['Current Affairs', 'Banking & Financial Awareness', 'Static GK'],
            'Computer Aptitude': ['Computer Basics', 'Internet & Networking', 'Hardware & Software']
        },
        salary: {
            basic: '26730',
            gross: '45000 – 47000',
            deductions: '6000 – 7000',
            inHand: '37000 – 40000',
            allowances: ['DA', 'HRA', 'Transport', 'Special Allowance'],
            careerGrowth: 'Junior Associate -> Trainee Officer -> PO -> Middle Management -> Senior Management'
        },
        mockTests: [
            { id: 'sbi-clerk-prelims-mock', title: 'SBI Clerk Prelims Full Mock', type: 'Free', questions: 100, time: 60 },
            { id: 'sbi-clerk-mains-mock', title: 'SBI Clerk Mains Full Mock', type: 'Premium', questions: 190, time: 160 }
        ],
        faqs: [
            { question: 'Is there an interview for SBI Clerk?', answer: 'No, selection is based on Mains marks.' },
            { question: 'Is the Local Language Test mandatory?', answer: 'Yes, if not studied in 10th/12th.' }
        ]
    },

    {
        id: 'ibps-clerk',
        camelId: 'ibpsClerk',
        title: 'IBPS Clerk',
        subtitle: 'Institute of Banking Personnel Selection – Clerk',
        category: 'banking',
        level: 'National',
        quickInfo: {
            conductingBody: 'IBPS',
            level: 'National',
            mode: 'Online (Prelims + Mains)',
            frequency: 'Annually',
            vacancies: '4000–10,000+ (Varies State-wise)'
        },
        dates: {
            notification: 'Jun–Jul (Tentative)',
            applicationStart: 'Jul (Tentative)',
            admitCard: 'Aug (Prelims) / Sep-Oct (Mains)',
            examDate: 'Aug–Sep (Prelims)',
            result: 'Apr 1 (Fixed)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation in any discipline',
            age: { min: 20, max: 28 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '60 min',
                sections: [
                    { name: 'English Language', questions: 30, marks: 30, duration: '20 min' },
                    { name: 'Numerical Ability', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'Reasoning Ability', questions: 35, marks: 35, duration: '20 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 190,
                totalMarks: 200,
                totalDuration: '160 min',
                sections: [
                    { name: 'General/ Financial Awareness', questions: 50, marks: 50, duration: '35 min' },
                    { name: 'General English', questions: 40, marks: 40, duration: '35 min' },
                    { name: 'Reasoning Ability & Computer Aptitude', questions: 50, marks: 60, duration: '45 min' },
                    { name: 'Quantitative Aptitude', questions: 50, marks: 50, duration: '45 min' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Simplification', 'Data Interpretation', 'Arithmetic', 'Number Series'],
            'Reasoning Ability': ['Puzzles', 'Seating Arrangement', 'Syllogism', 'Blood Relations', 'Inequality'],
            'English Language': ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Para Jumbles'],
            'General Awareness': ['Banking Awareness', 'Current Affairs', 'Static GK'],
            'Computer Aptitude': ['Hardware & Software', 'OS', 'MS Office', 'Internet']
        },
        salary: {
            basic: '24050',
            gross: '40000 – 42000',
            deductions: '3000 – 4000',
            inHand: '37000 – 39000',
            allowances: ['DA', 'HRA', 'Transport', 'Medical', 'Special Allowance'],
            careerGrowth: 'Clerk -> Officer (Scale I) -> Manager (Scale II) -> Senior Manager'
        },
        mockTests: [
            { id: 'ibps-clerk-prelims-mock', title: 'IBPS Clerk Prelims Full Mock', type: 'Free', questions: 100, time: 60 },
            { id: 'ibps-clerk-mains-mock', title: 'IBPS Clerk Mains Full Mock', type: 'Premium', questions: 190, time: 160 }
        ],
        faqs: [
            { question: 'Do I need computer knowledge?', answer: 'Yes, operating and working knowledge is mandatory.' },
            { question: 'Is the exam bilingual?', answer: 'Yes, except for English section.' }
        ]
    },
    {
        id: 'ibps-rrb-po',
        camelId: 'ibpsRrbPo',
        title: 'IBPS RRB PO',
        subtitle: 'Regional Rural Bank – Officer Scale-I',
        category: 'banking',
        level: 'National',
        quickInfo: {
            conductingBody: 'IBPS',
            level: 'National',
            mode: 'Online (Prelims + Mains) + Interview',
            frequency: 'Annually',
            vacancies: '3000–4000+ (Varies yearly)'
        },
        dates: {
            notification: 'Jun–Jul (Standard)',
            applicationStart: 'Jun–Jul (Tentative)',
            admitCard: 'Jul (Prelims) / Sep (Mains)',
            examDate: 'Aug (Prelims)',
            result: 'Jan 1 (Fixed)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation in any discipline',
            age: { min: 18, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 80,
                totalMarks: 80,
                totalDuration: '45 min',
                sections: [
                    { name: 'Reasoning', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'Quantitative Aptitude', questions: 40, marks: 40, duration: 'Combined' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 200,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'Reasoning', questions: 40, marks: 50, duration: 'Combined' },
                    { name: 'Quantitative Aptitude', questions: 40, marks: 50, duration: 'Combined' },
                    { name: 'General Awareness', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'English/Hindi', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'Computer Knowledge', questions: 40, marks: 20, duration: 'Combined' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Quadratic Equations', 'Number Series', 'Arithmetic'],
            'Reasoning Ability': ['Puzzles', 'Syllogism', 'Inequality', 'Coding-Decoding', 'Blood Relations'],
            'Computer Knowledge': ['MS Office', 'Hardware & Software', 'Internet', 'Shortcuts'],
            'General Awareness': ['Current Affairs', 'Banking Awareness', 'Static GK'],
            'Language': ['Reading Comprehension', 'Cloze Test', 'Error Spotting', 'Fillers']
        },
        salary: {
            basic: '36000',
            gross: '60000 – 65000',
            deductions: '6000 – 8000',
            inHand: '52000 – 55000',
            allowances: ['DA', 'HRA', 'Special Allowance', 'Medical'],
            careerGrowth: 'Officer Scale I -> Scale II -> Scale III -> Chief Manager'
        },
        mockTests: [
            { id: 'rrb-po-prelims-mock', title: 'IBPS RRB PO Prelims Full Mock', type: 'Free', questions: 80, time: 45 },
            { id: 'rrb-po-mains-mock', title: 'IBPS RRB PO Mains Full Mock', type: 'Premium', questions: 200, time: 120 }
        ],
        faqs: [
            { question: 'Is there sectional timing in RRB PO?', answer: 'No, there is composite time.' },
            { question: 'Do I need to know the local language?', answer: 'Yes, proficiency is desirable/mandatory.' }
        ]
    },
    {
        id: 'ibps-rrb-clerk',
        camelId: 'ibpsRrbClerk',
        title: 'IBPS RRB Clerk',
        subtitle: 'Regional Rural Bank – Office Assistant',
        category: 'banking',
        level: 'National',
        quickInfo: {
            conductingBody: 'IBPS',
            level: 'National',
            mode: 'Online (Prelims + Mains)',
            frequency: 'Annually',
            vacancies: '5000–8000+ (Varies yearly)'
        },
        dates: {
            notification: 'Jun–Jul (Standard)',
            applicationStart: 'Jun–Jul (Tentative)',
            admitCard: 'Jul (Prelims) / Sep (Mains)',
            examDate: 'Aug (Prelims)',
            result: 'Jan 1 (Fixed)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation in any discipline',
            age: { min: 18, max: 28 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 80,
                totalMarks: 80,
                totalDuration: '45 min',
                sections: [
                    { name: 'Reasoning', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'Numerical Ability', questions: 40, marks: 40, duration: 'Combined' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 200,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'Reasoning', questions: 40, marks: 50, duration: 'Combined' },
                    { name: 'Numerical Ability', questions: 40, marks: 50, duration: 'Combined' },
                    { name: 'General Awareness', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'English/Hindi', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'Computer Knowledge', questions: 40, marks: 20, duration: 'Combined' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Simplification', 'Number Series', 'Data Interpretation', 'Arithmetic'],
            'Reasoning Ability': ['Puzzles', 'Alphanumeric Series', 'Syllogism', 'Blood Relations'],
            'Computer Knowledge': ['Computer Basics', 'MS Office', 'Internet'],
            'General Awareness': ['Current Affairs', 'Static GK', 'Banking Awareness'],
            'Language': ['Reading Comprehension', 'Grammar', 'Vocabulary']
        },
        salary: {
            basic: '19900',
            gross: '35000 – 38000',
            deductions: '2500 – 3500',
            inHand: '32000 – 35000',
            allowances: ['DA', 'HRA', 'Transport', 'Special Allowance'],
            careerGrowth: 'Office Assistant -> Officer Scale I -> Scale II -> Scale III'
        },
        mockTests: [
            { id: 'rrb-clerk-prelims-mock', title: 'IBPS RRB Clerk Prelims Full Mock', type: 'Free', questions: 80, time: 45 },
            { id: 'rrb-clerk-mains-mock', title: 'IBPS RRB Clerk Mains Full Mock', type: 'Premium', questions: 200, time: 120 }
        ],
        faqs: [
            { question: 'Is there an interview for RRB Clerk?', answer: 'No interview. Final selection depends on Mains marks.' },
            { question: 'Does the exam have sectional cutoffs?', answer: 'Yes, sectional and overall cutoffs apply.' }
        ]
    },
    {
        id: 'ibps-so',
        camelId: 'ibpsSo',
        title: 'IBPS SO',
        subtitle: 'Institute of Banking Personnel Selection – Specialist Officer',
        category: 'banking',
        level: 'National',
        quickInfo: {
            conductingBody: 'IBPS',
            level: 'National',
            mode: 'Online (Prelims + Mains) + Interview',
            frequency: 'Annually',
            vacancies: '500–1500 (Stream-wise)'
        },
        dates: {
            notification: 'Jul (Tentative)',
            applicationStart: 'Jul–Aug (Tentative)',
            admitCard: 'Oct (Prelims) / Dec (Mains)',
            examDate: 'Nov (Tentative)',
            result: 'Apr 1 (Fixed)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Specific Professional Degree (B.Tech CS, BSc Agri, LLB, etc.)',
            age: { min: 20, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 150,
                totalMarks: 125,
                totalDuration: '120 min',
                sections: [
                    { name: 'English Language', questions: 50, marks: 25, duration: '40 min' },
                    { name: 'Reasoning', questions: 50, marks: 50, duration: '40 min' },
                    { name: 'Quantitative Aptitude / GA', questions: 50, marks: 50, duration: '40 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 60,
                totalMarks: 60,
                totalDuration: '45 min',
                sections: [
                    { name: 'Professional Knowledge', questions: 60, marks: 60, duration: '45 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Professional Knowledge': [
                'IT Officer: DBMS, Data Structure, Networking, OS',
                'Agri Officer: Agriculture basics, Soil Science',
                'Marketing Officer: Marketing Mgmt, Market Research',
                'Law Officer: Banking Regulations, RBI Act'
            ],
            'Quantitative Aptitude': ['Data Interpretation', 'Quadratic Equations', 'Number Series'],
            'Reasoning Ability': ['Puzzles', 'Seating Arrangement', 'Syllogism'],
            'English Language': ['Reading Comprehension', 'Cloze Test', 'Error Detection']
        },
        salary: {
            basic: '48480',
            gross: '75000 – 80000',
            deductions: '8000 – 10000',
            inHand: '65000 – 68000',
            allowances: ['DA', 'HRA', 'CCA', 'Special Allowance', 'Medical'],
            careerGrowth: 'Officer (Scale I) -> Manager (Scale II) -> Senior Manager -> Chief Manager'
        },
        mockTests: [
            { id: 'ibps-so-prelims-mock', title: 'IBPS SO Prelims Full Mock', type: 'Free', questions: 150, time: 120 }
        ],
        faqs: [
            { question: 'Can I apply for multiple posts?', answer: 'No, only one post.' },
            { question: 'Is work experience required?', answer: 'No, not for Scale I.' }
        ]
    },
    {
        id: 'ibps-po',
        camelId: 'ibpsPo',
        title: 'IBPS PO',
        subtitle: 'Institute of Banking Personnel Selection – Probationary Officer',
        category: 'banking',
        level: 'National',
        quickInfo: {
            conductingBody: 'Institute of Banking Personnel Selection (IBPS)',
            level: 'National',
            mode: 'Online (Prelims + Mains) + Interview',
            frequency: 'Annually',
            vacancies: '4000–6000+ (Varies yearly)'
        },
        dates: {
            notification: 'Jul–Aug (Tentative)',
            applicationStart: 'Aug (Tentative)',
            admitCard: 'Sep (Prelims) / Oct-Nov (Mains)',
            examDate: 'Sep–Oct (Prelims)',
            result: 'Apr 1 (Fixed)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation in any discipline from a recognized university',
            age: { min: 20, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '60 min',
                sections: [
                    { name: 'English Language', questions: 30, marks: 30, duration: '20 min' },
                    { name: 'Quantitative Aptitude', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'Reasoning Ability', questions: 35, marks: 35, duration: '20 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 157,
                totalMarks: 225,
                totalDuration: '3.5 hours',
                sections: [
                    { name: 'Reasoning & Computer Aptitude', questions: 45, marks: 60, duration: '60 min' },
                    { name: 'General / Economy / Banking Awareness', questions: 40, marks: 40, duration: '35 min' },
                    { name: 'English Language', questions: 35, marks: 40, duration: '40 min' },
                    { name: 'Data Analysis & Interpretation', questions: 35, marks: 60, duration: '45 min' },
                    { name: 'Descriptive Test (English)', questions: 2, marks: 25, duration: '30 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': [
                'Simplification/Approximation', 'Quadratic Equations', 'Number Series (Missing/Wrong)',
                'Data Interpretation', 'Arithmetic'
            ],
            'Reasoning Ability': [
                'Puzzles & Seating Arrangement', 'Syllogism', 'Inequality', 'Input-Output',
                'Coding-Decoding', 'Logical Reasoning'
            ],
            'Computer Aptitude': [
                'Logic Gates', 'Binary to Decimal conversion', 'Flowchart based logic'
            ],
            'English Language': [
                'Reading Comprehension', 'Cloze Test', 'Error Detection', 'Sentence Rearrangement'
            ],
            'General Awareness': [
                'Current Affairs', 'Banking Awareness', 'Financial Awareness', 'Static GK'
            ]
        },
        salary: {
            basic: '48480',
            gross: '78000 – 85000',
            deductions: '8000 – 10000 (Approx)',
            inHand: '68000 – 75000',
            allowances: ['DA', 'HRA', 'CCA', 'Special Allowance', 'Medical'],
            careerGrowth: 'PO -> Assistant Manager -> Deputy Manager -> Manager -> Senior Manager -> Chief Manager -> AGM -> DGM -> GM'
        },
        mockTests: [
            { id: 'ibps-po-prelims-mock-1', title: 'IBPS PO Prelims Full Mock 1', type: 'Free', questions: 100, time: 60 },
            { id: 'ibps-po-mains-mock-1', title: 'IBPS PO Mains Full Mock', type: 'Premium', questions: 157, time: 210 }
        ],
        faqs: [
            { question: 'Is there a percentage criteria for IBPS PO?', answer: 'No, just a valid graduation degree is required.' },
            { question: 'Is the final result date fixed?', answer: 'Yes, IBPS traditionally declares the final result on April 1st every year.' },
            { question: 'Is Computer Certificate mandatory?', answer: 'Working knowledge of computer systems is necessary.' }
        ]
    },
    {
        id: 'rbi-grade-b',
        camelId: 'rbiGradeB',
        title: 'RBI Grade B',
        subtitle: 'Reserve Bank of India – Grade B Officer (General)',
        category: 'regulatory',
        level: 'National',
        quickInfo: {
            conductingBody: 'Reserve Bank of India (RBI)',
            level: 'National',
            mode: 'Online (Phase 1) + Online/Written (Phase 2) + Interview',
            frequency: 'Annually',
            vacancies: '100–160 (General Stream)'
        },
        dates: {
            notification: 'Jun–Sep (Tentative)',
            applicationStart: 'Varies',
            admitCard: '10 days before exam (Prelims) / 10-15 days (Mains)',
            examDate: 'Aug-Oct (Prelims)',
            result: 'After Interviews'
        },
        eligibility: {
            nationality: 'Citizen of India / Nepal / Bhutan',
            education: 'Graduation (60% / 50% SC/ST/PwBD) or PG (55%)',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 6, obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (Phase 1)',
                totalQuestions: 200,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'General Awareness', questions: 80, marks: 80, duration: '25 min' },
                    { name: 'Reasoning', questions: 60, marks: 60, duration: '45 min' },
                    { name: 'English Language', questions: 30, marks: 30, duration: '25 min' },
                    { name: 'Quantitative Aptitude', questions: 30, marks: 30, duration: '25 min' }
                ]
            },
            {
                phase: 'Mains (Phase 2)',
                totalQuestions: '-',
                totalMarks: 300,
                totalDuration: '330 min',
                sections: [
                    { name: 'Economic & Social Issues (ESI)', questions: '-', marks: 100, duration: '120 min' },
                    { name: 'English (Writing Skills)', questions: 3, marks: 100, duration: '90 min' },
                    { name: 'Finance & Management', questions: '-', marks: 100, duration: '120 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 75,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 75, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': [
                'Data Interpretation', 'Arithmetic', 'Probability', 'Number Series', 'Quadratic Equations'
            ],
            'Reasoning Ability': [
                'Puzzles (High Level)', 'Logical Reasoning', 'Data Sufficiency'
            ],
            'English Language': [
                'RC', 'Error Spotting', 'Essay', 'Precis', 'Comprehension'
            ],
            'General Awareness': ['Banking & Financial Awareness', 'Government Schemes', 'Reports & Indices', 'Current Affairs']
        },
        salary: {
            basic: '55200',
            gross: '116000 – 125000',
            deductions: '20000 – 25000',
            inHand: '90000 – 100000',
            allowances: ['Dearness Allowance', 'Local Allowance', 'Family Allowance', 'Grade Allowance'],
            careerGrowth: 'Grade B (Manager) -> Grade C -> Grade D -> Grade E -> Grade F -> Executive Director -> Deputy Governor'
        },
        mockTests: [
            { id: 'rbi-grade-b-phase1-mock', title: 'RBI Grade B Phase 1 Full Mock', type: 'Free', questions: 200, time: 120 },
            { id: 'rbi-grade-b-phase2-esi', title: 'RBI Phase 2 ESI Mock', type: 'Premium', questions: 30, time: 120 }
        ],
        faqs: [
            { question: 'Is 60% marks mandatory in graduation?', answer: 'Yes, for General category candidates, 60% in graduation is strict.' },
            { question: 'Are there attempt limits?', answer: 'Yes, General category candidates are limited to 6 attempts in the Phase 1 exam.' }
        ]
    },
    {
        id: 'rbi-assistant',
        camelId: 'rbiAssistant',
        title: 'RBI Assistant',
        subtitle: 'Reserve Bank of India – Assistant',
        category: 'regulatory',
        level: 'National',
        quickInfo: {
            conductingBody: 'RBI',
            level: 'National',
            mode: 'Online (Prelims + Mains) + LPT',
            frequency: 'Irregular',
            vacancies: '450–900 (Varies)'
        },
        dates: {
            notification: 'Jan–Feb (Tentative)',
            applicationStart: 'Jan–Feb (Tentative)',
            admitCard: 'Feb (Prelims) / Mar (Mains)',
            examDate: 'Feb–Mar (Prelims)',
            result: 'Jun–Jul (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree (50% marks / Pass for SC/ST)',
            age: { min: 20, max: 28 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '60 min',
                sections: [
                    { name: 'English Language', questions: 30, marks: 30, duration: '20 min' },
                    { name: 'Numerical Ability', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'Reasoning Ability', questions: 35, marks: 35, duration: '20 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 200,
                totalMarks: 200,
                totalDuration: '135 min',
                sections: [
                    { name: 'Reasoning', questions: 40, marks: 40, duration: '30 min' },
                    { name: 'English Language', questions: 40, marks: 40, duration: '30 min' },
                    { name: 'Numerical Ability', questions: 40, marks: 40, duration: '30 min' },
                    { name: 'General Awareness', questions: 40, marks: 40, duration: '25 min' },
                    { name: 'Computer Knowledge', questions: 40, marks: 40, duration: '20 min' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Simplification', 'Data Interpretation', 'Number Series', 'Arithmetic'],
            'Reasoning Ability': ['Puzzles', 'Syllogism', 'Blood Relations', 'Direction Sense'],
            'Computer Knowledge': ['History of Computers', 'MS Office', 'Internet', 'DBMS Basics'],
            'English Language': ['Reading Comprehension', 'Error Detection', 'Fillers', 'Cloze Test'],
            'General Awareness': ['Banking Awareness', 'Current Affairs', 'RBI Circulars']
        },
        salary: {
            basic: '20700',
            gross: '47800 – 50000',
            deductions: '4000 – 5000',
            inHand: '40000 – 44000',
            allowances: ['DA', 'HRA', 'Transport', 'Special Allowance'],
            careerGrowth: 'Assistant -> Scale I (AM) -> Scale II -> Scale III'
        },
        mockTests: [
            { id: 'rbi-assistant-prelims-mock', title: 'RBI Assistant Prelims Full Mock', type: 'Free', questions: 100, time: 60 },
            { id: 'rbi-assistant-mains-mock', title: 'RBI Assistant Mains Full Mock', type: 'Premium', questions: 200, time: 135 }
        ],
        faqs: [
            { question: 'Is the Language Proficiency Test (LPT) difficult?', answer: 'It tests basic skills. It is qualifying but mandatory.' },
            { question: 'Is there any percentage criteria?', answer: 'Yes, 50% marks in Graduation is mandatory (Pass for SC/ST).' }
        ]
    },
    {
        id: 'sebi-grade-a',
        camelId: 'sebiGradeA',
        title: 'SEBI Grade A',
        subtitle: 'Securities and Exchange Board of India – Assistant Manager',
        category: 'regulatory',
        level: 'National',
        quickInfo: {
            conductingBody: 'SEBI',
            level: 'National',
            mode: 'Online (Phase 1 + Phase 2) + Interview',
            frequency: 'Varies',
            vacancies: '100–150 (Stream-wise)'
        },
        dates: {
            notification: 'Varies (Often Mar–Jun)',
            applicationStart: 'Varies',
            admitCard: '10-15 days before exam',
            examDate: '~1 month after notification',
            result: '~1 month after interviews'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Master’s Degree / Law / Engineering / CA/CFA/CS',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (Phase 1)',
                totalQuestions: 180,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'Paper 1 (GA, Eng, Quant, Reas)', questions: 80, marks: 100, duration: '60 min' },
                    { name: 'Paper 2 (Specialized Subject)', questions: 50, marks: 100, duration: '40 min' }
                ]
            },
            {
                phase: 'Mains (Phase 2)',
                totalQuestions: 53,
                totalMarks: 200,
                totalDuration: '100 min',
                sections: [
                    { name: 'Paper 1 (Descriptive English)', questions: 3, marks: 100, duration: '60 min' },
                    { name: 'Paper 2 (Specialized Subject)', questions: 50, marks: 100, duration: '40 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 15,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 15, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Arithmetic', 'Number Series'],
            'Reasoning Ability': ['Puzzles', 'Seating Arrangement', 'Logical Reasoning'],
            'General Awareness': ['Financial Sector', 'Capital Market', 'Current Affairs'],
            'Specialized Subjects': ['Commerce & Accountancy', 'Management', 'Finance', 'Costing', 'Companies Act', 'Economics']
        },
        salary: {
            basic: '62500',
            gross: '155000 – 180000',
            deductions: '25000 – 35000',
            inHand: '115000 – 130000',
            allowances: ['Grade Allowance', 'Special Allowance', 'Family Allowance', 'Local Allowance'],
            careerGrowth: 'Grade A -> Grade B -> Grade C -> Grade D -> Grade E -> Grade F -> ED'
        },
        mockTests: [
            { id: 'sebi-phase1-paper1-mock', title: 'SEBI Grade A Phase 1 Paper 1', type: 'Free', questions: 80, time: 60 },
            { id: 'sebi-phase1-paper2-mock', title: 'SEBI Grade A Phase 1 Paper 2', type: 'Premium', questions: 50, time: 40 }
        ],
        faqs: [
            { question: 'Is there sectional cutoff in SEBI Grade A?', answer: 'Yes, Phase 1 requires 30% in Paper 1, 40% in Paper 2.' },
            { question: 'Can final year students apply?', answer: 'Yes, provided they produce the degree at interview.' }
        ]
    },
    {
        id: 'nabard-grade-a',
        camelId: 'nabardGradeA',
        title: 'NABARD Grade A',
        subtitle: 'National Bank for Agriculture and Rural Development – Assistant Manager',
        category: 'regulatory',
        level: 'National',
        quickInfo: {
            conductingBody: 'NABARD',
            level: 'National',
            mode: 'Online (Phase 1 + Phase 2) + Interview',
            frequency: 'Annually',
            vacancies: '100–170 (RDBS)'
        },
        dates: {
            notification: 'Sep–Nov (Tentative)',
            applicationStart: 'Sep (Tentative)',
            admitCard: '10 days before exam (Phase 1) / After Phase 1 (Phase 2)',
            examDate: 'Oct–Dec (Phase 1) / Nov–Jan (Phase 2)',
            result: 'Apr (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree (60% / 55% for SC/ST/PwBD) or PG/MBA (55%)',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (Phase 1)',
                totalQuestions: 200,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'Reasoning', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'English', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Computer Knowledge', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Quantitative Aptitude', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Decision Making', questions: 10, marks: 10, duration: 'Combined' },
                    { name: 'General Awareness', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'ESI', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'ARD', questions: 40, marks: 40, duration: 'Combined' }
                ]
            },
            {
                phase: 'Mains (Phase 2)',
                totalQuestions: 31,
                totalMarks: 200,
                totalDuration: '210 min (Approx)',
                sections: [
                    { name: 'Paper 1: General English (Descriptive)', questions: 3, marks: 100, duration: '90 min' },
                    { name: 'Paper 2: ESI & ARD (Objective)', questions: 30, marks: 50, duration: '30 min' },
                    { name: 'Paper 2: ESI & ARD (Descriptive)', questions: 6, marks: 50, duration: '90 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 50,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 50, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Quadratic Equations', 'Arithmetic', 'Number Series'],
            'Reasoning Ability': ['Puzzles', 'Syllogism', 'Input-Output', 'Critical Reasoning'],
            'ARD': ['Agriculture', 'Animal Husbandry', 'Fisheries', 'Rural Development'],
            'ESI': ['Indian Economy', 'Social Structure', 'Education & Health'],
            'General Awareness': ['Agriculture News', 'Banking & Economy']
        },
        salary: {
            basic: '44500',
            gross: '100000 – 110000',
            deductions: '15000 – 20000',
            inHand: '80000 – 90000',
            allowances: ['DA', 'HRA', 'Local Allowance', 'Grade Allowance'],
            careerGrowth: 'Assistant Manager -> Manager -> AGM -> DGM -> GM -> CGM'
        },
        mockTests: [
            { id: 'nabard-grade-a-phase1-mock', title: 'NABARD Grade A Phase 1 Full Mock', type: 'Free', questions: 200, time: 120 },
            { id: 'nabard-grade-a-phase2-ard', title: 'NABARD Phase 2 ARD Mock', type: 'Premium', questions: 30, time: 30 }
        ],
        faqs: [
            { question: 'Are there sectional cutoffs in Phase 1?', answer: 'Yes, for all 8 sections.' },
            { question: 'Is it mandatory to have an Agriculture degree?', answer: 'No, for General stream any graduate can apply.' }
        ]
    },
    {
        id: 'nabard-grade-b',
        camelId: 'nabardGradeB',
        title: 'NABARD Grade B',
        subtitle: 'National Bank for Agriculture and Rural Development – Manager',
        category: 'regulatory',
        level: 'National',
        quickInfo: {
            conductingBody: 'NABARD',
            level: 'National',
            mode: 'Online (Phase 1 + Phase 2) + Interview',
            frequency: 'Irregular',
            vacancies: '15–30 (Varies)'
        },
        dates: {
            notification: 'Jul–Aug (Tentative)',
            applicationStart: 'Jul–Aug (Tentative)',
            admitCard: 'Sep (Prelims) / Oct (Mains)',
            examDate: 'Sep–Oct (Prelims) / Nov (Mains)',
            result: 'Feb (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Post Graduate Degree (60% / 55% for SC/ST)',
            age: { min: 25, max: 32 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (Phase 1)',
                totalQuestions: 200,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'Reasoning', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'English', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Computer Knowledge', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Quantitative Aptitude', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Decision Making', questions: 10, marks: 10, duration: 'Combined' },
                    { name: 'General Awareness', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'ESI', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'ARD', questions: 40, marks: 40, duration: 'Combined' }
                ]
            },
            {
                phase: 'Mains (Phase 2)',
                totalQuestions: 60,
                totalMarks: 300,
                totalDuration: '270 min',
                sections: [
                    { name: 'Paper 1: English (Descriptive)', questions: 3, marks: 100, duration: '90 min' },
                    { name: 'Paper 2: ESI & ARD (Objective)', questions: 30, marks: 50, duration: '30 min' },
                    { name: 'Paper 2: ESI & ARD (Descriptive)', questions: 6, marks: 50, duration: '90 min' },
                    { name: 'Paper 3: Dev Econ, Stats, Fin & Mgmt (Obj)', questions: 30, marks: 50, duration: '30 min' },
                    { name: 'Paper 3: Dev Econ, Stats, Fin & Mgmt (Desc)', questions: 6, marks: 50, duration: '90 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 75,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 75, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Arithmetic', 'Number Series'],
            'Reasoning Ability': ['Puzzles', 'Critical Reasoning'],
            'ARD': ['Same as Grade A but higher difficulty'],
            'ESI': ['Same as Grade A but higher difficulty'],
            'Paper 3': ['Development Economics', 'Statistics', 'Finance', 'Management']
        },
        salary: {
            basic: '55200',
            gross: '120000 – 130000',
            deductions: '20000 – 25000',
            inHand: '100000 – 105000',
            allowances: ['DA', 'HRA', 'Grade Allowance'],
            careerGrowth: 'Manager -> AGM -> DGM -> GM -> CGM'
        },
        mockTests: [
            { id: 'nabard-grade-b-phase1-mock', title: 'NABARD Grade B Phase 1 Mock', type: 'Free', questions: 200, time: 120 }
        ],
        faqs: [
            { question: 'Is work experience mandatory for Grade B?', answer: 'Yes, minimum 3 years.' },
            { question: 'Can I apply for both Grade A and Grade B?', answer: 'Yes.' }
        ]
    },
    {
        id: 'sidbi-grade-a',
        camelId: 'sidbiGradeA',
        title: 'SIDBI Grade A',
        subtitle: 'Small Industries Development Bank of India – Assistant Manager',
        category: 'regulatory',
        level: 'National',
        quickInfo: {
            conductingBody: 'SIDBI',
            level: 'National',
            mode: 'Online (Phase 1 + Phase 2) + Interview',
            frequency: 'Varies',
            vacancies: '50–100'
        },
        dates: {
            notification: 'Jul–Aug (Tentative)',
            applicationStart: 'Jul–Aug (Tentative)',
            admitCard: 'Aug (Pre) / Sep (Mains)',
            examDate: 'Sep (Pre) / Oct (Mains)',
            result: 'Jan (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation in specific fields (60%) or CA/CS/CWA/CFA or Ph.D',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 200,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'English', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Reasoning', questions: 25, marks: 25, duration: 'Combined' },
                    { name: 'Quant', questions: 25, marks: 25, duration: 'Combined' },
                    { name: 'Computer', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'GA', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'MSME', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Stream Specific', questions: 50, marks: 50, duration: 'Combined' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 100,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'English (Obj)', questions: 20, marks: 30, duration: 'Combined' },
                    { name: 'GA', questions: 40, marks: 50, duration: 'Combined' },
                    { name: 'MSME & Banking', questions: 40, marks: 120, duration: 'Combined' },
                    { name: 'Descriptive (2 Essays + 1 Letter)', questions: 3, marks: 50, duration: '60 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Arithmetic', 'Number Series'],
            'Reasoning Ability': ['Puzzles', 'Seating Arrangement', 'Logical Reasoning'],
            'MSME & Finance': ['MSME Definition', 'Priority Sector Lending', 'RBI Circulars', 'Govt Schemes'],
            'General Awareness': ['Banking & Financial Awareness', 'Economic Issues'],
            'English Language': ['Essay', 'Letter', 'Comprehension']
        },
        salary: {
            basic: '44500',
            gross: '100000',
            deductions: '18000 – 20000',
            inHand: '80000 – 82000',
            allowances: ['DA', 'HRA', 'Grade Allowance', 'Special Allowance'],
            careerGrowth: 'Assistant Manager -> Manager -> AGM -> DGM -> GM'
        },
        mockTests: [
            { id: 'sidbi-grade-a-phase1-mock', title: 'SIDBI Grade A Phase 1 Full Mock', type: 'Free', questions: 200, time: 120 }
        ],
        faqs: [
            { question: 'Is Engineering degree eligible?', answer: 'Yes.' },
            { question: 'Is there a Psychometric Test?', answer: 'Yes, mandatory but non-scoring.' }
        ]
    },
    {
        id: 'lic-aao',
        camelId: 'licAao',
        title: 'LIC AAO',
        subtitle: 'Life Insurance Corporation – Assistant Administrative Officer',
        category: 'insurance',
        level: 'National',
        quickInfo: {
            conductingBody: 'Life Insurance Corporation of India (LIC)',
            level: 'National',
            mode: 'Online (Prelims + Mains) + Interview',
            frequency: 'Irregular (Often every 1-2 years)',
            vacancies: '300 (Generalist) + Specialist vacancies (IT, CA, Legal, Rajbhasha)'
        },
        dates: {
            notification: 'Aug–Sep (Tentative)',
            applicationStart: 'Aug (Tentative)',
            admitCard: 'Sep (Tentative)',
            examDate: 'Sep–Oct (Tentative)',
            result: 'Mar (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree in any discipline from a recognized Indian University/Institution',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10, lic_employees: 5 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 100,
                totalMarks: 70,
                totalDuration: '60 min',
                sections: [
                    { name: 'Reasoning Ability', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'Quantitative Aptitude', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'English Language (Qualifying)', questions: 30, marks: 30, duration: '20 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 122,
                totalMarks: 325,
                totalDuration: '150 min',
                sections: [
                    { name: 'Reasoning Ability', questions: 30, marks: 90, duration: '40 min' },
                    { name: 'General Knowledge & Current Affairs', questions: 30, marks: 60, duration: '20 min' },
                    { name: 'Data Analysis & Interpretation', questions: 30, marks: 90, duration: '40 min' },
                    { name: 'Insurance & Financial Market Awareness', questions: 30, marks: 60, duration: '20 min' },
                    { name: 'Descriptive Test (Essay & Letter)', questions: 2, marks: 25, duration: '30 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 60,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 60, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Number Series', 'Simplification', 'Quadratic Equations'],
            'Reasoning Ability': ['Puzzles', 'Syllogism', 'Inequality', 'Coding-Decoding'],
            'Insurance Awareness': ['History of Life Insurance', 'IRDAI functions', 'Indian Financial Market'],
            'General Awareness': ['Current Affairs', 'Banking Awareness'],
            'English Language': ['Reading Comprehension', 'Cloze Test', 'Para Jumbles']
        },
        salary: {
            basic: '53600',
            gross: '92870 (Approx)',
            deductions: '12000 – 15000',
            inHand: '75000 – 80000',
            allowances: ['DA', 'HRA', 'CCA', 'Meal Coupon', 'Mobile/Internet'],
            careerGrowth: 'AAO -> AO -> ADM -> DM -> ZM -> EDM -> Chairman'
        },
        mockTests: [
            { id: 'lic-aao-prelims-mock', title: 'LIC AAO Prelims Full Mock', type: 'Free', questions: 100, time: 60 },
            { id: 'lic-aao-mains-insurance', title: 'LIC AAO Insurance Awareness Mock', type: 'Premium', questions: 30, time: 20 }
        ],
        faqs: [
            { question: 'Is there negative marking in LIC AAO?', answer: 'No, there is NO negative marking in both Prelims and Mains.' },
            { question: 'Are marks of the English section counted?', answer: 'No, English Language marks are qualifying only.' },
            { question: 'Is there a service bond?', answer: 'Yes, minimum 4 years.' }
        ]
    },
    {
        id: 'lic-ado',
        camelId: 'licAdo',
        title: 'LIC ADO',
        subtitle: 'Life Insurance Corporation – Apprentice Development Officer',
        category: 'insurance',
        level: 'National',
        quickInfo: {
            conductingBody: 'Life Insurance Corporation of India (LIC)',
            level: 'National',
            mode: 'Online (Prelims + Mains) + Interview',
            frequency: 'Irregular',
            vacancies: '9000+ (Zone-wise)'
        },
        dates: {
            notification: 'Jan–Feb (Tentative)',
            applicationStart: 'Jan–Feb (Tentative)',
            admitCard: 'Mar (Prelims) / Apr (Mains)',
            examDate: 'Mar (Prelims) / Apr (Mains)',
            result: 'Jul (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree in any discipline',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10, lic_employees: 'Up to 45' },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 100,
                totalMarks: 70,
                totalDuration: '60 min',
                sections: [
                    { name: 'Reasoning Ability', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'Numerical Ability', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'English Language', questions: 30, marks: 30, duration: '20 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 160,
                totalMarks: 160,
                totalDuration: '120 min',
                sections: [
                    { name: 'Reasoning & Numerical Ability', questions: 50, marks: 50, duration: 'Combined' },
                    { name: 'GK, Current Affairs & English', questions: 50, marks: 50, duration: 'Combined' },
                    { name: 'Insurance & Marketing Awareness', questions: 60, marks: 60, duration: 'Combined' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 40,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 40, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Simplification', 'Data Interpretation', 'Number Series', 'Arithmetic'],
            'Reasoning Ability': ['Puzzles', 'Syllogism', 'Coding-Decoding'],
            'Insurance Marketing': ['Financial Awareness', 'Life Insurance History', 'Marketing of Insurance'],
            'English Language': ['Reading Comprehension', 'Grammar', 'Vocabulary'],
            'General Awareness': ['Current Affairs', 'Financial Market News']
        },
        salary: {
            basic: '35650',
            gross: '51500 (Stipend)',
            deductions: 'N/A',
            inHand: '51500 (Fixed Stipend)',
            allowances: ['Becomes Probationary Officer after apprenticeship'],
            careerGrowth: 'Apprentice -> Probationary Dev Officer -> Dev Officer -> ABM -> BM'
        },
        mockTests: [
            { id: 'lic-ado-prelims-mock', title: 'LIC ADO Prelims Full Mock', type: 'Free', questions: 100, time: 60 },
            { id: 'lic-ado-mains-marketing', title: 'LIC ADO Insurance Marketing Mock', type: 'Premium', questions: 60, time: 45 }
        ],
        faqs: [
            { question: 'Is this a permanent job?', answer: 'Initially Apprentice, then Probationary.' },
            { question: 'Is the job sales-oriented?', answer: 'Yes, recruiting and managing agents.' }
        ]
    },
    {
        id: 'niacl-ao',
        camelId: 'niaclAo',
        title: 'NIACL AO',
        subtitle: 'New India Assurance Company Ltd – Administrative Officer',
        category: 'insurance',
        level: 'National',
        quickInfo: {
            conductingBody: 'NIACL',
            level: 'National',
            mode: 'Online (Prelims + Mains) + Interview',
            frequency: 'Varies',
            vacancies: '170–450 (Varies)'
        },
        dates: {
            notification: 'Aug–Sep (Tentative)',
            applicationStart: 'Aug (Tentative)',
            admitCard: 'Sep (Prelims) / Oct (Mains)',
            examDate: 'Sep–Oct (Prelims) / Nov (Mains)',
            result: 'Feb (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduate/PG (60% / 55% for SC/ST)',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '60 min',
                sections: [
                    { name: 'English Language', questions: 30, marks: 30, duration: '20 min' },
                    { name: 'Reasoning Ability', questions: 35, marks: 35, duration: '20 min' },
                    { name: 'Quantitative Aptitude', questions: 35, marks: 35, duration: '20 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: 202,
                totalMarks: 230,
                totalDuration: '180 min',
                sections: [
                    { name: 'Reasoning Ability', questions: 50, marks: 50, duration: '40 min' },
                    { name: 'English Language', questions: 50, marks: 50, duration: '40 min' },
                    { name: 'General Awareness', questions: 50, marks: 50, duration: '30 min' },
                    { name: 'Quantitative Aptitude', questions: 50, marks: 50, duration: '40 min' },
                    { name: 'Descriptive (Essay/Letter)', questions: 2, marks: 30, duration: '30 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Quadratic Equations', 'Number Series', 'Arithmetic'],
            'Reasoning Ability': ['Puzzles', 'Seating Arrangement', 'Syllogism', 'Input-Output'],
            'General Awareness': ['Current Affairs', 'Insurance Sector Awareness', 'Banking Awareness'],
            'English Language': ['Reading Comprehension', 'Cloze Test', 'Error Detection', 'Para Jumbles']
        },
        salary: {
            basic: '50925',
            gross: '85000 (Approx)',
            deductions: '10000 – 12000',
            inHand: '70000 – 73000',
            allowances: ['DA', 'HRA', 'CCA', 'Transport'],
            careerGrowth: 'AO -> Assistant Manager -> Deputy Manager -> Manager -> Chief Manager'
        },
        mockTests: [
            { id: 'niacl-ao-prelims-mock', title: 'NIACL AO Prelims Full Mock', type: 'Free', questions: 100, time: 60 },
            { id: 'niacl-ao-mains-mock', title: 'NIACL AO Mains Full Mock', type: 'Premium', questions: 200, time: 150 }
        ],
        faqs: [
            { question: 'Is there a bond in NIACL AO?', answer: 'Yes, 4 years.' },
            { question: 'Is the descriptive test marks counted?', answer: 'No, qualifying only.' }
        ]
    },
    {
        id: 'uiic-ao',
        camelId: 'uiicAo',
        title: 'UIIC AO',
        subtitle: 'United India Insurance Company – Administrative Officer',
        category: 'insurance',
        level: 'National',
        quickInfo: {
            conductingBody: 'UIIC',
            level: 'National',
            mode: 'Online (Single Exam) + Interview',
            frequency: 'Varies',
            vacancies: '200–300 (Varies)'
        },
        dates: {
            notification: 'Jan (Tentative)',
            applicationStart: 'Jan (Tentative)',
            admitCard: 'Feb (Tentative)',
            examDate: 'Feb (Tentative)',
            result: 'May (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Degree with 60% marks (55% for SC/ST)',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Single Online Exam',
                totalQuestions: 200,
                totalMarks: 200,
                totalDuration: '120 min',
                sections: [
                    { name: 'Reasoning', questions: 50, marks: 50, duration: 'Combined' },
                    { name: 'English Language', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'Quantitative Aptitude', questions: 50, marks: 50, duration: 'Combined' },
                    { name: 'General Awareness', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'Computer Knowledge', questions: 20, marks: 20, duration: 'Combined' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: '-',
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 'Final Selection', duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Simplification', 'Arithmetic', 'Number Series'],
            'Reasoning Ability': ['Puzzles', 'Seating Arrangement', 'Syllogism', 'Input-Output'],
            'General Awareness': ['Insurance Industry News', 'Financial Awareness', 'Current Affairs'],
            'English Language': ['Reading Comprehension', 'Error Spotting', 'Cloze Test'],
            'Computer Knowledge': ['MS Office', 'Hardware/Software', 'Networking Basics']
        },
        salary: {
            basic: '50925',
            gross: '88000 (Approx)',
            deductions: '10000 – 12000',
            inHand: '75000 – 78000',
            allowances: ['DA', 'HRA', 'Transport'],
            careerGrowth: 'AO -> Assistant Manager -> Deputy Manager -> Manager -> Chief Manager'
        },
        mockTests: [
            { id: 'uiic-ao-full-mock', title: 'UIIC AO Full Mock', type: 'Free', questions: 200, time: 120 }
        ],
        faqs: [
            { question: 'Is there a bond?', answer: 'Yes, typically 5 years.' },
            { question: 'Is there sectional timing?', answer: 'No, composite time of 2 hours.' }
        ]
    },
    {
        id: 'aic-mt',
        camelId: 'aicMt',
        title: 'AIC MT',
        subtitle: 'Agriculture Insurance Company of India – Management Trainee',
        category: 'insurance',
        level: 'National',
        quickInfo: {
            conductingBody: 'AIC',
            level: 'National',
            mode: 'Online + Interview',
            frequency: 'Irregular',
            vacancies: '30–50'
        },
        dates: {
            notification: 'Jan–Feb (Tentative)',
            applicationStart: 'Jan–Feb (Tentative)',
            admitCard: 'N/A',
            examDate: 'Feb–Mar (Tentative)',
            result: 'May (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation (60% / 55% SC/ST)',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (Online Exam)',
                totalQuestions: 150,
                totalMarks: 150,
                totalDuration: '135 min',
                sections: [
                    { name: 'Reasoning', questions: 35, marks: 35, duration: 'Combined' },
                    { name: 'English Language', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'General Awareness', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Quantitative Aptitude', questions: 35, marks: 35, duration: 'Combined' },
                    { name: 'Computer Literacy', questions: 30, marks: 30, duration: 'Combined' }
                ]
            },
            {
                phase: 'Descriptive Test',
                totalQuestions: 3,
                totalMarks: 30,
                totalDuration: '45 min',
                sections: [
                    { name: 'Essay, Precis, Comprehension', questions: 3, marks: 30, duration: '45 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 50,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 50, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Data Interpretation', 'Arithmetic', 'Number Series'],
            'Reasoning Ability': ['Puzzles', 'Critical Reasoning', 'Syllogism'],
            'General Awareness': ['Agriculture News', 'Government Schemes', 'Financial Awareness'],
            'Computer Literacy': ['Basics of Computer', 'MS Office', 'Internet']
        },
        salary: {
            basic: '50925',
            gross: '85000 (Approx)',
            deductions: '10000',
            inHand: '75000 (Approx)',
            allowances: ['DA', 'HRA', 'CCA', 'Transport'],
            careerGrowth: 'Management Trainee -> AO -> Scale II -> Scale III'
        },
        mockTests: [
            { id: 'aic-mt-mock', title: 'AIC MT Full Mock', type: 'Free', questions: 150, time: 135 }
        ],
        faqs: [
            { question: 'Is the Descriptive Test qualifying?', answer: 'Yes, minimum qualifying marks required.' },
            { question: 'Are there rural postings?', answer: 'Yes, likely.' }
        ]
    },

    // --- UPSC ---
    {
        id: 'upsc-cse',
        camelId: 'upscCse',
        title: 'UPSC Civil Services',
        subtitle: 'Union Public Service Commission – IAS / IPS / IFS / IRS',
        category: 'upsc',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'Offline (Pen & Paper) + Interview',
            frequency: 'Annually',
            vacancies: '800–1100 (Varies)'
        },
        dates: {
            notification: 'Feb',
            applicationStart: 'Feb',
            admitCard: 'May (Prelims) / Aug-Sep (Mains)',
            examDate: 'May–Jun (Prelims) / Sep (Mains)',
            result: 'Apr (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India (For IAS/IPS), Others eligible for Group A/B services',
            education: 'Graduation in any discipline from a recognized university',
            age: { min: 21, max: 32 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 6, obc: 9, sc_st: 'Unlimited', pwd: 9 }
        },
        pattern: [
            {
                phase: 'Prelims',
                totalQuestions: 180,
                totalMarks: 400,
                totalDuration: '4 hours',
                sections: [
                    { name: 'GS Paper I (Merit)', questions: 100, marks: 200, duration: '120 min' },
                    { name: 'GS Paper II (CSAT - Qualifying 33%)', questions: 80, marks: 200, duration: '120 min' }
                ]
            },
            {
                phase: 'Mains',
                totalQuestions: '-',
                totalMarks: 1750,
                totalDuration: '3 hours per paper',
                sections: [
                    { name: 'Paper A: Indian Language (Qualifying)', questions: '-', marks: 300, duration: '3 hrs' },
                    { name: 'Paper B: English (Qualifying)', questions: '-', marks: 300, duration: '3 hrs' },
                    { name: 'Paper I: Essay', questions: '-', marks: 250, duration: '3 hrs' },
                    { name: 'Paper II: GS I', questions: '-', marks: 250, duration: '3 hrs' },
                    { name: 'Paper III: GS II', questions: '-', marks: 250, duration: '3 hrs' },
                    { name: 'Paper IV: GS III', questions: '-', marks: 250, duration: '3 hrs' },
                    { name: 'Paper V: GS IV', questions: '-', marks: 250, duration: '3 hrs' },
                    { name: 'Paper VI: Optional 1', questions: '-', marks: 250, duration: '3 hrs' },
                    { name: 'Paper VII: Optional 2', questions: '-', marks: 250, duration: '3 hrs' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 275,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 275, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Prelims - GS': ['Current Events', 'History of India', 'Geography', 'Polity', 'Economy', 'Environment', 'Science'],
            'Prelims - CSAT': ['Comprehension', 'Interpersonal Skills', 'Logical Reasoning', 'Decision Making', 'General Mental Ability', 'Basic Numeracy'],
            'Mains - GS I': ['Heritage', 'Culture', 'History', 'Geography', 'Society'],
            'Mains - GS II': ['Governance', 'Constitution', 'Polity', 'Social Justice', 'IR'],
            'Mains - GS III': ['Technology', 'Economic Development', 'Biodiversity', 'Environment', 'Security', 'Disaster Mgmt'],
            'Mains - GS IV': ['Ethics', 'Integrity', 'Aptitude']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 90000',
            deductions: '10000 – 15000',
            inHand: '70000 – 75000',
            allowances: ['DA', 'HRA', 'Transport', 'Official Vehicle', 'Accommodation'],
            careerGrowth: 'SDM -> DM/Collector -> Joint Secretary -> Secretary -> Cabinet Secretary'
        },
        mockTests: [
            { id: 'upsc-prelims-gs1', title: 'UPSC Prelims GS Paper 1 Mock', type: 'Free', questions: 100, time: 120 },
            { id: 'upsc-prelims-csat', title: 'UPSC Prelims CSAT Mock', type: 'Premium', questions: 80, time: 120 }
        ],
        faqs: [
            { question: 'Is Coaching necessary?', answer: 'Not mandatory, but guidance helps due to vast syllabus.' },
            { question: 'Can I choose any optional subject?', answer: 'Yes, from the list provided by UPSC.' },
            { question: 'Is the Indian Language paper compulsory?', answer: 'Yes, for most candidates it is mandatory.' }
        ]
    },
    {
        id: 'upsc-ifos',
        camelId: 'upscIfos',
        title: 'UPSC IFoS',
        subtitle: 'Indian Forest Service Examination',
        category: 'upsc',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'Offline (Prelims same as CSE) + Offline Mains + Interview',
            frequency: 'Annually',
            vacancies: '150 (Varies)'
        },
        dates: {
            notification: 'Feb',
            applicationStart: 'Feb',
            admitCard: 'May (Prelims) / Oct (Mains)',
            examDate: 'May (Prelims) / Nov (Mains)',
            result: 'Mar (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s degree in Animal Husbandry, Botany, Chem, Geology, Math, Physics, Stats, Zoology, Agri, Forestry, or Engg',
            age: { min: 21, max: 32 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 6, obc: 9, sc_st: 'Unlimited', pwd: 9 }
        },
        pattern: [
            {
                phase: 'Prelims (Same as CSE)',
                totalQuestions: 180,
                totalMarks: 400,
                totalDuration: '4 hours',
                sections: [
                    { name: 'GS Paper I', questions: 100, marks: 200, duration: '120 min' },
                    { name: 'GS Paper II (CSAT)', questions: 80, marks: 200, duration: '120 min' }
                ]
            },
            {
                phase: 'Mains (Descriptive)',
                totalQuestions: '-',
                totalMarks: 1400,
                totalDuration: '3 hrs per paper',
                sections: [
                    { name: 'Paper I: General English', questions: '-', marks: 300, duration: '3 hrs' },
                    { name: 'Paper II: General Knowledge', questions: '-', marks: 300, duration: '3 hrs' },
                    { name: 'Paper III-VI: Optionals', questions: '-', marks: 800, duration: 'Combined' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 300,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 300, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Prelims': ['Same as UPSC CSE'],
            'Mains': ['General English', 'General Knowledge', 'Two Optional Subjects']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 90000',
            deductions: '10000 – 12000',
            inHand: '75000 – 78000',
            allowances: ['DA', 'HRA', 'Transport', 'Vehicle', 'Accommodation'],
            careerGrowth: 'ACF -> DCF -> CF -> CCF -> PCCF -> HoFF'
        },
        mockTests: [
            { id: 'ifos-prelims-mock', title: 'UPSC IFoS Prelims Mock (Same as CSE)', type: 'Free', questions: 100, time: 120 }
        ],
        faqs: [
            { question: 'Is Prelims cut-off same as CSE?', answer: 'No, usually higher for IFoS.' },
            { question: 'Can I apply for both?', answer: 'Yes, in the same application form.' },
            { question: 'Are Engineering optionals allowed?', answer: 'Yes, specific ones like Civil, Mech, Chemical, Agri Engg.' }
        ]
    },
    {
        id: 'upsc-geo-scientist',
        camelId: 'upscGeoScientist',
        title: 'UPSC Combined Geo-Scientist',
        subtitle: 'Recruitment for Geologist, Geophysicist, Chemist, and Hydrogeologist',
        category: 'scientific',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'Online Prelims (CBT) + Offline Mains + Interview',
            frequency: 'Annually',
            vacancies: '50–100+ (Stream-wise)'
        },
        dates: {
            notification: 'Sep',
            applicationStart: 'Sep',
            admitCard: 'Jan',
            examDate: 'Feb (Prelims) / Jun (Mains)',
            result: 'Jan'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Master’s in Geology/Physics/Geophysics/Chemistry',
            age: { min: 21, max: 32 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (CBT)',
                totalQuestions: 220,
                totalMarks: 400,
                totalDuration: '4 hours',
                sections: [
                    { name: 'Paper I: General Studies', questions: 100, marks: 100, duration: '120 min' },
                    { name: 'Paper II: Stream Specific', questions: 120, marks: 300, duration: '120 min' }
                ]
            },
            {
                phase: 'Mains (Descriptive)',
                totalQuestions: '-',
                totalMarks: 600,
                totalDuration: '9 hours',
                sections: [
                    { name: 'Paper I, II, III (Stream Specific)', questions: '-', marks: 600, duration: '3 hrs each' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 200,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 200, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'General Studies': ['Current Events', 'History', 'Geography', 'Polity', 'Science'],
            'Geology': ['Physical Geology', 'Mineralogy', 'Petrology'],
            'Geophysics': ['Solid Earth', 'Seismology', 'Math Methods'],
            'Chemistry': ['Inorganic', 'Physical', 'Organic', 'Analytical']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 90000',
            deductions: '10000 – 12000',
            inHand: '75000 – 78000',
            allowances: ['DA', 'HRA', 'Transport', 'Field Duty'],
            careerGrowth: 'Geologist Jr -> Sr -> Director -> DDG -> ADG'
        },
        mockTests: [
            { id: 'geo-scientist-gs-mock', title: 'Geo-Scientist Prelims GS Mock', type: 'Free', questions: 100, time: 120 }
        ],
        faqs: [
            { question: 'Is it only for GSI?', answer: 'Primarily GSI and CGWB.' },
            { question: 'Can Hydrogeologists apply?', answer: 'Yes, specific Scientist B post exists.' },
            { question: 'Is Prelims marks counted?', answer: 'Yes, all stages count.' }
        ]
    },
    {
        id: 'upsc-cms',
        camelId: 'upscCms',
        title: 'UPSC CMS',
        subtitle: 'Combined Medical Services Examination',
        category: 'medical',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'CBT + Interview',
            frequency: 'Annually',
            vacancies: '600–800+ (Railways, IOF, CHS)'
        },
        dates: {
            notification: 'Apr',
            applicationStart: 'Apr',
            admitCard: 'Jun',
            examDate: 'Jul',
            result: 'Dec'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Passed written/practical parts of final MBBS',
            age: { min: 'No lower limit', max: 32 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (CBT)',
                totalQuestions: 240,
                totalMarks: 500,
                totalDuration: '4 hours',
                sections: [
                    { name: 'Paper I: Gen Med & Paediatrics', questions: 120, marks: 250, duration: '120 min' },
                    { name: 'Paper II: Surgery, Gynae, PSM', questions: 120, marks: 250, duration: '120 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Personality Test', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Paper 1': ['General Medicine', 'Paediatrics'],
            'Paper 2': ['Surgery', 'Gynaecology & Obstetrics', 'Preventive & Social Medicine']
        },
        salary: {
            basic: '56100',
            gross: '95000 – 105000',
            deductions: '10000 – 12000',
            inHand: '85000 – 90000',
            allowances: ['NPA (20%)', 'DA', 'HRA', 'Transport'],
            careerGrowth: 'MO -> SMO -> CMO -> SAG'
        },
        mockTests: [
            { id: 'upsc-cms-paper1-mock', title: 'UPSC CMS Paper 1 Mock', type: 'Free', questions: 120, time: 120 }
        ],
        faqs: [
            { question: 'Can final year MBBS apply?', answer: 'Yes, if appearing for final exam.' },
            { question: 'Is internship mandatory?', answer: 'Yes, before appointment.' },
            { question: 'What is NPA?', answer: 'Non-Practicing Allowance (20% of Basic).' }
        ]
    },
    {
        id: 'upsc-cds',
        camelId: 'upscCds',
        title: 'UPSC CDS',
        subtitle: 'Combined Defence Services Examination (IMA, INA, AFA, OTA)',
        category: 'defence',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'Offline (Pen & Paper) + SSB Interview',
            frequency: 'Biannually (CDS I & CDS II)',
            vacancies: '340–400 (Varies by Academy)'
        },
        dates: {
            notification: 'Dec (CDS I) / May (CDS II)',
            applicationStart: 'Dec (CDS I) / May (CDS II)',
            admitCard: '3 weeks before exam',
            examDate: 'Apr (CDS I) / Sep (CDS II)',
            result: 'After SSB Interview & Medicals'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'IMA/OTA: Degree | INA: Engineering Degree | AFA: Degree with Physics & Math',
            age: { min: 19, max: 24 },
            ageRelaxation: { general: 0, obc: 0, sc_st: 0, pwd: 0 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Written Exam',
                totalQuestions: 340,
                totalMarks: 300,
                totalDuration: '6 hours',
                sections: [
                    { name: 'English', questions: 120, marks: 100, duration: '120 min' },
                    { name: 'General Knowledge', questions: 120, marks: 100, duration: '120 min' },
                    { name: 'Elementary Mathematics (Not for OTA)', questions: 100, marks: 100, duration: '120 min' }
                ]
            },
            {
                phase: 'SSB Interview',
                totalQuestions: '-',
                totalMarks: 300,
                totalDuration: '5 Days',
                sections: [
                    { name: 'Intelligence & Personality Test', questions: '-', marks: 300, duration: '5 Days' }
                ]
            }
        ],
        syllabus: {
            'English': ['Reading Comprehension', 'Spotting Errors', 'Synonyms & Antonyms', 'Idioms & Phrases'],
            'General Knowledge': ['Current Events', 'Physics, Chemistry, Biology', 'History', 'Geography', 'Defence News'],
            'Elementary Mathematics': ['Arithmetic', 'Algebra', 'Trigonometry', 'Geometry', 'Mensuration', 'Statistics']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 90000',
            deductions: '10000 – 15000',
            inHand: '70000 – 75000',
            allowances: ['MSP', 'Flying Allowance', 'High Altitude Allowance', 'DA'],
            careerGrowth: 'Lieutenant -> Captain -> Major -> Lt Colonel -> Colonel -> Brigadier'
        },
        mockTests: [
            { id: 'upsc-cds-ota-mock', title: 'UPSC CDS OTA Full Mock', type: 'Free', questions: 240, time: 240 },
            { id: 'upsc-cds-math-mock', title: 'CDS Elementary Maths Mock', type: 'Premium', questions: 100, time: 120 }
        ],
        faqs: [
            { question: 'Can girls apply for CDS?', answer: 'Yes, for OTA (Short Service Commission).' },
            { question: 'Is Mathematics compulsory?', answer: 'Only for IMA, INA, and AFA. OTA exempted.' },
            { question: 'Is there a height requirement?', answer: 'Yes, minimum standards apply.' }
        ]
    },
    {
        id: 'upsc-nda',
        camelId: 'upscNda',
        title: 'UPSC NDA',
        subtitle: 'National Defence Academy & Naval Academy Examination',
        category: 'defence',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'Offline (Pen & Paper) + SSB Interview',
            frequency: 'Biannually (NDA I & NDA II)',
            vacancies: '395–400 (Army, Navy, Air Force)'
        },
        dates: {
            notification: 'Dec (NDA I) / May (NDA II)',
            applicationStart: 'Dec (NDA I) / May (NDA II)',
            admitCard: '3 weeks before exam',
            examDate: 'Apr (NDA I) / Sep (NDA II)',
            result: 'Dec / Jun'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Army: 12th Pass | Air Force/Navy: 12th Pass with Physics & Math',
            age: { min: 15.7, max: 18.7 },
            ageRelaxation: { general: 0, obc: 0, sc_st: 0, pwd: 0 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Written Exam',
                totalQuestions: 270,
                totalMarks: 900,
                totalDuration: '5 hours',
                sections: [
                    { name: 'Mathematics', questions: 120, marks: 300, duration: '150 min' },
                    { name: 'General Ability Test (GAT)', questions: 150, marks: 600, duration: '150 min' }
                ]
            },
            {
                phase: 'SSB Interview',
                totalQuestions: '-',
                totalMarks: 900,
                totalDuration: '5 Days',
                sections: [
                    { name: 'Intelligence & Personality Test', questions: '-', marks: 900, duration: '5 Days' }
                ]
            }
        ],
        syllabus: {
            'Mathematics': ['Algebra', 'Matrices', 'Trigonometry', 'Calculus', 'Statistics'],
            'GAT': ['English', 'Physics', 'Chemistry', 'General Science', 'History', 'Geography', 'Current Events']
        },
        salary: {
            basic: '56100',
            gross: '85000+',
            deductions: '10000 – 15000',
            inHand: '70000+',
            allowances: ['MSP', 'Flying Allowance', 'Uniform Allowance'],
            careerGrowth: 'Lieutenant -> Captain -> Major -> Colonel -> Brigadier'
        },
        mockTests: [
            { id: 'upsc-nda-math-mock', title: 'UPSC NDA Mathematics Mock', type: 'Free', questions: 120, time: 150 },
            { id: 'upsc-nda-gat-mock', title: 'UPSC NDA GAT Full Mock', type: 'Premium', questions: 150, time: 150 }
        ],
        faqs: [
            { question: 'Can female candidates apply for NDA?', answer: 'Yes, female candidates are eligible.' },
            { question: 'Is 12th appearing eligible?', answer: 'Yes, candidates appearing in 12th can apply.' },
            { question: 'Is there a physical test?', answer: 'No marks, but strict medical standards during SSB.' }
        ]
    },
    {
        id: 'upsc-capf',
        camelId: 'upscCapf',
        title: 'UPSC CAPF (AC)',
        subtitle: 'Central Armed Police Forces – Assistant Commandant',
        category: 'defence',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'Offline (Paper 1) + Descriptive (Paper 2) + PET/PST + Interview',
            frequency: 'Annually',
            vacancies: '300–500 (BSF, CRPF, CISF, ITBP, SSB)'
        },
        dates: {
            notification: 'Apr (Tentative)',
            applicationStart: 'Apr (Tentative)',
            admitCard: 'Jul (Tentative)',
            examDate: 'Aug (Tentative)',
            result: 'Final Merit List'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree in any discipline',
            age: { min: 20, max: 25 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 0 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Paper 1 (Objective)',
                totalQuestions: 125,
                totalMarks: 250,
                totalDuration: '120 min',
                sections: [
                    { name: 'General Ability & Intelligence', questions: 125, marks: 250, duration: '120 min' }
                ]
            },
            {
                phase: 'Paper 2 (Descriptive)',
                totalQuestions: 6,
                totalMarks: 200,
                totalDuration: '180 min',
                sections: [
                    { name: 'General Studies, Essay & Comprehension', questions: 6, marks: 200, duration: '180 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 150,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 150, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Paper 1': ['Mental Ability', 'Science', 'Current Events', 'Polity', 'History', 'Geography'],
            'Paper 2': ['Essay', 'Comprehension', 'Précis', 'Report Writing', 'Grammar'],
            'PET': ['100m Race', '800m Race', 'Long Jump', 'Shot Put']
        },
        salary: {
            basic: '56100',
            gross: '80000 – 85000',
            deductions: '8000 – 10000',
            inHand: '70000 – 75000',
            allowances: ['DA', 'HRA', 'Hardship Allowance', 'Uniform Allowance'],
            careerGrowth: 'Assistant Commandant -> Deputy Commandant -> Commandant -> DIG -> IG'
        },
        mockTests: [
            { id: 'upsc-capf-paper1-mock', title: 'UPSC CAPF Paper 1 Full Mock', type: 'Free', questions: 125, time: 120 },
            { id: 'upsc-capf-paper2-mock', title: 'UPSC CAPF Paper 2 Practice', type: 'Premium', questions: 6, time: 180 }
        ],
        faqs: [
            { question: 'Is there a Physical Efficiency Test (PET)?', answer: 'Yes, mandatory for interview.' },
            { question: 'Can I write the Essay in Hindi?', answer: 'Yes, Essay in Hindi/English, others in English.' },
            { question: 'Is it a Gazetted Officer post?', answer: 'Yes, Group A Gazetted Officer.' }
        ]
    },
    {
        id: 'upsc-epfo',
        camelId: 'upscEpfo',
        title: 'UPSC EPFO',
        subtitle: 'Enforcement Officer / Accounts Officer',
        category: 'upsc',
        level: 'National',
        quickInfo: { frequency: 'Irregular', vacancies: '400+' }
    },

    // --- SSC ---
    {
        id: 'ssc-cgl',
        camelId: 'sscCgl',
        title: 'SSC CGL',
        subtitle: 'Staff Selection Commission – Combined Graduate Level',
        category: 'ssc',
        level: 'National',
        quickInfo: {
            conductingBody: 'Staff Selection Commission (SSC)',
            level: 'National',
            mode: 'Online (Tier 1 + Tier 2)',
            frequency: 'Annually',
            vacancies: '7000–10000+ (Varies)'
        },
        dates: {
            notification: 'Jun (Tentative)',
            applicationStart: 'Jun (Tentative)',
            admitCard: 'Aug (Tier 1) / Nov (Tier 2)',
            examDate: 'Sep (Tier 1) / Dec (Tier 2)',
            result: 'Mar (Final)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree in any discipline (Specific degrees for JSO/SI)',
            age: { min: 18, max: 32 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Tier 1 (Prelims)',
                totalQuestions: 100,
                totalMarks: 200,
                totalDuration: '60 min',
                sections: [
                    { name: 'General Intelligence & Reasoning', questions: 25, marks: 50, duration: 'Combined' },
                    { name: 'General Awareness', questions: 25, marks: 50, duration: 'Combined' },
                    { name: 'Quantitative Aptitude', questions: 25, marks: 50, duration: 'Combined' },
                    { name: 'English Comprehension', questions: 25, marks: 50, duration: 'Combined' }
                ]
            },
            {
                phase: 'Tier 2 (Mains)',
                totalQuestions: 150,
                totalMarks: 390,
                totalDuration: '135 min',
                sections: [
                    { name: 'Math + Reasoning', questions: 60, marks: 180, duration: '60 min' },
                    { name: 'English + GA', questions: 70, marks: 210, duration: '60 min' },
                    { name: 'Computer Module', questions: 20, marks: 60, duration: '15 min' },
                    { name: 'Data Entry Speed Test', questions: 1, marks: 'Qualifying', duration: '15 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: '-',
                totalDuration: '-',
                sections: [
                    { name: 'No Interview', questions: '-', marks: '-', duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Quantitative Aptitude': ['Arithmetic', 'Advanced Math (Algebra, Geometry, Trig)', 'Data Interpretation', 'Number System'],
            'Reasoning Ability': ['Analogy', 'Classification', 'Series', 'Coding-Decoding', 'Matrix'],
            'General Awareness': ['Current Affairs', 'History', 'Geography', 'Polity', 'Economics', 'Science'],
            'English Language': ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Cloze Test']
        },
        salary: {
            basic: '25500 – 47600',
            gross: '45000 – 85000',
            deductions: '4000 – 8000',
            inHand: '41000 – 77000',
            allowances: ['DA', 'HRA', 'Transport', 'CGHS'],
            careerGrowth: 'Auditor -> Senior Auditor -> AO -> Senior AO'
        },
        mockTests: [
            { id: 'ssc-cgl-tier1-mock', title: 'SSC CGL Tier 1 Full Mock', type: 'Free', questions: 100, time: 60 },
            { id: 'ssc-cgl-tier2-mock', title: 'SSC CGL Tier 2 Full Mock', type: 'Premium', questions: 150, time: 135 }
        ],
        faqs: [
            { question: 'Is there an interview in SSC CGL?', answer: 'No, discontinued for Group B & C.' },
            { question: 'Is Tier 1 qualifying?', answer: 'Yes, marks not added to final merit.' },
            { question: 'Is Computer Knowledge mandatory?', answer: 'Yes, qualifying it is mandatory.' }
        ]
    },
    {
        id: 'ssc-chsl',
        camelId: 'sscChsl',
        title: 'SSC CHSL',
        subtitle: 'Combined Higher Secondary Level',
        category: 'ssc',
        level: 'National',
        quickInfo: { conductingBody: 'SSC', level: 'National', mode: 'Online', frequency: 'Annually', vacancies: '4000+' },
        dates: { notification: 'May 2026', examDate: 'Aug 2026' },
        eligibility: { nationality: 'Indian', education: '12th Pass', age: { min: 18, max: 27 }, attempts: { general: 'Unlimited' }, ageRelaxation: { sc_st: 5, obc: 3, pwd: 10, general: 0 } },
        pattern: [], syllabus: {}, salary: { basic: '19900', gross: '35000', careerGrowth: 'LDC -> UDC' },
        mockTests: [], faqs: []
    },
    {
        id: 'ssc-mts',
        camelId: 'sscMts',
        title: 'SSC MTS',
        subtitle: 'Multi Tasking Staff',
        category: 'ssc',
        level: 'National',
        quickInfo: { frequency: 'Annually', vacancies: '10000+' }
    },
    {
        id: 'ssc-gd',
        camelId: 'sscGd',
        title: 'SSC GD Constable',
        subtitle: 'General Duty Constable',
        category: 'ssc',
        level: 'National',
        quickInfo: { frequency: 'Annually', vacancies: '25000+' }
    },
    {
        id: 'ssc-cpo',
        camelId: 'sscCpo',
        title: 'SSC CPO',
        subtitle: 'Central Police Organization (SI)',
        category: 'ssc',
        level: 'National',
        quickInfo: { frequency: 'Annually', vacancies: '1500+' }
    },
    {
        id: 'ssc-je',
        camelId: 'sscJe',
        title: 'SSC JE',
        subtitle: 'Junior Engineer',
        category: 'ssc',
        level: 'National',
        quickInfo: { frequency: 'Annually', vacancies: '1000+' }
    },
    {
        id: 'ssc-steno',
        camelId: 'sscSteno',
        title: 'SSC Stenographer',
        subtitle: 'Grade C & D',
        category: 'ssc',
        level: 'National',
        quickInfo: { frequency: 'Annually', vacancies: '1000+' }
    },

    // --- RAILWAYS ---
    {
        id: 'rrb-ntpc',
        camelId: 'rrbNtpc',
        title: 'RRB NTPC',
        subtitle: 'Railway Recruitment Board – Non-Technical Popular Categories',
        category: 'railways',
        level: 'National',
        quickInfo: {
            conductingBody: 'Railway Recruitment Boards (RRBs)',
            level: 'National',
            mode: 'Online (CBT 1 + CBT 2) + Skill Test',
            frequency: 'Irregular (Every 2-3 years)',
            vacancies: '35,000+ (Varies largely)'
        },
        dates: {
            notification: 'Feb–Mar (Tentative)',
            applicationStart: 'Feb–Mar (Tentative)',
            admitCard: 'Jun (Tentative)',
            examDate: 'Jun–Sep (Tentative)',
            result: 'Mar–Apr (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: '12th Pass (Undergraduate Posts) OR Graduation (Graduate Posts)',
            age: { min: 18, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (CBT 1)',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '90 min',
                sections: [
                    { name: 'General Awareness', questions: 40, marks: 40, duration: 'Combined' },
                    { name: 'Mathematics', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'General Intelligence & Reasoning', questions: 30, marks: 30, duration: 'Combined' }
                ]
            },
            {
                phase: 'Mains (CBT 2)',
                totalQuestions: 120,
                totalMarks: 120,
                totalDuration: '90 min',
                sections: [
                    { name: 'General Awareness', questions: 50, marks: 50, duration: 'Combined' },
                    { name: 'Mathematics', questions: 35, marks: 35, duration: 'Combined' },
                    { name: 'General Intelligence & Reasoning', questions: 35, marks: 35, duration: 'Combined' }
                ]
            },
            {
                phase: 'Skill Test',
                totalQuestions: '-',
                totalMarks: '-',
                totalDuration: '-',
                sections: [
                    { name: 'Typing / Aptitude Test', questions: '-', marks: 'Qualifying', duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Mathematics': ['Number System', 'Decimals & Fractions', 'LCM & HCF', 'Ratio & Proportions', 'Mensuration', 'Time & Work'],
            'Reasoning Ability': ['Analogies', 'Coding-Decoding', 'Mathematical Operations', 'Venn Diagrams', 'Data Sufficiency'],
            'General Awareness': ['Current Events', 'Games & Sports', 'Art & Culture of India', 'Indian Literature', 'General Science']
        },
        salary: {
            basic: '19900 – 35400',
            gross: '30000 – 60000',
            deductions: '3000 – 6000',
            inHand: '27000 – 54000',
            allowances: ['DA', 'HRA', 'Transport', 'Night Duty Allowance'],
            careerGrowth: 'Junior Clerk -> Senior Clerk -> Station Master -> Section Officer'
        },
        mockTests: [
            { id: 'rrb-ntpc-cbt1-mock', title: 'RRB NTPC CBT 1 Full Mock', type: 'Free', questions: 100, time: 90 },
            { id: 'rrb-ntpc-cbt2-mock', title: 'RRB NTPC CBT 2 Full Mock', type: 'Premium', questions: 120, time: 90 }
        ],
        faqs: [
            { question: 'Is the Typing Test mandatory for all posts?', answer: 'No, only for Clerical/Typist posts.' },
            { question: 'Can I apply for multiple posts?', answer: 'Yes, if eligible, but separate exams may be required.' }
        ]
    },
    {
        id: 'rrb-group-d',
        camelId: 'rrbGroupD',
        title: 'RRB Group D',
        subtitle: 'Railway Recruitment Board – Level 1 Posts (Track Maintainer, Pointsman, etc.)',
        category: 'railways',
        level: 'National',
        quickInfo: {
            conductingBody: 'Railway Recruitment Cells (RRCs)',
            level: 'National',
            mode: 'Online (CBT) + Physical Efficiency Test (PET)',
            frequency: 'Irregular (High Volume Cycles)',
            vacancies: '1,00,000+ (Varies heavily by cycle)'
        },
        dates: {
            notification: 'Jan–Mar (Tentative)',
            applicationStart: 'Jan–Mar (Tentative)',
            admitCard: '10 days before exam',
            examDate: 'Apr–Jun (Tentative)',
            result: 'Dec (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: '10th Pass (Matriculation) OR ITI',
            age: { min: 18, max: 33 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'CBT (Objective)',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '90 min',
                sections: [
                    { name: 'General Science', questions: 25, marks: 25, duration: 'Combined' },
                    { name: 'Mathematics', questions: 25, marks: 25, duration: 'Combined' },
                    { name: 'General Intelligence & Reasoning', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'General Awareness', questions: 20, marks: 20, duration: 'Combined' }
                ]
            },
            {
                phase: 'PET (Physical Test)',
                totalQuestions: '-',
                totalMarks: '-',
                totalDuration: '-',
                sections: [
                    { name: 'Physical Tasks', questions: '-', marks: 'Qualifying', duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Mathematics': ['Number System', 'BODMAS', 'Decimals', 'Fractions', 'LCM & HCF', 'Ratio', 'Mensuration', 'Time & Work', 'Time & Distance', 'SI & CI', 'Profit & Loss'],
            'General Intelligence': ['Analogies', 'Coding-Decoding', 'Mathematical Operations', 'Venn Diagrams', 'Data Interpretation', 'Syllogism'],
            'General Science': ['Physics (10th level)', 'Chemistry (10th level)', 'Life Sciences (10th level)'],
            'General Awareness': ['Science & Technology', 'Sports', 'Culture', 'Personalities', 'Economics', 'Politics'],
            'PET': ['Male: Lift 35kg 100m + Run 1000m', 'Female: Lift 20kg 100m + Run 1000m']
        },
        salary: {
            basic: '18000',
            gross: '28000 – 32000',
            deductions: '2500 – 3000',
            inHand: '25000 – 29000',
            allowances: ['DA', 'HRA', 'Transport', 'Night Duty', 'Risk Allowance'],
            careerGrowth: 'Group D -> Group C -> Technician/Clerk'
        },
        mockTests: [
            { id: 'rrb-group-d-full-mock', title: 'RRB Group D Full Mock', type: 'Free', questions: 100, time: 90 }
        ],
        faqs: [
            { question: 'Is ITI mandatory?', answer: 'For some technical posts, yes. For others, 10th pass is sufficient.' },
            { question: 'Is there an interview?', answer: 'No interview for Group D.' },
            { question: 'Is PET difficult?', answer: 'Requires practice. Failing PET leads to disqualification.' }
        ]
    },
    {
        id: 'rrb-alp',
        camelId: 'rrbAlp',
        title: 'RRB ALP',
        subtitle: 'Railway Recruitment Board – Assistant Loco Pilot',
        category: 'railways',
        level: 'National',
        quickInfo: {
            conductingBody: 'Railway Recruitment Boards (RRBs)',
            level: 'National',
            mode: 'Online (CBT 1 + CBT 2) + CBAT (Psycho Test)',
            frequency: 'Annually (Recently regularized)',
            vacancies: '5000–18000+ (Varies heavily)'
        },
        dates: {
            notification: 'Jan–Feb (Tentative)',
            applicationStart: 'Jan–Feb (Tentative)',
            admitCard: 'May–Jun (Tentative)',
            examDate: 'Jun–Aug (CBT 1) / Sep (CBT 2)',
            result: 'Dec (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Matriculation + ITI / Diploma / B.E./B.Tech',
            age: { min: 18, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 0 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'CBT 1 (Screening)',
                totalQuestions: 75,
                totalMarks: 75,
                totalDuration: '60 min',
                sections: [
                    { name: 'Mathematics', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Reasoning', questions: 25, marks: 25, duration: 'Combined' },
                    { name: 'General Science', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'General Awareness', questions: 10, marks: 10, duration: 'Combined' }
                ]
            },
            {
                phase: 'CBT 2 (Mains)',
                totalQuestions: 175,
                totalMarks: 175,
                totalDuration: '150 min',
                sections: [
                    { name: 'Part A: Math, Reasoning, Basic Sci & Engg', questions: 100, marks: 100, duration: '90 min' },
                    { name: 'Part B: Relevant Trade', questions: 75, marks: 75, duration: '60 min' }
                ]
            },
            {
                phase: 'CBAT (Psycho Test)',
                totalQuestions: '-',
                totalMarks: '-',
                totalDuration: '71 min',
                sections: [
                    { name: 'Test Battery', questions: '-', marks: 'Qualifying', duration: '71 min' }
                ]
            }
        ],
        syllabus: {
            'Mathematics': ['Number System', 'BODMAS', 'Decimals', 'Fractions', 'LCM & HCF', 'Ratio', 'Mensuration', 'Time & Work', 'Time & Distance', 'SI & CI', 'Profit & Loss'],
            'General Science': ['Physics (10th Level)', 'Chemistry (10th Level)', 'Life Sciences (10th Level)'],
            'Basic Science & Engg': ['Engineering Drawing', 'Units & Measurements', 'Heat & Temperature', 'Basic Electricity', 'Levers', 'IT Literacy']
        },
        salary: {
            basic: '19900',
            gross: '35000 – 45000',
            deductions: '3000 – 4000',
            inHand: '30000 – 40000',
            allowances: ['Dearness Allowance', 'Running Allowance (Kilometer Allowance)', 'HRA', 'Transport Allowance'],
            careerGrowth: 'ALP -> Senior ALP -> Loco Pilot (Goods) -> Loco Pilot (Passenger) -> Mail/Express'
        },
        mockTests: [
            { id: 'rrb-alp-cbt1-mock', title: 'RRB ALP CBT 1 Full Mock', type: 'Free', questions: 75, time: 60 },
            { id: 'rrb-alp-cbt2-parta-mock', title: 'RRB ALP CBT 2 Part A Mock', type: 'Premium', questions: 100, time: 90 }
        ],
        faqs: [
            { question: 'Is B.Tech eligible for ALP?', answer: 'Yes, B.E./B.Tech in Mech, Elect, Electronics, Auto are eligible.' },
            { question: 'What is the medical standard?', answer: 'A-1 Standard (6/6 vision without glasses) is mandatory.' },
            { question: 'Is Part B of CBT 2 counted for merit?', answer: 'No, it is qualifying only (35% required).' }
        ]
    },
    {
        id: 'rrb-je',
        camelId: 'rrbJe',
        title: 'RRB JE',
        subtitle: 'Railway Recruitment Board – Junior Engineer',
        category: 'railways',
        level: 'National',
        quickInfo: {
            conductingBody: 'Railway Recruitment Boards (RRBs)',
            level: 'National',
            mode: 'Online (CBT 1 + CBT 2)',
            frequency: 'Irregular (Every 2-4 years)',
            vacancies: '13,000+ (Varies)'
        },
        dates: {
            notification: 'Jul–Aug (Tentative)',
            applicationStart: 'Jul–Aug (Tentative)',
            admitCard: 'Oct (Tentative)',
            examDate: 'Nov (CBT 1) / Feb (CBT 2)',
            result: 'Apr–May (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Diploma / B.E./B.Tech in relevant stream',
            age: { min: 18, max: 33 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'CBT 1 (Screening)',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '90 min',
                sections: [
                    { name: 'Mathematics', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Reasoning', questions: 25, marks: 25, duration: 'Combined' },
                    { name: 'General Awareness', questions: 15, marks: 15, duration: 'Combined' },
                    { name: 'General Science', questions: 30, marks: 30, duration: 'Combined' }
                ]
            },
            {
                phase: 'CBT 2 (Mains)',
                totalQuestions: 150,
                totalMarks: 150,
                totalDuration: '120 min',
                sections: [
                    { name: 'General Awareness', questions: 15, marks: 15, duration: 'Combined' },
                    { name: 'Physics & Chemistry', questions: 15, marks: 15, duration: 'Combined' },
                    { name: 'Basics of Computers', questions: 10, marks: 10, duration: 'Combined' },
                    { name: 'Basics of Environment', questions: 10, marks: 10, duration: 'Combined' },
                    { name: 'Technical Abilities', questions: 100, marks: 100, duration: 'Combined' }
                ]
            }
        ],
        syllabus: {
            'Mathematics': ['Number System', 'BODMAS', 'Polynomials', 'Linear Equations', 'Trigonometry', 'Mensuration'],
            'General Science': ['Physics', 'Chemistry', 'Biology (10th Std)'],
            'Technical Abilities': ['Building Materials', 'Thermodynamics', 'Circuits', 'Digital Electronics'],
            'Computer Basics': ['Architecture', 'I/O', 'MS Office', 'Networking', 'OS', 'Internet']
        },
        salary: {
            basic: '35400',
            gross: '55000 – 60000',
            deductions: '5000 – 6000',
            inHand: '50000 – 54000',
            allowances: ['DA', 'HRA', 'Transport'],
            careerGrowth: 'Junior Engineer -> SSE -> AEN'
        },
        mockTests: [
            { id: 'rrb-je-cbt1-mock', title: 'RRB JE CBT 1 Full Mock', type: 'Free', questions: 100, time: 90 },
            { id: 'rrb-je-cbt2-civil', title: 'RRB JE CBT 2 Civil Mock', type: 'Premium', questions: 150, time: 120 }
        ],
        faqs: [
            { question: 'Is final year eligible?', answer: 'Generally No. Must possess certificate by closing date.' },
            { question: 'Is CBT 1 marks counted?', answer: 'No, CBT 1 is qualifying.' },
            { question: 'Can I apply for multiple streams?', answer: 'No, check qualification based exam group.' }
        ]
    },

    // --- JUDICIARY ---
    {
        id: 'judicial-services',
        camelId: 'pcsJ',
        title: 'PCS (J) - Judiciary',
        subtitle: 'State Judicial Services',
        category: 'judiciary',
        level: 'State',
        quickInfo: { frequency: 'State-wise', vacancies: 'Varies' }
    },
    {
        id: 'delhi-judicial',
        camelId: 'djs',
        title: 'Delhi Judicial Services',
        subtitle: 'DJS Exam',
        category: 'judiciary',
        level: 'State',
        quickInfo: { frequency: 'Annually', vacancies: '50+' }
    },

    // --- TEACHING ---
    {
        id: 'ctet',
        camelId: 'ctet',
        title: 'CTET',
        subtitle: 'Central Teacher Eligibility Test',
        category: 'teaching',
        level: 'National',
        quickInfo: {
            conductingBody: 'Central Board of Secondary Education (CBSE)',
            level: 'National',
            mode: 'Offline (OMR Based)',
            frequency: 'Biannually (July & Dec/Jan)',
            vacancies: 'Qualifying Exam (Not for direct recruitment)'
        },
        dates: {
            notification: 'Mar / Sep (Tentative)',
            applicationStart: 'Mar / Sep (Tentative)',
            admitCard: '1 week before exam',
            examDate: 'Jul / Jan (Tentative)',
            result: 'Aug / Feb (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'B.Ed / D.El.Ed / B.El.Ed + Graduation/Senior Secondary',
            age: { min: 18, max: 'No Upper Limit' },
            ageRelaxation: { general: 'N/A', obc: 'N/A', sc_st: 'N/A', pwd: 'N/A' },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Paper 1 (Primary)',
                totalQuestions: 150,
                totalMarks: 150,
                totalDuration: '150 min',
                sections: [
                    { name: 'Child Development & Pedagogy', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Language I', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Language II', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Mathematics', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'EVS', questions: 30, marks: 30, duration: 'Combined' }
                ]
            },
            {
                phase: 'Paper 2 (Elementary)',
                totalQuestions: 150,
                totalMarks: 150,
                totalDuration: '150 min',
                sections: [
                    { name: 'Child Development & Pedagogy', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Language I', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Language II', questions: 30, marks: 30, duration: 'Combined' },
                    { name: 'Maths / Science / Social Studies', questions: 60, marks: 60, duration: 'Combined' }
                ]
            }
        ],
        syllabus: {
            'Child Development': ['Concept of Development', 'Piaget, Kohlberg and Vygotsky', 'Inclusive Education', 'Learning & Pedagogy'],
            'Languages': ['Reading Comprehension (Prose/Poem)', 'Grammar', 'Pedagogy of Language Development'],
            'Mathematics': ['Number System', 'Geometry', 'Shapes', 'Pedagogical Issues'],
            'EVS': ['Family and Friends', 'Food & Shelter', 'Water & Travel']
        },
        salary: {
            basic: 'N/A',
            gross: '45000 – 60000 (Starting)',
            deductions: 'N/A',
            inHand: 'N/A',
            allowances: ['N/A'],
            careerGrowth: 'PRT -> TGT -> PGT -> Vice Principal -> Principal'
        },
        mockTests: [
            { id: 'ctet-paper1-mock', title: 'CTET Paper 1 Full Mock', type: 'Free', questions: 150, time: 150 }
        ],
        faqs: [
            { question: 'Is CTET valid for a lifetime?', answer: 'Yes, the CTET certificate is now valid for a lifetime.' },
            { question: 'Is there negative marking?', answer: 'No, there is no negative marking in CTET.' },
            { question: 'Can I appear for both Paper 1 and 2?', answer: 'Yes, if you meet the eligibility criteria for both levels.' }
        ]
    },
    {
        id: 'ugc-net',
        camelId: 'ugcNet',
        title: 'UGC NET',
        subtitle: 'University Grants Commission – National Eligibility Test',
        category: 'teaching',
        level: 'National',
        quickInfo: {
            conductingBody: 'National Testing Agency (NTA)',
            level: 'National',
            mode: 'Online (CBT)',
            frequency: 'Biannually (June & December)',
            vacancies: 'Qualifying for Assistant Professor & JRF Award'
        },
        dates: {
            notification: 'Mar (June Cycle) / Sep (Dec Cycle)',
            applicationStart: 'Mar / Sep',
            admitCard: '1 week before exam',
            examDate: 'Jun 10–21 / Dec 6–14',
            result: 'Jul / Jan'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Master’s Degree (55%) OR 4-Year Bachelor’s (75% for JRF/PhD)',
            age: { min: 'No Limit', max: '30 (JRF) / No Limit (Asst. Prof)' },
            ageRelaxation: { general: 0, obc: 5, sc_st: 5, pwd: 5 },
            attempts: { general: 'No limit (Asst Prof)', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Paper 1 (General)',
                totalQuestions: 50,
                totalMarks: 100,
                totalDuration: 'Combined 180 min',
                sections: [
                    { name: 'Teaching & Research Aptitude', questions: 50, marks: 100, duration: 'Combined' }
                ]
            },
            {
                phase: 'Paper 2 (Subject)',
                totalQuestions: 100,
                totalMarks: 200,
                totalDuration: 'Combined 180 min',
                sections: [
                    { name: 'Subject Specific', questions: 100, marks: 200, duration: 'Combined' }
                ]
            }
        ],
        syllabus: {
            'Paper 1': ['Teaching Aptitude', 'Research Aptitude', 'Reading Comprehension', 'Communication', 'Math Reasoning', 'Logical Reasoning', 'Data Interpretation', 'ICT', 'People & Environment', 'Higher Education'],
            'Paper 2': ['Subject specific syllabus (83 subjects)']
        },
        salary: {
            basic: '37000 (JRF) / 57700 (Asst Prof)',
            gross: '45000 (JRF) / 80000+ (Asst Prof)',
            deductions: 'Tax',
            inHand: '37000 (JRF) / 65000+ (Asst Prof)',
            allowances: ['HRA', 'DA', 'Travel'],
            careerGrowth: 'JRF -> SRF -> PhD -> Assistant Professor -> Associate Professor -> Professor'
        },
        mockTests: [
            { id: 'ugc-net-paper1-mock', title: 'UGC NET Paper 1 Full Mock', type: 'Free', questions: 50, time: 60 },
            { id: 'ugc-net-paper2-cs', title: 'UGC NET Computer Science Mock', type: 'Premium', questions: 100, time: 120 }
        ],
        faqs: [
            { question: 'Is there negative marking?', answer: 'No, there is currently no negative marking.' },
            { question: 'Can B.Tech students apply?', answer: 'Yes, 4-year Bachelor’s (75%) eligible for JRF/PhD.' },
            { question: 'Is the exam conducted in separate shifts?', answer: 'Yes, Paper 1 & 2 in single 3-hour session.' }
        ]
    },
    {
        id: 'kvs-recruitment',
        camelId: 'kvsRecruitment',
        title: 'KVS Recruitment',
        subtitle: 'Kendriya Vidyalaya Sangathan – PRT / TGT / PGT',
        category: 'teaching',
        level: 'National',
        quickInfo: {
            conductingBody: 'Kendriya Vidyalaya Sangathan (KVS)',
            level: 'National',
            mode: 'Online (CBT) + Interview/Demo Teaching',
            frequency: 'Irregular (Every 2–4 years)',
            vacancies: '6000–13000+ (Varies)'
        },
        dates: {
            notification: 'Varies',
            applicationStart: 'Varies',
            examDate: '2-3 months after notification',
            result: '2-3 months after interviews'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'PRT: 12th+D.El.Ed+CTET | TGT: Grad+B.Ed+CTET | PGT: PG+B.Ed',
            age: { min: 18, max: '30 (PRT), 35 (TGT), 40 (PGT)' },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 0, women: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'CBT (Online)',
                totalQuestions: 180,
                totalMarks: 180,
                totalDuration: '180 min',
                sections: [
                    { name: 'Languages (Eng/Hin)', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'GA, Reasoning, Computer', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Perspectives on Education', questions: 60, marks: 60, duration: 'Combined' },
                    { name: 'Subject Specific', questions: 80, marks: 80, duration: 'Combined' }
                ]
            },
            {
                phase: 'Professional Competency',
                totalQuestions: '-',
                totalMarks: 60,
                totalDuration: '-',
                sections: [
                    { name: 'Demo Teaching', questions: '-', marks: 30, duration: '-' },
                    { name: 'Interview', questions: '-', marks: 30, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Pedagogy': ['Understanding Learner', 'Teaching Learning', 'School Organization', 'Perspectives in Education'],
            'General Awareness': ['Current Affairs', 'Reasoning', 'Computer Literacy'],
            'Subject Specific': ['PRT: Math, Hindi, English, EVS', 'TGT/PGT: Specific Subject Depth']
        },
        salary: {
            basic: '35400 (PRT) / 44900 (TGT) / 47600 (PGT)',
            gross: '55000 – 75000',
            deductions: '5000 – 8000',
            inHand: '50000 – 65000',
            allowances: ['DA', 'HRA', 'Transport', 'NPS'],
            careerGrowth: 'PRT -> TGT -> PGT -> Vice Principal -> Principal'
        },
        mockTests: [
            { id: 'kvs-prt-full-mock', title: 'KVS PRT Full Mock', type: 'Free', questions: 180, time: 180 }
        ],
        faqs: [
            { question: 'Is CTET mandatory?', answer: 'Yes, CTET Paper 1 for PRT, Paper 2 for TGT.' },
            { question: 'Is B.Ed allowed for PRT?', answer: 'No, only D.El.Ed/JBT for Primary Teachers.' },
            { question: 'Is there an interview?', answer: 'Yes, Demo Teaching + Interview (60 Marks).' }
        ]
    },
    {
        id: 'dsssb',
        camelId: 'dsssb',
        title: 'DSSSB',
        subtitle: 'Delhi Subordinate Services Selection Board',
        category: 'teaching',
        level: 'State',
        quickInfo: { frequency: 'Regularly', vacancies: 'Varies' }
    },

    // --- ENGINEERING ---
    {
        id: 'gate',
        camelId: 'gate',
        title: 'GATE',
        subtitle: 'Graduate Aptitude Test in Engineering',
        category: 'engineering',
        level: 'National',
        quickInfo: {
            conductingBody: 'IITs / IISc',
            level: 'National',
            mode: 'Online (CBT)',
            frequency: 'Annually (February)',
            vacancies: 'N/A (M.Tech Admissions & PSU Jobs)'
        },
        dates: {
            notification: 'Aug (Prev Year)',
            applicationStart: 'Aug–Sep',
            admitCard: 'Jan',
            examDate: 'Feb (Weekends)',
            result: 'Mar'
        },
        eligibility: {
            nationality: 'Indian & International',
            education: '3rd Year or Higher of Undergraduate Degree / Completed Degree',
            age: { min: 'No Min', max: 'No Max' },
            ageRelaxation: { general: 0, obc: 0, sc_st: 0, pwd: 0 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Single Paper',
                totalQuestions: 65,
                totalMarks: 100,
                totalDuration: '180 min',
                sections: [
                    { name: 'General Aptitude (GA)', questions: 10, marks: 15, duration: 'Combined' },
                    { name: 'Subject Specific', questions: 55, marks: 85, duration: 'Combined' }
                ]
            }
        ],
        syllabus: {
            'General Aptitude': ['Verbal Aptitude', 'Quantitative Aptitude', 'Analytical Aptitude', 'Spatial Aptitude'],
            'Engineering Math': ['Linear Algebra', 'Calculus', 'Probability & Statistics', 'Numerical Methods'],
            'Subject Specific': ['Depends on Stream (CS, ME, EE, CE, etc.)']
        },
        salary: {
            basic: '40000 – 140000',
            gross: '12-18 LPA (PSU)',
            deductions: 'PF, Tax',
            inHand: '70000 – 90000 (PSU)',
            allowances: ['HRA', 'Medical', 'PRP', 'Furniture'],
            careerGrowth: 'GET -> Engineer -> Senior Engineer -> Manager -> GM'
        },
        mockTests: [
            { id: 'gate-cs-mock', title: 'GATE CS Full Mock', type: 'Free', questions: 65, time: 180 },
            { id: 'gate-general-aptitude', title: 'GATE General Aptitude Practice', type: 'Free', questions: 10, time: 20 }
        ],
        faqs: [
            { question: 'Are 3rd-year students eligible?', answer: 'Yes, 3rd-year students can appear.' },
            { question: 'Is GATE score valid for 3 years?', answer: 'Yes, for M.Tech admissions. PSU recruitment usually current year.' },
            { question: 'What is MSQ?', answer: 'Multiple Select Question. One or more correct answers, all must be selected. No negative marking.' }
        ]
    },
    {
        id: 'upsc-ese',
        camelId: 'upscEse',
        title: 'UPSC ESE (IES)',
        subtitle: 'UPSC Engineering Services Examination (Indian Engineering Services)',
        category: 'engineering',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'Offline (Prelims + Mains) + Interview',
            frequency: 'Annually',
            vacancies: '200–500 (Civil, Mech, Electrical, E&T)'
        },
        dates: {
            notification: 'Sep (Previous Year)',
            applicationStart: 'Sep (Previous Year)',
            admitCard: 'Jan–Feb',
            examDate: 'Feb (Prelims) / Jun (Mains)',
            result: 'Nov–Dec'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Degree in Engineering (B.E./B.Tech) in Civil, Mech, Elect, or E&T',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (Objective)',
                totalQuestions: 250,
                totalMarks: 500,
                totalDuration: '4 hours',
                sections: [
                    { name: 'Paper I: GS & Engg Aptitude', questions: 100, marks: 200, duration: '120 min' },
                    { name: 'Paper II: Engg Discipline', questions: 150, marks: 300, duration: '120 min' }
                ]
            },
            {
                phase: 'Mains (Descriptive)',
                totalQuestions: '-',
                totalMarks: 600,
                totalDuration: '6 hours',
                sections: [
                    { name: 'Paper I: Discipline Specific 1', questions: '-', marks: 300, duration: '180 min' },
                    { name: 'Paper II: Discipline Specific 2', questions: '-', marks: 300, duration: '180 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 200,
                totalDuration: '-',
                sections: [
                    { name: 'Personality Test', questions: '-', marks: 200, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Paper 1 GS': ['Current Issues', 'Ethics', 'Engg Math', 'Design', 'Quality', 'Environment', 'ICT', 'Project Mgmt'],
            'Civil': ['Building Materials', 'Solid Mechanics', 'Structural Analysis', 'Fluid Mechanics', 'Surveying'],
            'Mechanical': ['Thermodynamics', 'IC Engines', 'Fluid Mechanics', 'Manufacturing', 'Machine Design']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 90000',
            deductions: '10000 – 12000',
            inHand: '75000 – 78000',
            allowances: ['DA', 'HRA', 'Transport', 'Medical', 'Vehicle (Senior)'],
            careerGrowth: 'AEE -> Executive Engineer -> SE -> Chief Engineer'
        },
        mockTests: [
            { id: 'ese-paper1-gs-mock', title: 'ESE Prelims GS & Aptitude Mock', type: 'Free', questions: 100, time: 120 }
        ],
        faqs: [
            { question: 'Is CS/IT eligible?', answer: 'No, unless they have a degree in E&T or write in eligible streams.' },
            { question: 'Are Prelims marks counted?', answer: 'Yes, Prelims marks are added to final merit.' },
            { question: 'Is calculator allowed?', answer: 'Only in Mains (Conventional) papers.' }
        ]
    },
    {
        id: 'isro-scientist',
        camelId: 'isroScientist',
        title: 'ISRO Scientist/Engineer',
        subtitle: 'ISRO Centralised Recruitment Board (ICRB) – Scientist/Engineer \'SC\'',
        category: 'engineering',
        level: 'National',
        quickInfo: {
            conductingBody: 'Indian Space Research Organisation (ISRO)',
            level: 'National',
            mode: 'Online (Written Test) + Interview',
            frequency: 'Varies (Usually Annual)',
            vacancies: '60–300+ (Stream-wise: Electronics, Mechanical, CS)'
        },
        dates: {
            notification: 'Varies',
            applicationStart: 'Varies',
            admitCard: '2 weeks before exam',
            examDate: 'Varies',
            result: 'After interviews'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'B.E./B.Tech with min 65% marks or CGPA 6.84/10',
            age: { min: 18, max: 28 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Written Test (Objective)',
                totalQuestions: 95,
                totalMarks: 100,
                totalDuration: '120 min',
                sections: [
                    { name: 'Part A: Area of Discipline (Tech)', questions: 80, marks: 80, duration: 'Combined' },
                    { name: 'Part B: Aptitude/Ability', questions: 15, marks: 20, duration: 'Combined' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Technical': ['Electronics: EM Theory, Signals, Digital', 'Mechanical: High Weightage Topics', 'CS: Algorithms, OS, DBMS'],
            'Aptitude': ['Numerical', 'Logical', 'Diagrammatic', 'Abstract']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 90000',
            deductions: '10000 – 12000',
            inHand: '75000 – 78000',
            allowances: ['DA', 'HRA', 'Transport', 'Professional Update'],
            careerGrowth: 'Scientist SC -> SD -> SE -> SF -> SG'
        },
        mockTests: [
            { id: 'isro-mechanical-mock', title: 'ISRO Scientist Mechanical Mock', type: 'Free', questions: 95, time: 120 },
            { id: 'isro-cs-mock', title: 'ISRO Scientist CS Mock', type: 'Premium', questions: 95, time: 120 }
        ],
        faqs: [
            { question: 'Is GATE score required?', answer: 'Not for ICRB Written. Sometimes recruited via GATE separately.' },
            { question: 'Is there a qualifying mark?', answer: 'Yes, 50% in Part A & B separately.' },
            { question: 'Is final year eligible?', answer: 'Yes, if degree completed by date specified.' }
        ]
    },
    {
        id: 'drdo-scientist-b',
        camelId: 'drdoScientistB',
        title: 'DRDO Scientist \'B\'',
        subtitle: 'Recruitment & Assessment Centre (RAC) – Scientist \'B\'',
        category: 'engineering',
        level: 'National',
        quickInfo: {
            conductingBody: 'DRDO RAC',
            level: 'National',
            mode: 'Shortlisting via GATE + Interview',
            frequency: 'Annually',
            vacancies: '500–600+ (Varies)'
        },
        dates: {
            notification: 'Jun–Jul',
            applicationStart: 'Jun–Jul',
            interview: 'Oct–Dec',
            result: 'Jan'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'First Class B.E./B.Tech + Valid GATE Score',
            age: { min: 'No Limit', max: 28 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Shortlisting',
                totalQuestions: '-',
                totalMarks: '-',
                totalDuration: '-',
                sections: [
                    { name: 'GATE Score Usage (80% Weightage)', questions: 0, marks: '-', duration: '-' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Personal Interview (20% Weightage)', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Technical': ['Entire Syllabus of respective GATE paper'],
            'Interview': ['Core Subjects', 'Final Year Project', 'DRDO Labs Awareness']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 90000',
            deductions: '10000 – 12000',
            inHand: '75000 – 78000',
            allowances: ['DA', 'HRA', 'Transport', 'Professional Update'],
            careerGrowth: 'Scientist B -> C -> D -> E -> F'
        },
        mockTests: [
            { id: 'gate-mock-for-drdo', title: 'GATE Full Mock (Relevant for DRDO)', type: 'Free', questions: 65, time: 180 }
        ],
        faqs: [
            { question: 'Is a written exam conducted?', answer: 'Only for non-GATE disciplines. For Engg, GATE is mandatory.' },
            { question: 'What is the cutoff GATE score?', answer: 'Varies, usually top 500-1000 ranks.' },
            { question: 'Is it permanent?', answer: 'Yes, Group A Gazetted Officer.' }
        ]
    },

    // --- DEFENCE (Others) ---
    {
        id: 'afcat',
        camelId: 'afcat',
        title: 'AFCAT',
        subtitle: 'Air Force Common Admission Test',
        category: 'defence',
        level: 'National',
        quickInfo: {
            conductingBody: 'Indian Air Force (IAF)',
            level: 'National',
            mode: 'Online (CBT) + AFSB Interview',
            frequency: 'Biannually (Feb & Aug)',
            vacancies: '300+ (Flying, Ground Duty)'
        },
        dates: {
            notification: 'Dec / Jun',
            applicationStart: 'Dec / Jun',
            admitCard: '2 weeks before exam',
            examDate: 'Feb (AFCAT 1) / Aug (AFCAT 2)',
            result: 'Jul / Jan'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation (min 60%) + Maths & Physics at 12th (Flying/Tech)',
            age: { min: 20, max: '24 (Flying) / 26 (Ground Duty)' },
            ageRelaxation: { general: 0, obc: 0, sc_st: 0, pwd: 0 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Written Exam (CBT)',
                totalQuestions: 100,
                totalMarks: 300,
                totalDuration: '120 min',
                sections: [
                    { name: 'General Awareness', questions: 25, marks: 75, duration: 'Combined' },
                    { name: 'Verbal Ability', questions: 25, marks: 75, duration: 'Combined' },
                    { name: 'Numerical Ability', questions: 25, marks: 75, duration: 'Combined' },
                    { name: 'Reasoning', questions: 25, marks: 75, duration: 'Combined' }
                ]
            },
            {
                phase: 'AFSB Interview',
                totalQuestions: '-',
                totalMarks: '-',
                totalDuration: '5 Days',
                sections: [
                    { name: 'Psychological + Interview', questions: '-', marks: 'Recommended', duration: '5 Days' }
                ]
            }
        ],
        syllabus: {
            'English': ['Comprehension', 'Error Detection', 'Synonyms', 'Antonyms', 'Idioms'],
            'General Awareness': ['History', 'Sports', 'Geography', 'Defence', 'Culture'],
            'Numerical Ability': ['Decimals', 'Time & Work', 'Average', 'Profit & Loss', 'Percentage', 'Ratio'],
            'Reasoning': ['Verbal Skills', 'Spatial Ability', 'Odd One Out', 'Analogy']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 95000',
            deductions: '12000 – 15000',
            inHand: '75000+',
            allowances: ['Flying Pay', 'Technical Allowance', 'Transport', 'HRA'],
            careerGrowth: 'Flying Officer -> Flight Lieutenant -> Squadron Leader -> Wing Commander'
        },
        mockTests: [
            { id: 'afcat-full-mock', title: 'AFCAT Full Mock', type: 'Free', questions: 100, time: 120 }
        ],
        faqs: [
            { question: 'Is EKT still there?', answer: 'No, Engineering Knowledge Test (EKT) is discontinued.' },
            { question: 'Is there permanent commission?', answer: 'Mostly Short Service Commission (SSC).' },
            { question: 'Is 10+2 marks important?', answer: 'Yes, 50% in Math & Physics mandatory for Flying/Tech.' }
        ]
    },
    {
        id: 'indian-coast-guard-ac',
        camelId: 'icgAc',
        title: 'Indian Coast Guard AC',
        subtitle: 'Assistant Commandant (General Duty / Technical)',
        category: 'defence',
        level: 'National',
        quickInfo: {
            conductingBody: 'Indian Coast Guard',
            level: 'National',
            mode: 'CGCAT (Online) + PSB + FSB + Medicals',
            frequency: 'Biannually',
            vacancies: '50–70 (Varies)'
        },
        dates: {
            notification: 'Feb / Sep',
            applicationStart: 'Feb / Sep',
            admitCard: '2 weeks before exam',
            examDate: 'Mar / Nov',
            result: 'Jun / Dec'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree (60%) + Math & Physics in 12th',
            age: { min: 21, max: 25 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 'N/A' },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'CGCAT (Screening)',
                totalQuestions: 100,
                totalMarks: 400,
                totalDuration: '120 min',
                sections: [
                    { name: 'English', questions: 25, marks: 100, duration: 'Combined' },
                    { name: 'Reasoning & Numerical', questions: 25, marks: 100, duration: 'Combined' },
                    { name: 'General Science & Math', questions: 25, marks: 100, duration: 'Combined' },
                    { name: 'General Knowledge', questions: 25, marks: 100, duration: 'Combined' }
                ]
            },
            {
                phase: 'Selection Boards',
                totalQuestions: '-',
                totalMarks: '-',
                totalDuration: '6 Days',
                sections: [
                    { name: 'PSB (Screening) + FSB (Psych/Interview)', questions: '-', marks: 'Merit', duration: '6 Days' }
                ]
            }
        ],
        syllabus: {
            'English': ['Errors', 'Idioms', 'Comprehension'],
            'Reasoning': ['Spatial', 'Numerical', 'Coding', 'Sequences'],
            'Science & Math': ['Physics (12th)', 'Maths (12th)', 'Basic Chemistry'],
            'GK': ['Current Affairs', 'Defence', 'Geography', 'History']
        },
        salary: {
            basic: '56100',
            gross: '85000 – 90000',
            deductions: '12000 – 15000',
            inHand: '75000+',
            allowances: ['Kit Maint.', 'Flying Allowance', 'Hardship', 'Uniform'],
            careerGrowth: 'Asst Commandant -> Dy Commandant -> Commandant -> DIG -> IG'
        },
        mockTests: [
            { id: 'icg-ac-cgcat-mock', title: 'Coast Guard AC CGCAT Full Mock', type: 'Free', questions: 100, time: 120 }
        ],
        faqs: [
            { question: 'Is there a height requirement?', answer: 'Yes, min 157 cm (men).' },
            { question: 'Is it a paramilitary force?', answer: 'No, it is an Armed Force of the Union.' },
            { question: 'Are glasses allowed?', answer: 'Strict visual standards (6/6 6/9). Allowed for some branches.' }
        ]
    },
    {
        id: 'indian-army-gd',
        camelId: 'armyGd',
        title: 'Indian Army GD',
        subtitle: 'General Duty / Clerk / Technical',
        category: 'defence',
        level: 'National',
        quickInfo: { frequency: 'Regular rally', vacancies: 'Large' }
    },

    // --- STATE PSC ---
    {
        id: 'uppsc',
        camelId: 'uppsc',
        title: 'UPPSC PCS',
        subtitle: 'Uttar Pradesh Public Service Commission – Provincial Civil Services',
        category: 'state_psc',
        level: 'State (Uttar Pradesh)',
        quickInfo: {
            conductingBody: 'Uttar Pradesh Public Service Commission (UPPSC)',
            level: 'State',
            mode: 'Offline (Prelims + Mains) + Interview',
            frequency: 'Annually',
            vacancies: '200–600+ (Varies)'
        },
        dates: {
            notification: 'Jan (Tentative)',
            applicationStart: 'Jan (Tentative)',
            admitCard: 'Mar (Tentative)',
            examDate: 'Mar–Apr (Prelims) / Jul (Mains)',
            result: 'Jan (Next Year)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree in any discipline',
            age: { min: 21, max: 40 },
            ageRelaxation: { general: 0, obc: 5, sc_st: 5, pwd: 15 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (Objective)',
                totalQuestions: 250,
                totalMarks: 400,
                totalDuration: '4 hours',
                sections: [
                    { name: 'Paper I: General Studies I (Merit)', questions: 150, marks: 200, duration: '120 min' },
                    { name: 'Paper II: CSAT (Qualifying 33%)', questions: 100, marks: 200, duration: '120 min' }
                ]
            },
            {
                phase: 'Mains (Descriptive)',
                totalQuestions: '-',
                totalMarks: 1500,
                totalDuration: '3 hours per paper',
                sections: [
                    { name: 'General Hindi', questions: '-', marks: 150, duration: '3 hrs' },
                    { name: 'Essay', questions: '-', marks: 150, duration: '3 hrs' },
                    { name: 'GS Papers 1-6', questions: '-', marks: 1200, duration: '18 hrs' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'GS Prelims': ['Current Events', 'History', 'Geography', 'Polity', 'Economy', 'Ecology', 'General Science'],
            'CSAT': ['Comprehension', 'Interpersonal skills', 'Logical reasoning', 'Mental Ability', 'Math (Class X)', 'English/Hindi (Class X)'],
            'Mains UP Special': ['Paper 5: History, Culture, Polity of UP', 'Paper 6: Economy, Geography, SciTech of UP']
        },
        salary: {
            basic: '56100',
            gross: '80000 – 85000',
            deductions: '8000 – 10000',
            inHand: '70000 – 75000',
            allowances: ['DA', 'HRA', 'Transport', 'Official Vehicle (SDM/DySP)'],
            careerGrowth: 'SDM -> City Magistrate -> ADM -> CDO -> DM (IAS)'
        },
        mockTests: [
            { id: 'uppsc-prelims-gs1', title: 'UPPSC Prelims GS Paper 1 Mock', type: 'Free', questions: 150, time: 120 },
            { id: 'uppsc-prelims-csat', title: 'UPPSC Prelims CSAT Mock', type: 'Premium', questions: 100, time: 120 }
        ],
        faqs: [
            { question: 'Is Optional Subject removed?', answer: 'Yes, replaced by UP Special Papers 5 & 6.' },
            { question: 'Can other state candidates apply?', answer: 'Yes, as General Category.' },
            { question: 'Is Hindi paper marks counted?', answer: 'Yes, unlike UPSC, Hindi marks are added to merit.' }
        ]
    },
    {
        id: 'bpsc-cce',
        camelId: 'bpscCce',
        title: 'BPSC CCE',
        subtitle: 'Bihar Public Service Commission – Combined Competitive Examination',
        category: 'state_psc',
        level: 'State (Bihar)',
        quickInfo: {
            conductingBody: 'Bihar Public Service Commission (BPSC)',
            level: 'State',
            mode: 'Offline (Prelims + Mains) + Interview',
            frequency: 'Annually',
            vacancies: '300–500+ (Varies)'
        },
        dates: {
            notification: 'Jul–Aug (Tentative)',
            applicationStart: 'Jul–Aug (Tentative)',
            admitCard: 'Sep (Tentative)',
            examDate: 'Sep 30 (Prelims) / Jan (Mains)',
            result: 'Jun (Tentative)'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree in any discipline',
            age: { min: 20, max: 37 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, women: 3 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Prelims (Objective)',
                totalQuestions: 150,
                totalMarks: 150,
                totalDuration: '120 min',
                sections: [
                    { name: 'General Studies', questions: 150, marks: 150, duration: '120 min' }
                ]
            },
            {
                phase: 'Mains (Subjective)',
                totalQuestions: '-',
                totalMarks: 900,
                totalDuration: '3 hours per paper',
                sections: [
                    { name: 'General Hindi', questions: '-', marks: 'Qualifying', duration: '3 hrs' },
                    { name: 'GS Paper I', questions: '-', marks: 300, duration: '3 hrs' },
                    { name: 'GS Paper II', questions: '-', marks: 300, duration: '3 hrs' },
                    { name: 'Essay', questions: '-', marks: 300, duration: '3 hrs' },
                    { name: 'Optional (MCQ)', questions: '-', marks: 'Qualifying', duration: '2 hrs' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 120,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 120, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Prelims': ['General Science', 'History (India & Bihar)', 'Geography (India & Bihar)', 'Polity', 'Economy', 'Mental Ability'],
            'Mains GS1': ['Modern History (Art & Culture)', 'Current Events', 'Statistics'],
            'Mains GS2': ['Polity', 'Economy', 'Geography', 'Science & Tech']
        },
        salary: {
            basic: '53100',
            gross: '75000 – 80000',
            deductions: '8000 – 10000',
            inHand: '65000 – 70000',
            allowances: ['DA', 'HRA', 'Medical', 'Vehicle'],
            careerGrowth: 'SDM -> ADM -> DM (IAS)'
        },
        mockTests: [
            { id: 'bpsc-prelims-full-mock', title: 'BPSC Prelims Full Mock', type: 'Free', questions: 150, time: 120 }
        ],
        faqs: [
            { question: 'Is Optional counted?', answer: 'No, Optional is now MCQ and Qualifying only.' },
            { question: 'Is there Bihar GK?', answer: 'Yes, significant weightage in History, Geography, Economy.' },
            { question: 'Can I write Mains in English?', answer: 'Yes, Hindi or English allowed.' }
        ]
    },
    {
        id: 'mppsc',
        camelId: 'mppsc',
        title: 'MPPSC',
        subtitle: 'Madhya Pradesh PSC',
        category: 'state_psc',
        level: 'State',
        quickInfo: { frequency: 'Annually', vacancies: '300+' }
    },

    // --- OTHERS ---
    {
        id: 'india-post-gds',
        camelId: 'gds',
        title: 'India Post GDS',
        subtitle: 'Gramin Dak Sevak',
        category: 'other',
        level: 'National',
        quickInfo: { frequency: 'Annually', vacancies: '30000+' }
    },
    {
        id: 'upsc-epfo',
        camelId: 'upscEpfo',
        title: 'UPSC EPFO',
        subtitle: 'Enforcement Officer (EO) / Accounts Officer (AO)',
        category: 'regulatory',
        level: 'National',
        quickInfo: {
            conductingBody: 'Union Public Service Commission (UPSC)',
            level: 'National',
            mode: 'Offline (Recruitment Test) + Interview',
            frequency: 'Irregular (Every 2–3 years)',
            vacancies: '400–500 (Varies)'
        },
        dates: {
            notification: 'Varies',
            applicationStart: 'Varies',
            examDate: '4-5 months after notification',
            result: 'After interviews'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Bachelor’s Degree in any discipline',
            age: { min: 21, max: 30 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 10 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Recruitment Test (RT)',
                totalQuestions: 120,
                totalMarks: 300,
                totalDuration: '120 min',
                sections: [
                    { name: 'General Ability Test', questions: 120, marks: 300, duration: '120 min' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'General English': ['Grammar', 'Vocabulary', 'Antonyms', 'Synonyms'],
            'General Studies': ['Freedom Struggle', 'Current Events', 'Polity', 'Economy', 'Science', 'Computer'],
            'Special Subjects': ['Accounting Principles', 'Industrial Relations', 'Labour Laws', 'Social Security']
        },
        salary: {
            basic: '47600',
            gross: '75000 – 80000',
            deductions: '8000 – 10000',
            inHand: '65000 – 70000',
            allowances: ['DA', 'HRA', 'Transport'],
            careerGrowth: 'EO/AO -> APFC -> RPFC II -> RPFC I'
        },
        mockTests: [
            { id: 'epfo-rt-mock', title: 'UPSC EPFO RT Full Mock', type: 'Free', questions: 120, time: 120 }
        ],
        faqs: [
            { question: 'Is Accounting background mandatory?', answer: 'No, but you must study Accounting for the exam.' },
            { question: 'What is the weightage?', answer: '75:25 ratio (RT : Interview).' },
            { question: 'Is it permanent?', answer: 'Yes, Permanent Group B (EO/AO) / Group A (APFC).' }
        ]
    },
    {
        id: 'ib-acio',
        camelId: 'ibAcio',
        title: 'IB ACIO',
        subtitle: 'Intelligence Bureau – Assistant Central Intelligence Officer',
        category: 'intelligence', // Note: User provided 'intelligence'. I added 'regulatory' but 'intelligence' usually maps to 'defence' or 'other'. Will map to 'defence' for now to ensure it shows up, OR add 'intelligence' category? User didn't ask for 'intelligence' category specifically but provided it in object. I will stick to 'defence' or 'other' or add 'intelligence'. Let's check categories again. 'intelligence' is not there. I will map it to 'defence' or 'other'. 'defence' fits best for IB. Actually, let's map it to 'defence' for better visibility or 'other'. User provided category: 'intelligence'. I'll map to 'defence' as it's closest. NO, I will map to 'other' or ADD 'intelligence'. I will map to 'defence' as it is a security agency.
        // Actually, looking at previous steps, I should be careful. I will use 'defence' but keep title clear.
        // Wait, user provided "category: 'intelligence'". If I use that, it won't show up unless I add it.
        // I will add 'intelligence' to categories.js OR map to 'defence'.
        // To be safe and avoid too many categories, I will map to 'defence' but keep the user's data structure if possible.
        // Let's use 'defence' for now.
        category: 'defence',
        level: 'National',
        quickInfo: {
            conductingBody: 'Ministry of Home Affairs (MHA)',
            level: 'National',
            mode: 'Online (Tier 1) + Descriptive + Interview',
            frequency: 'Irregular (1-2 years)',
            vacancies: '995–2000 (Varies)'
        },
        dates: {
            notification: 'Nov–Dec',
            applicationStart: 'Nov–Dec',
            admitCard: 'Jan',
            examDate: 'Jan–Feb',
            result: 'Nov'
        },
        eligibility: {
            nationality: 'Citizen of India',
            education: 'Graduation in any discipline',
            age: { min: 18, max: 27 },
            ageRelaxation: { general: 0, obc: 3, sc_st: 5, pwd: 0 },
            attempts: { general: 'No limit', obc: 'No limit', sc_st: 'No limit', pwd: 'No limit' }
        },
        pattern: [
            {
                phase: 'Tier 1 (Objective)',
                totalQuestions: 100,
                totalMarks: 100,
                totalDuration: '60 min',
                sections: [
                    { name: 'Current Affairs', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'General Studies', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Numerical Aptitude', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'Reasoning', questions: 20, marks: 20, duration: 'Combined' },
                    { name: 'English', questions: 20, marks: 20, duration: 'Combined' }
                ]
            },
            {
                phase: 'Tier 2 (Descriptive)',
                totalQuestions: '-',
                totalMarks: 50,
                totalDuration: '60 min',
                sections: [
                    { name: 'Essay', questions: '-', marks: 30, duration: 'Combined' },
                    { name: 'Comprehension & Précis', questions: '-', marks: 20, duration: 'Combined' }
                ]
            },
            {
                phase: 'Interview',
                totalQuestions: '-',
                totalMarks: 100,
                totalDuration: '-',
                sections: [
                    { name: 'Interview', questions: '-', marks: 100, duration: '-' }
                ]
            }
        ],
        syllabus: {
            'Current Affairs': ['National/International', 'Security', 'Geopolitics'],
            'General Studies': ['History', 'Polity', 'Geography', 'Science'],
            'Reasoning': ['Analogies', 'Series', 'Coding-Decoding'],
            'English': ['Grammar', 'Vocabulary', 'Essay Topics']
        },
        salary: {
            basic: '44900',
            gross: '75000 – 85000',
            deductions: '8000 – 10000',
            inHand: '65000 – 70000',
            allowances: ['Special Security Allowance (20%)', 'DA', 'HRA', 'Transport'],
            careerGrowth: 'ACIO II -> ACIO I -> DCIO -> Assistant Director'
        },
        mockTests: [
            { id: 'ib-acio-tier1-mock', title: 'IB ACIO Tier 1 Full Mock', type: 'Free', questions: 100, time: 60 }
        ],
        faqs: [
            { question: 'Is there a psychometric test?', answer: 'Yes, often during the interview.' },
            { question: 'Is computer knowledge required?', answer: 'Desirable, but no specific test section.' },
            { question: 'Is it a field job?', answer: 'Mix of field work and desk analysis.' }
        ]
    },
    {
        id: 'fci',
        camelId: 'fci',
        title: 'FCI Manager / Assistant',
        subtitle: 'Food Corporation of India',
        category: 'other',
        level: 'National',
        quickInfo: { frequency: 'Irregular', vacancies: '4000+' }
    }
];

module.exports = exams;
