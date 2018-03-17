'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');

let carSchema = new mongoose.Schema({
  class: String,
  cost: Number,
});

let Car = mongoose.model('Car', carSchema);
module.exports = Car;