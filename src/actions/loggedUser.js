import { SET_LOGGED_USER } from "./actionTypes";
import { authenticate } from "../utils/api";

export function setLoggedUserAction(user) {
  return {
    type: SET_LOGGED_USER,
    user
  };
}

export function authenticateOnAPI() {
    return dispatch => {
      return authenticate()
        .then((responseFromAPI) => {
          dispatch(setLoggedUserAction(responseFromAPI));
        })
    };
  }
