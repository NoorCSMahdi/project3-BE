const mongoose = require('mongoose');

// Type Schema
const CartypeSchema = mongoose.Schema({
  type_name: String,
})

// Car Model
const Cartype = mongoose.model("Cartype", CartypeSchema);

// Export
module.exports = {Cartype};