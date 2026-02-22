const express = require('express');
const router = express.Router();
const Timeline = require('../models/Timeline');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'backend/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post('/', protect, upload.single('image'), async (req, res) => {
    const { title, description, eventDate } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    const milestone = await Timeline.create({ title, description, eventDate, imageUrl });
    res.status(201).json(milestone);
});

router.get('/', protect, async (req, res) => {
    const milestones = await Timeline.find({}).sort({ eventDate: 1 });
    res.json(milestones);
});

router.put('/:id', protect, async (req, res) => {
    const milestone = await Timeline.findById(req.params.id);
    if (milestone) {
        milestone.title = req.body.title || milestone.title;
        milestone.description = req.body.description || milestone.description;
        milestone.eventDate = req.body.eventDate || milestone.eventDate;
        const updatedMilestone = await milestone.save();
        res.json(updatedMilestone);
    } else {
        res.status(404).json({ message: 'Milestone not found' });
    }
});

router.delete('/:id', protect, async (req, res) => {
    const milestone = await Timeline.findById(req.params.id);
    if (milestone) {
        await milestone.deleteOne();
        res.json({ message: 'Milestone removed' });
    } else {
        res.status(404).json({ message: 'Milestone not found' });
    }
});

module.exports = router;
