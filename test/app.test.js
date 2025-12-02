const request = require('supertest');
const app = require('../index');

let server;

beforeAll(() => {
  server = app.listen(3000);
});

afterAll(done => {
  server.close(done); // サーバーを閉じて Jest を終了させる
});

test('GET / should return Hello CI/CD!', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello CI/CD!');
  expect(response.statusCode).toBe(200);
});

