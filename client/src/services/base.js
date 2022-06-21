import api from './api';

export const listHomeData = () =>
  api.get('/').then((response) => response.data);
