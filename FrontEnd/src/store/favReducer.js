import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    products: {},
    quantity: 0,
    total: 0,
  },

  reducers: {
    addFav: (state, action) => {
      let { _id } = action.payload;
      if (state.products[_id]) {
        state.products[_id].quantity += action.payload.quantity;
      } else {
        state.products = {
          ...state.products,
          [_id]: action.payload,
        };
      }
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    clearFavs: (state) => {
      state.products = {};
      state.quantity = 0;
      state.total = 0;
    },
    removeFav: (state, action) => {
      const quantity = state.products[action.payload].quantity;
      const price = state.products[action.payload].price;

      state.quantity -= +quantity;
      state.total -= +quantity * +price;
      delete state.products[action.payload];
    },
    updateFav: (state, action) => {
      let { _id, type } = action.payload;
      let price = state.products[_id].price;

      if (type === "dec" && state.products[_id].quantity > 1) {
        state.products[_id].quantity -= 1;

        state.quantity -= 1;
        state.total -= price;
      } else {
        if (type === "inc") {
          state.products[_id].quantity += 1;

          state.quantity += 1;
          state.total += price;
        }
      }
    },
  },
});

export const { addFav, clearFavs, removeFav, updateFav } = favSlice.actions;

export default favSlice.reducer;
