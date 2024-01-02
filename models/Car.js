const mongoose = require('mongoose');
const Cartype = require("./Cartype")

// Car Schema
const carSchema = mongoose.Schema({
  car_name: String,
  car_company: String,
  car_model: String,
  car_price: Number,
  car_description: String,
  car_avatar: String,
  Cartype: {
    type: String,
    enum: ["City car", "Convertible", "Coupe", "Crossover", "CUV", "Electric vehicle", "Estate", "Hatchback", "Hybrid", "Luxury car", "Minivan", "MPV", "Pickup", "Sedan", "Sports car", "Supercar", "Utility vehicle", "Wagons"]
  },
  Exhibition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exhibition'
  }
}, {
  timestamps: true // means createdAt and updatedAt

})

// Car Model
const Car = mongoose.model("Car", carSchema);

// Export
module.exports = {Car};