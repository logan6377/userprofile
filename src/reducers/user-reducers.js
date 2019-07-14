import { userConstants } from "../constants";

export function rootReducer(state, action) {
  //console.log(action.type);
  switch (action.type) {
    case userConstants.USER_DETAIL:
      //console.log(action);
      return action.data;
    default:
      return state;
  }
}
