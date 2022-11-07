import { createSlice } from "@reduxjs/toolkit";
import { encrypt } from "utils/encryptions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = encrypt(JSON.stringify(action.payload));
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    removeUser: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, removeUser } =
  userSlice.actions;

export default userSlice.reducer;
