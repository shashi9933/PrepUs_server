const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_dev_key_123';

/**
 * Middleware to verify JWT token
 * Extracts token from Authorization header (Bearer token)
 * Adds user info to req.user
 */
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"

    if (!token) {
        console.warn('[AUTH] No token provided');
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // { id, phone }
        next();
    } catch (err) {
        console.error('[AUTH] Token verification failed:', err.message);
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};

/**
 * Optional token verification - continues even if no token
 * Useful for public endpoints that have optional auth
 */
const optionalAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
        } catch (err) {
            console.warn('[AUTH] Optional token verification failed:', err.message);
            // Continue anyway for optional endpoints
        }
    }
    next();
};

module.exports = { verifyToken, optionalAuth };
