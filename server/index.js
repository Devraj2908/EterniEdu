const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
    // If already connected, return
    if (mongoose.connection.readyState === 1) {
        return;
    }

    // If currently connecting, wait for it
    if (mongoose.connection.readyState === 2) {
        console.log('⏳ Waiting for persistent connection attempt...');
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Database connection timeout while waiting for existing attempt'));
            }, 10000);

            mongoose.connection.once('connected', () => {
                clearTimeout(timeout);
                resolve();
            });
            mongoose.connection.once('error', (err) => {
                clearTimeout(timeout);
                reject(err);
            });
        });
    }

    try {
        console.log('⏳ Connecting to MongoDB Atlas...');
        console.time('DB Connection');

        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 15000,
            connectTimeoutMS: 15000,
        });

        console.timeEnd('DB Connection');
        console.log('✅ Connected to MongoDB Atlas');
    } catch (err) {
        console.timeEnd('DB Connection');
        console.error('❌ MongoDB Connection Error:', err.name, '-', err.message);
        throw err; // Re-throw to be handled by the middleware
    }
};

// Initial connection attempt
connectDB().catch(err => {
    console.error('Initial DB connection failed. Middleware will retry.');
});

// Health Check & DB Status
app.get('/api/health', (req, res) => {
    const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
    res.json({
        status: 'ok',
        database: states[mongoose.connection.readyState],
        timestamp: new Date().toISOString(),
        env: process.env.VERCEL ? 'production' : 'development'
    });
});

// Middleware to check/establish DB connection
app.use(async (req, res, next) => {
    // Skip for health, login, register, me or if it's not an API route (though vercel.json handles this)
    if (req.url.includes('/api/health')) return next();

    try {
        await connectDB();
        next();
    } catch (err) {
        console.error('Middleware DB Error:', err.message);
        return res.status(530).json({
            message: 'Database connection is currently down. If you just whitelisted your IP, please wait 30 seconds and refresh.',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});

// Middleware for logging request time
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} - ${duration}ms`);
    });
    next();
});

// register Route
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, grade } = req.body;

        const userExists = await User.findOne({ email }).select('_id').lean();
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const user = new User({ name, email, password, grade });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user._id, name, email, grade } });
    } catch (err) {
        console.error('Register error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// login Route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Use lean() for faster query and less memory overhead
        const user = await User.findOne({ email }).lean();

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Use bcrypt directly since we used lean()
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                grade: user.grade
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get User Profile Route
app.get('/api/me', async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Use lean() for faster profile fetch
        const user = await User.findById(decoded.id).select('-password').lean();
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
});

const PORT = process.env.PORT || 5000;
if (!process.env.VERCEL) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
