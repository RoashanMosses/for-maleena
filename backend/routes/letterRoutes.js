const express = require('express');
const router = express.Router();
const Letter = require('../models/Letter');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, async (req, res) => {
    const { title, content } = req.body;
    const letter = await Letter.create({ userId: req.user._id, title, content });
    res.status(201).json(letter);
});

router.get('/', protect, async (req, res) => {
    const letters = await Letter.find({}).sort({ createdAt: -1 });
    res.json(letters);
});

router.get('/:id', protect, async (req, res) => {
    const letter = await Letter.findById(req.params.id);
    if (letter) {
        res.json(letter);
    } else {
        res.status(404).json({ message: 'Letter not found' });
    }
});

module.exports = router;
