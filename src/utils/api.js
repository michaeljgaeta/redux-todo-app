import axios from "axios";
const backendUrl = process.env.REACT_APP_IRONHACK_API_URL;

export const getTodos = () => {
  return axios.get(`${backendUrl}/api/todos`).then((responseFromAPI) => {
    return responseFromAPI.data;
  });
};

export const saveTodo = (todo) => {
  return axios.post(`${backendUrl}/api/todos`, todo).then((responseFromAPI) => {
    return responseFromAPI.data;
  });
};

export const updateTodo = (todo) => {
  return axios.put(`${backendUrl}/api/todo/${todo._id}`, todo).then((responseFromAPI) => {
    return responseFromAPI.data;
  });
};

export const deleteTodo = (id) => {
  return axios.delete(`${backendUrl}/api/todo/${id}`).then((responseFromAPI) => {
    return responseFromAPI.data;
  });
};

export const authenticate = () => {
  return axios
    .get(`${backendUrl}/api/loggeduser?username=miguel&type=admin`)
    .then((responseFromAPI) => {
      return responseFromAPI.data;
    });
};
