const mongoose = require('mongoose');

const exhibitionSchema = mongoose.Schema({
  exhibition_name: String,
  exhibition_description: String,
  exhibition_image: String,
  exhibition_rate: Number,
  exhibition_latitude: String,
  exhibition_longtude: String,
  exhibition_phoneNumber: Number,
  exhibition_emailAddress: String,
  working_days: [String], // Array to store the working days
  User: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  Car: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  }]
}, {
  timestamps: true // means createdAt and updatedAt
});

// Creating Model
const Exhibition = mongoose.model("Exhibition", exhibitionSchema);

// Export
module.exports = { Exhibition };