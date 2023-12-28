const mongoose = require('mongoose');

const exhibitionSchema = mongoose.Schema({
  booking_status: String, // Status of the booking, e.g., "pending", "confirmed", etc.
  booking_time: Date, // Time for the test drive booking

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  },
}, {
  timestamps: true // means createdAt and updatedAt
});

// Creating Model
const Exhibition = mongoose.model("Exhibition", exhibitionSchema);

// Export
module.exports = { Exhibition };