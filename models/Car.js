const mongoose = require('mongoose');

// Car Schema
const carSchema = mongoose.Schema({
  name: String,
  company: String,
  model: String,
  price: Number,
  description: String,
  avatar: String,
  Cartype: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cartype'
  }]
})

// Car Model
const Car = mongoose.model("Car", carSchema);

// Export
module.exports = {Car};