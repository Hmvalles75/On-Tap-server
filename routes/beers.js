const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get('/api/beers', (req, res) => {
  queries.beers.getAll().then(beers => {
    res.json(beers);
  });
});

router.get('/api/beers/:id', (req, res) => {
  queries.beers.getOne(req.params.id).then(beer => {
    res.json(beer);
  });
});

module.exports = router;
