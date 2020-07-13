import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4242';

const getAllTodo = () => axios.get('/todo');

export default { getAllTodo };
