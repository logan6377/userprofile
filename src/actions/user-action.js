import { userConstants } from "../constants";
import { userService } from "../services";

export const userActions = {
  userData
};
function userData() {
  return dispatch => {
    userService.getUserData().then(
      data => {
        //console.log(data);
        dispatch({ type: userConstants.USER_DETAIL, data });
      },
      error => {
        console.log(error, "error");
      }
    );
  };
}
