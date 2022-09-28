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

    updateProduct: (state, action) => {
      let { _id, type } = action.payload;
      let price = state.products[_id].price;

      if (type === "dec" && state.products[_id].quantity > 1) {
        state.products[_id].quantity -= 1;

        state.quantity -= 1;
        state.total -= price;
      } else {
        state.products[_id].quantity += 1;

        state.quantity += 1;
        state.total += price;
      }
    },
  },
});

export const { addProduct, updateProduct } = cartSlice.actions;

export default cartSlice.reducer;
