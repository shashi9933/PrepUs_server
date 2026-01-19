// Canonical Quiz Definitions
const quizTemplates = [
    // --- Banking ---
    {
        _id: 'banking-quant-mixed',
        title: 'Quant Speed Test',
        examCategory: 'banking',
        topic: 'Quantitative Aptitude',
        difficulty: 'Mixed',
        questionCount: 15,
        duration: 20,
        tags: ['speed-math', 'data-interpretation']
    },
    {
        _id: 'banking-reasoning-puzzles',
        title: 'Puzzles & Seating Arrangement',
        examCategory: 'banking',
        topic: 'Reasoning Ability',
        difficulty: 'Hard',
        questionCount: 10,
        duration: 15,
        tags: ['puzzles']
    },
    {
        _id: 'banking-english-vocab',
        title: 'Vocabulary & Grammar',
        examCategory: 'banking',
        topic: 'English Language',
        difficulty: 'Medium',
        questionCount: 20,
        duration: 15,
        tags: ['vocab', 'grammar']
    },

    // --- SSC ---
    {
        _id: 'ssc-quant-advanced',
        title: 'Advanced Maths Drill',
        examCategory: 'ssc',
        topic: 'Quantitative Aptitude',
        difficulty: 'Hard',
        questionCount: 10,
        duration: 15,
        tags: ['geometry', 'trigonometry']
    },
    {
        _id: 'ssc-gk-static',
        title: 'Static GK Blaster',
        examCategory: 'ssc',
        topic: 'General Awareness',
        difficulty: 'Mixed',
        questionCount: 25,
        duration: 10,
        tags: ['static-gk']
    },

    // --- UPSC ---
    {
        _id: 'upsc-polity-basics',
        title: 'Indian Polity Essentials',
        examCategory: 'upsc',
        topic: 'Polity',
        difficulty: 'Medium',
        questionCount: 10,
        duration: 20,
        tags: ['polity', 'constitution']
    },
    {
        _id: 'upsc-csat-logical',
        title: 'CSAT Logical Reasoning',
        examCategory: 'upsc',
        topic: 'CSAT',
        difficulty: 'Mixed',
        questionCount: 15,
        duration: 25,
        tags: ['logic']
    }
];

module.exports = quizTemplates;
