import request from 'supertest';

const api = 'https://api.icndb.com';

it('can check API responses', (done) => {
  request(api)
    .get('/jokes/random')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .then((response) => {
      expect(response.body.value.joke).not.toBeNull()
      done()
    })
    .catch((error) => done(error))
})
