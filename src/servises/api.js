const baseURL = 'https://newsapi.org/v2';
const apiKey = '33597ec26ed845a18da1dd8decec5ea1';

// const controller = new AbortController();
// const signal = controller.signal;

export const getNews = () => {
  return fetch(baseURL + '/everything?q=bitcoin&apiKey=' + apiKey)
    .then(res => res.json())
    .then(data => data);
};

export const getAllToDo = async () => {
  const res = await fetch('http://localhost:4242/todo');
  return res.json();
};

export const getOneToDo = async id => {
  const res = await fetch(`http://localhost:4242/todo/${id}`);
  return res.json();
};
