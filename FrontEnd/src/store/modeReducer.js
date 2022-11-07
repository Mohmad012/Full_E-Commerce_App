import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    isDark: false,
  },

  reducers: {
    changeMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
