import api from './api';

export const profileSearch = () =>
  api.get('/profile/search').then((response) => response.data);
