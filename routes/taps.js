const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get('/api/restaurants/:id/beers', (req, res) => {
  queries.taps.getAllBeersByRestId(req.params.id).then(beers => {
    res.json(
      beers.map(beer => {
        return beer.beer;
      })
    );
  });
});

module.exports = router;
