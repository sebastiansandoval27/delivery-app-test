import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as Product[],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
