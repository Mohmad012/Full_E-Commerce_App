import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    updateProduct: (state, action) => {
      let { price, updateQuantity, id } = action.payload;
      let productsFiltered = state.products.filter((item) => item._id === id);
      let quantity = productsFiltered[0]?.quantity + updateQuantity;
      let currProd = {};
      if (productsFiltered.length) {
        currProd = {
          ...productsFiltered[0],
          quantity,
        };
        productsFiltered[0] = { ...currProd };
      }
      state.quantity += updateQuantity;

      state.total += price * updateQuantity;

      state.products = [...state.products];
    },
  },
});

export const { addProduct, updateProduct } = cartSlice.actions;

export default cartSlice.reducer;
