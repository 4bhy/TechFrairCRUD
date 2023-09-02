const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
  },
  primaryImage: {
    type: String, // You can store the image URL
    required: true,
  },
  secondaryImages: [{
    type: String, // Store multiple image URLs in an array
  }],
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
