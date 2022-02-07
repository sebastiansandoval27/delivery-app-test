import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../models/Category";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [] as Category[],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
