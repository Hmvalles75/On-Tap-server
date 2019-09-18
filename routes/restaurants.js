const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get('/api/restaurants', (req, res) => {
  queries.restaurants.getAll().then(restaurants => {
    res.json(restaurants);
  });
});

router.get('/api/restaurants/:id', (req, res) => {
  const restaurantPromise = queries.restaurants.getOne(req.params.id);
  const beersPromise = queries.taps.getAllBeersByRestId(req.params.id);
  Promise.all([restaurantPromise, beersPromise]).then(results => {
    const restaurant = { ...results[0][0], beers: results[1] };
    res.json(restaurant);
  });
});

module.exports = router;
