const express = require('express');
const cors = require('cors');
const compression = require('compression');
const exams = require('./data/exams');
const categories = require('./data/categories');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for Speed & Security
app.use(compression()); // Compress responses (gzip)

// CORS Configuration
// Allow requests from Vercel Frontend
const corsOptions = {
    origin: process.env.CLIENT_URL || '*', // Set CLIENT_URL in Render to your Vercel URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use(express.json());



// API Routes
app.get('/api/exams', (req, res) => {
    // Implement Caching Headers (Cache for 10 minutes)
    // This tells the browser/CDN to cache this response
    const { category, q } = req.query;
    let filtered = exams;

    if (category && category !== 'all') {
        filtered = filtered.filter(e => e.category === category);
    }

    if (q) {
        const lowerQ = q.toLowerCase();
        filtered = filtered.filter(e =>
            e.title.toLowerCase().includes(lowerQ) ||
            e.subtitle.toLowerCase().includes(lowerQ)
        );
    }

    // Cache for 10 minutes
    res.set('Cache-Control', 'public, max-age=600');
    res.json(filtered);
});

app.get('/api/exams/:id', (req, res) => {
    const exam = exams.find(e => e.id === req.params.id);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });

    // Cache individual exam for 1 hour
    res.set('Cache-Control', 'public, max-age=3600');
    res.json(exam);
});

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
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
