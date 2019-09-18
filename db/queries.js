const knex = require('./knex');

module.exports = {
  restaurants: {
    getAll: function() {
      return knex('restaurants');
    },
    getOne: function(id) {
      //SELECT * FROM restaurants WHERE id = id
      return knex('restaurants').where('id', id);
    }
  },
  beers: {
    getAll: function() {
      return knex('beers');
    },
    getOne: function(id) {
      //SELECT * FROM beers WHERE id = id
      return knex('beers').where('id', id);
    }
  },
  taps: {
    getAllBeersByRestId: function(restaurant_id) {
      return knex('taps')
        .join('beers', 'beers.id', 'taps.beer')
        .select(['taps.beer as id', 'beers.beer_name as name'])
        .where('restaurant', restaurant_id);
    }
  }
};
