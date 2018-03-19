'use strict';

const mongoose = require('mongoose');

// const Car = require('.models/car.js');

const suvSchema = new mongoose.Schema({
  car: [mongoose.model('Car').schema],
});


let Suv = mongoose.model('Suv', suvSchema);
module.exports = Suv;