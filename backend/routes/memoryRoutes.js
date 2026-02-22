const express = require('express');
const router = express.Router();
const Memory = require('../models/Memory');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, async (req, res) => {
    const { content } = req.body;
    const memory = await Memory.create({ userId: req.user._id, content });
    res.status(201).json(memory);
});

router.get('/', protect, async (req, res) => {
    const memories = await Memory.find({});
    res.json(memories);
});

router.get('/random', protect, async (req, res) => {
    const count = await Memory.countDocuments();
    const random = Math.floor(Math.random() * count);
    const memory = await Memory.findOne().skip(random);
    res.json(memory);
});

module.exports = router;
