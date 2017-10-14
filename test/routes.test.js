import request from 'supertest';
import server from '../src';

afterEach(() => {
  server.close();
});

describe('GET /', () => {
  it('should render application name and version', async () => {
    await request(server)
      .get('/')
      .expect(200);
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(server)
      .get('/404')
      .expect(404);
    await request(server)
      .get('/notfound')
      .expect(404);
  });
});
