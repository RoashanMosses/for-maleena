const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const memoryRoutes = require('./routes/memoryRoutes');
const timelineRoutes = require('./routes/timelineRoutes');
const letterRoutes = require('./routes/letterRoutes');
const goalRoutes = require('./routes/goalRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const visionBoardRoutes = require('./routes/visionBoardRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ourlovespace')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/memories', memoryRoutes);
app.use('/api/timeline', timelineRoutes);
app.use('/api/letters', letterRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/visionboard', visionBoardRoutes);
app.use('/api/users', userRoutes);

// Static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve frontend in production (optional, keeping it clean for now)
app.use(express.static(path.join(__dirname, '../frontend')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
