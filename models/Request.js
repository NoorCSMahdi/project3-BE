const mongoose = require('mongoose');

// Request Schema
const requestSchema = mongoose.Schema({
  request_exhibitionName: String,
  request_message: String,
  request_CR: String,
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

// Request Model
const Request = mongoose.model("Request", requestSchema);

// Export
module.exports = {Request};