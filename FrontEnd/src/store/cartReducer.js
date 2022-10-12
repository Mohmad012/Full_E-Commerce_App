import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: {},
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
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
    clearProducts: (state) => {
      state.products = {};
      state.quantity = 0;
      state.total = 0;
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const quantity = state.products[id].quantity;
      const price = state.products[id].price;

      state.quantity -= +quantity;
      state.total -= +quantity * +price;
      delete state.products[id];
    },
    updateProduct: (state, action) => {
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

export const { addProduct, clearProducts, removeProduct, updateProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
