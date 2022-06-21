import api from './api';

export const messageThreadList = () =>
  api.get('/message/list').then((response) => response.data);

export const messageThreadLoad = (id) =>
  api.get(`/message/${id}`).then((response) => response.data);

export const messageSend = (id, message) =>
  api.post(`/message/${id}`, message).then((response) => response.data);
