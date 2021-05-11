import request from 'superagent';

const URL = '/api/dinos';

export async function getDinos() {
  const response = await request.get(URL);
  return response.body;
}