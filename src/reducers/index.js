import { combineReducers } from "redux";
import todo from "./todo";
import loggedUser from "./loggedUser";

export default combineReducers({
  todo,
  loggedUser
});
