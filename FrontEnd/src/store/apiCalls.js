import { publicRequest } from "../requestApi";
import { loginFailure, loginStart, loginSuccess } from "./userReducer";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    if (res.status === 200) {
      dispatch(loginSuccess(res.data));
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};
