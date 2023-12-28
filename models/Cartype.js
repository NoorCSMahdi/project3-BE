const mongoose = require('mongoose');

// Type Schema
const CartypeSchema = mongoose.Schema({
  name: String,
})

// Car Model
const Cartype = mongoose.model("Cartype", CartypeSchema);

// Export
module.exports = {Cartype};