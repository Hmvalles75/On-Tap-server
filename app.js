'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
//const db = require('./queries');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(allowCrossDomain);

const restaurants = require('./routes/restaurants');
const beers = require('./routes/beers');
const taps = require('./routes/taps');

app.use(cors());

app.use(restaurants);
app.use(beers);
app.use(taps);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
