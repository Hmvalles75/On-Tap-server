const RestaurantsService = require('../src/restaurants-service');
const knex = require('knex');

describe(`Restaurants service object`, function() {
  let db;
  let testRestaurants = [
    {
      restaurant_name: 'Rest1',
      street: '123 First St',
      telephone: '111-1111',
      hrs: '9a-9p'
    },
    {
      restaurant_name: 'Rest2',
      street: '234 Second St',
      telephone: '222-2222',
      hrs: '10a-10p'
    },
    {
      restaurant_name: 'Rest3',
      street: '345 Third St',
      telephone: '333-3333',
      hrs: '11a-11p'
    }
  ];

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
  });

  before(() => {
    return db.into('restaurants').insert(testRestaurants);
  });

  after(() => db.destroy());

  describe(`getAllRestaurants()`, () => {
    it(`resolves all restaurants from 'restaurants' table `, () => {});
  });
});
