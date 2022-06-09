import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUserCard = async (pageParam: number) => {
  return await httpClient
    .get(`/cards/?_sort=id&_order=desc&_page=${pageParam}&_limit=6`)
    .then(response => response);
};
