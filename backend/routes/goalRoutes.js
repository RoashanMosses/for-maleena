const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, async (req, res) => {
    const { title, targetDate, progress } = req.body;
    const goal = await Goal.create({ title, targetDate, progress });
    res.status(201).json(goal);
});

router.get('/', protect, async (req, res) => {
    const goals = await Goal.find({}).sort({ targetDate: 1 });
    res.json(goals);
});

router.put('/:id', protect, async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (goal) {
        goal.title = req.body.title || goal.title;
        goal.targetDate = req.body.targetDate || goal.targetDate;
        goal.progress = req.body.progress !== undefined ? req.body.progress : goal.progress;
        const updatedGoal = await goal.save();
        res.json(updatedGoal);
    } else {
        res.status(404).json({ message: 'Goal not found' });
    }
});

router.delete('/:id', protect, async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (goal) {
        await goal.deleteOne();
        res.json({ message: 'Goal removed' });
    } else {
        res.status(404).json({ message: 'Goal not found' });
    }
});

module.exports = router;
