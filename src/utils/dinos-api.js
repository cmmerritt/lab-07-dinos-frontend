import request from 'superagent';

const URL = '/api/dinos';

export async function getDinos() {
  const response = await request.get(URL);
  return response.body;
}

export async function getDino(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addDino(dino) {
  const response = await request.post(URL).send(dino);
  return response.body;
}

export async function deleteDino(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}