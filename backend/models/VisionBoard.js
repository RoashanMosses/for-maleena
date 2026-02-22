const mongoose = require('mongoose');

const VisionBoardSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    caption: { type: String },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VisionBoard', VisionBoardSchema);
