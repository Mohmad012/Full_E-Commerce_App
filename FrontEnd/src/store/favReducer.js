import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    products: {},
    quantity: 0,
    total: 0,
    inFavProds: {},
  },

  reducers: {
    addFav: (state, action) => {
      let { _id } = action.payload;
      state.products = {
        ...state.products,
        [_id]: action.payload,
      };
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
      state.inFavProds[_id] = true;
    },
    clearFavs: (state) => {
      state.products = {};
      state.quantity = 0;
      state.total = 0;
    },
    inFavProds: (state, action) => {
      // const id = action.payload;
      // // const targetProduct = state.products.hasOwnProperty(id);
      // if (state.inFavProds[id]) {
      //   state.inFavProds = true;
      // } else {
      //   state.inFavProds = false;
      // }
    },
    removeFav: (state, action) => {
      const id = action.payload;
      const quantity = state.products[id].quantity;
      const price = state.products[id].price;

      state.quantity -= +quantity;
      state.total -= +quantity * +price;
      delete state.products[id];
      state.inFavProds[id] = false;
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

export const { addFav, clearFavs, inFavProds, removeFav, updateFav } =
  favSlice.actions;

export default favSlice.reducer;
