import { createSlice } from "@reduxjs/toolkit";

const productsInfoSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: {},
    productsForEachCategory: {},
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
    addProductsForEachCategory: (state, action) => {
      action.payload.forEach(product => {
        state.productsForEachCategory = {
          ...state.productsForEachCategory,
          [product.category]: action.payload,
        };
      })
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

export const { addProducts , addProductsForEachCategory, addSliders , addCategories, addBestProducts } = productsInfoSlice.actions;

export default productsInfoSlice.reducer;
