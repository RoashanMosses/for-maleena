const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');
const bcrypt = require('bcryptjs');

router.get('/profile', protect, async (req, res) => {
    const user = await User.findById(req.user._id).select('-passwordHash');
    res.json(user);
});

router.put('/profile', protect, async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.anniversaryDate = req.body.anniversaryDate || user.anniversaryDate;
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.passwordHash = await bcrypt.hash(req.body.password, salt);
        }
        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            anniversaryDate: updatedUser.anniversaryDate
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

router.get('/both', protect, async (req, res) => {
    const users = await User.find({}).select('name');
    res.json(users);
});

module.exports = router;
