import request from 'supertest';
import app from '../app';
import validJson from '../../__mocks__/validJson';

describe('GET /match', () => {
  it('responds with status 400 when no query strings', async (done) => {
    const res = await request(app).get('/match');
    expect(res.status).toBe(400);
    done();
  });
  it('responds with status 200 when valid query strings', async (done) => {
    const res = await request(app).get('/match?name1=Bob&name2=Alice');
    expect(res.status).toBe(200);
    done();
  });
  it('responds with valid json', async (done) => {
    const res = await request(app).get('/match?name1=Bob&name2=Alice');
    expect(res.body).toEqual(validJson);
    done();
  });
});
