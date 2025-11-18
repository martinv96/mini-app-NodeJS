const request = require('supertest');
const app = require('./server');

describe('API Notes', () => {
  
  // Test 1 : GET /notes retourne un tableau
  test('GET /notes retourne un tableau', async () => {
    const res = await request(app).get('/notes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Test 2 : POST /notes ajoute une note
  test('POST /notes ajoute une note', async () => {
    const res = await request(app)
      .post('/notes')
      .send({ text: 'Test' });
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.text).toBe('Test');
  });

  // Test 3 : DELETE /notes/:id fonctionne
  test('DELETE /notes/:id fonctionne', async () => {
    const create = await request(app).post('/notes').send({ text: 'À supprimer' });
    const id = create.body.id;
    
    const del = await request(app).delete(`/notes/${id}`);
    expect(del.statusCode).toBe(200);
    
    const get = await request(app).get(`/notes/${id}`);
    expect(get.statusCode).toBe(404);
  });
});
