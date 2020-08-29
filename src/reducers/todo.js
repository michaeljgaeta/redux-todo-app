import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actions/actionTypes"

const initialState = [
  { id: "zejldcs6zpkebjjvjr", name: "Walk the dog", completed: false},
  { id: "ums8j0t5559kebjkoho", name: "Buy groceries", completed: false},
  { id: "ums8j0t58392mbj029d", name: "Eat pizza", completed: false}
]

export default function todo(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.todo);
    case COMPLETE_TODO:
      return state.map(todo => todo.completed);
    default:
      return state
  }
}

// I think I'm stuck on something in the reducer function ( applying the css class )