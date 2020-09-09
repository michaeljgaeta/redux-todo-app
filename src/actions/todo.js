import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, RECEIVE_TODOS } from "./actionTypes";
import { getTodos, saveTodo, deleteTodo, updateTodo } from "../utils/api";

/* Actions */
export function receiveTodosAction(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

export function removeTodoAction(todo) {
  return {
    type: REMOVE_TODO,
    todo
  };
}

export function toggleTodoAction(todo) {
  return {
    type: TOGGLE_TODO,
    todo
  };
}

/* API Handlers */
export function getTodosFromAPI() {
  return (dispatch) => {
    return getTodos().then((responseFromAPI) => {
      dispatch(receiveTodosAction(responseFromAPI));
    });
  };
}

export function addTodoToAPI(todo) {
  return (dispatch) => {
    return saveTodo(todo).then((responseFromAPI) => {
      dispatch(addTodoAction(todo));
    });
  };
}

export function removeTodoFromAPI(id) {
  return (dispatch) => {
    return deleteTodo(id).then((responseFromAPI) => {
      dispatch(removeTodoAction(id));
    });
  };
}

export function toggleTodoOnAPI(todo) {
  return (dispatch) => {
    return updateTodo(todo).then(() => {
      dispatch(toggleTodoAction(todo));
    });
  };
}
