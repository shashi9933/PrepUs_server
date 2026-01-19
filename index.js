require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');
// const exams = require('./data/exams'); // Deprecated: Moved to DB
const Exam = require('./models/Exam');
const categories = require('./data/categories');
const adminRoutes = require('./routes/admin');
const testRoutes = require('./routes/tests');
const examRoutes = require('./routes/exams');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');

const app = express();
const PORT = process.env.PORT || 5000;

// Automation: Cron Job
const cron = require('node-cron');
const { runDailyScheduler } = require('./utils/dailyScheduler');

// Schedule: Run every 10 minutes (For Demo/Dev)
// In Prod: '0 0 * * *' (Midnight)
cron.schedule('*/10 * * * *', () => {
    runDailyScheduler();
});

// Run once on startup for dev convenience (Optional)
// runDailyScheduler(); 

// Connect to MongoDB
const { ensureIndexes } = require('./utils/examDatabaseManager');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('✅ MongoDB Connected');
        // Create performance indexes on startup
        await ensureIndexes();
    })
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Middleware for Speed & Security
app.use(compression()); // Compress responses (gzip)

// CORS Configuration - MUST set CLIENT_URL in production
const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:5173', // Vite default dev port
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow credentials (cookies, tokens)
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
// app.use((req, res, next) => {
//    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
//    next();
// });

app.use(express.json());

// Request Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
// Admin Routes
app.use('/api/admin', adminRoutes);

// Test Routes
app.use('/api/tests', testRoutes);

// Exam Routes (NEW - Includes syllabus endpoint)
app.use('/api/exams', examRoutes);

// Auth Routes
app.use('/api/auth', authRoutes);

// Analytics Routes
app.use('/api/analytics', analyticsRoutes);

// API: Get All Categories
app.get('/api/categories', (req, res) => {
    // Cache for 1 hour
    res.set('Cache-Control', 'public, max-age=3600');
    res.json(categories);
});

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});



// Start Server
const server = app.listen(PORT, async () => {
    console.log(`✅ Server LISTENING on port ${PORT}`);
});

server.on('error', (err) => {
    console.error('❌ Server error:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
});
