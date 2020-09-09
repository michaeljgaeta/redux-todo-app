import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, RECEIVE_TODOS } from "../actions/actionTypes";

// const initialState = [
//   { _id: "zejldcs6zpkebjjvjr", name: "Walk the dog", completed: false},
//   { _id: "ums8j0t5559kebjkoho", name: "Buy groceries", completed: false},
//   { _id: "ums8j0t58392mbj029d", name: "Eat pizza", completed: false}
// ]

export default function todo(state = [], action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case ADD_TODO:
      return state.concat(action.todo);
    case REMOVE_TODO:
      return state.filter((todo) => todo._id !== action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.todo._id ? { ...todo, completed: todo.completed } : todo
      );
    default:
      return state;
  }
}
