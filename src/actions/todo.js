import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "./actionTypes";

export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  }
};

export function removeTodoAction(todo) {
  return {
    type: REMOVE_TODO,
    todo
  }
};

export function completeTodoAction(todo) {
  return {
    type: COMPLETE_TODO,
    todo
  }
};