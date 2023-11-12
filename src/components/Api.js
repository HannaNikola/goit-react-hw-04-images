

import axios from 'axios';

const API_KEY = '39227320-d50c4892bd50959f664d77ea8';


axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const response = await axios.get(`/?q=${query}&page=${page}`);
  return response.data;
};
