const express = require('express');
const router = express.Router();
const VisionBoard = require('../models/VisionBoard');
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
    const { caption } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    const item = await VisionBoard.create({ imageUrl, caption });
    res.status(201).json(item);
});

router.get('/', protect, async (req, res) => {
    const items = await VisionBoard.find({}).sort({ order: 1 });
    res.json(items);
});

router.put('/reorder', protect, async (req, res) => {
    const { items } = req.body; // Array of { id, order }
    for (let item of items) {
        await VisionBoard.findByIdAndUpdate(item.id, { order: item.order });
    }
    res.json({ message: 'Vision board reordered' });
});

router.delete('/:id', protect, async (req, res) => {
    const item = await VisionBoard.findById(req.params.id);
    if (item) {
        await item.deleteOne();
        res.json({ message: 'Item removed' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

module.exports = router;
