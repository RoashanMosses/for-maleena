const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
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
    const { caption, year } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    const photo = await Gallery.create({ imageUrl, caption, year });
    res.status(201).json(photo);
});

router.get('/', protect, async (req, res) => {
    const { year } = req.query;
    const filter = year ? { year } : {};
    const photos = await Gallery.find(filter).sort({ createdAt: -1 });
    res.json(photos);
});

module.exports = router;
