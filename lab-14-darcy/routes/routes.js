import { Z_STREAM_END } from 'zlib';

'use strict';

const express = require('express');
const router = express.Router();

const Car = require('../models/car.js');

app.get('/owner', (req, res) => {

    if(req.query.id) {
        
        Team.find()
    }
})

app.post('')






router.get('/', (req, res) => {
  // Get One
  if (req.query.id) {
    Car.findById(req.query.id)
      .then((results) => {
        res.send(results)
          .catch((err) => {
            res.err(err);
          });
      });
    // Get All
  } 
  else {
    Car.find()
      .then((results) => {
        res.send(results)
          .catch((err) => {
            res.err(err);
          });
      });

  }
});

router.put('/', (req, res) => {
// Update car make, model, OR color
  Car.findByIdAndUpdate(req.query.id)
    .then((results) => {
      if (req.body.make) {
        results.make = req.body.make;
      }
      if (req.body.model) {
        results.model = req.body.model;
      }
      if (req.body.color) {
        results.color = req.body.color;
      }
      results.save((err, savedCar) => {
        res.send(savedCar);
      })
        .catch((err) => {
          res.err(err);
        });
    });
});

router.post('/', (req, res) => {
  // Add new Car
  let car = new Car({
    make: req.body.make,
    model: req.body.model,
    color: req.body.color
  });
  car.save((err, savedCar) => {
    res.send(savedCar);
  });
});

router.delete('/', (req, res) => {
// Delete one car
  if (req.query.id) {
    Car.findByIdAndRemove(req.query.id)
      .then((results) => {
        res.status(204).send(results)
          .catch((err) => {
            res.err(err);
          });
      });
    // delete all cars
  } else {
    Car.remove()
      .then((results) => {
        res.status(204).send(results);
      })
      .catch((err) => {
        res.err(err);
      });
  }
});

module.exports = router;
