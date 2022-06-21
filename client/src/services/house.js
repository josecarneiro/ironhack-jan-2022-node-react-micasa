import api from './api';

/*
The URLSearchParams class encodes a JS object as a URL query string
Eg. { foo: 'bar', abc: 123 } => 'foo=bar&abc=123' 
*/
export const houseSearch = (filters) =>
  api
    .get(`/house/search?${new URLSearchParams(filters).toString()}`)
    .then((response) => response.data);

export const houseLoad = (id) =>
  api.get(`/house/${id}`).then((response) => response.data);

export const houseEdit = (id, house) =>
  api.patch(`/house/${id}`, house).then((response) => response.data);

export const houseAdd = (house) =>
  api.post('/house', house).then((response) => response.data);

export const bookmarkList = () =>
  api.get('/house/bookmarked').then((response) => response.data);

export const bookmarkAdd = (id) =>
  api.post(`/house/${id}/bookmark`).then((response) => response.data);

export const bookmarkRemove = (id) =>
  api.delete(`/house/${id}/bookmark`).then((response) => response.data);
