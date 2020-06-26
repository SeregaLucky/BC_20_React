import axios from 'axios';

axios.defaults.baseURL = 'http://openlibrary.org';

export const getBooks = async love => {
  const res = await axios.get(`/subjects/${love}.json`);
  return res.data;
};

export const getBookByTitle = async title => {
  const res = await axios.get(`/search.json?title=${title}`);
  return res.data;
};
