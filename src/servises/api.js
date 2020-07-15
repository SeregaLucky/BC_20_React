import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4242';

const getAllTodo = () => axios.get('/todo');
const addTodo = (title, text) => axios.post('/todo', { title, text });
const deleteTodo = id => axios.delete(`/todo/${id}`);
const changeTodo = (id, text) => axios.patch(`/todo/${id}`, { text });

export default { getAllTodo, addTodo, deleteTodo, changeTodo };
