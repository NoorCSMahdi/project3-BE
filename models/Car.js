const mongoose = require('mongoose');

// Car Schema
const carSchema = mongoose.Schema({
  car_name: String,
  car_company: String,
  car_model: String,
  car_price: Number,
  car_description: String,
  car_avatar: String,
  Cartype: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cartype'
  }]
})

// Car Model
const Car = mongoose.model("Car", carSchema);

// Export
module.exports = {Car};