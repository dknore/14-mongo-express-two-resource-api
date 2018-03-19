'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const carRouter = require('./routes/routes.js');

mongoose.connect('mongodb://localhost/cars');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/cars', carRouter);

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on http://localhost: ' + PORT);
});