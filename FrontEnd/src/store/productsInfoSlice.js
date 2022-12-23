import { createSlice } from "@reduxjs/toolkit";

const productsInfoSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: {},
    sliders: [],
    Categories:[],
    BestProducts:[]
  },

  reducers: {
    addProducts: (state, action) => {
      let { _id } = action.payload;
      state.products = {
        ...state.products,
        [_id]: action.payload,
      };
    },
    addSliders: (state, action) => {
      state.sliders = action.payload
    },
    addCategories: (state, action) => {
      state.Categories = action.payload
    },
    addBestProducts: (state, action) => {
      state.BestProducts = action.payload
    }
  },
});

export const { addProducts , addSliders , addCategories, addBestProducts } = productsInfoSlice.actions;

export default productsInfoSlice.reducer;
