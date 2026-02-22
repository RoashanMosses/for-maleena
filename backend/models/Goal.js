const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    targetDate: { type: Date },
    progress: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Goal', GoalSchema);
