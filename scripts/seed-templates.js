require('dotenv').config();
const mongoose = require('mongoose');
const QuizTemplate = require('../models/QuizTemplate');
const quizTemplates = require('../data/quizTemplates');

const seedTemplates = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for Seeding');

        // Clear existing templates
        await QuizTemplate.deleteMany({});
        console.log('Cleared existing templates');

        // Insert new templates
        await QuizTemplate.insertMany(quizTemplates);
        console.log(`Seeded ${quizTemplates.length} quiz templates successfully`);

        process.exit();
    } catch (error) {
        console.error('Seeding Error:', error);
        process.exit(1);
    }
};

seedTemplates();
