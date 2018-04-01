'use strict';

const mongoose = require('mongoose');
const Car = require('./car.js');

const OwnerSchema = new mongoose.Schema({
  name: String,
  cars: { type: Schema.Types.ObjectId, ref: 'Car' },
});

OwnerSchema.methods.getCar = function() {
  return Car.find({carId: this._id});
};

let Owner = mongoose.model('Owner', OwnerSchema);
module.exports = Owner;