const mongoose = require('mongoose');

const drawingSchema = new mongoose.Schema({
  // Define your schema fields based on your drawing data
  // For example: { data: String, timestamp: { type: Date, default: Date.now } }
});

module.exports = mongoose.model('Drawing', drawingSchema);
