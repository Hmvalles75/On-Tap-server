const app = require('../app');

describe('App', () => {
  it('GET /api/restaurants responds with 200', () => {
    return supertest(app)
      .get('/')
      .expect(200);
  });
});
