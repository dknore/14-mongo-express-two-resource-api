'use strict';

const Cars = require('.models/car');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');

let suvSchema = new mongoose.Schema({
    items: [itemSchema]
  });
  
  suvSchema.methods.total = function() {
    let total = 0;
    this..forEach(item => {
      total += item.cost;
    });
    return total;
  }
  
  let Item = mongoose.model('Item', itemSchema);
  let Cart = mongoose.model('Cart', cartSchema);
  
  let coke = new Item({name: 'Coke', cost: 199});
  let noodles = new Item({name: 'Noodles', cost: 500});
  let beef = new Item({name: 'Brocolli and Beef', cost: 700});
  
  Promise.all([
    coke.save(),
    noodles.save(),
    beef.save(),
  ])
  .then(items => {
    let cart = new Cart({items: items});
    return cart.save()
  })
  .then(savedCart => {
    console.log("Cart:", savedCart);
    console.log("Total cost:", savedCart.total());
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log('Error', err);
    mongoose.disconnect();
  });

  let SUV = mongoose.model('SUV', suvSchema);
  module.exports = SUV;