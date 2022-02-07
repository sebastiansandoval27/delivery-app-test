import { createSlice, current } from "@reduxjs/toolkit";
import { Cart } from "../models/Cart";
import { Product } from "../models/Product";

const initialState = {
  products: [
    {
      product: {
        id: 0,
        image: "",
        name: "",
        price: 0,
        qualification: "0",
        time: "0",
      },
      quantity: 0,
    },
  ],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item.product?.id === action.payload?.id
      );

      if (existingIndex !== -1) {
        state.products[existingIndex].quantity++;
        state.total += action.payload.price;
      } else {
        state.products.push({
          product: action.payload,
          quantity: 1,
        });
        state.total += action.payload.price;
      }
    },
    removeFromCart(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item.product?.id === action.payload?.id
      );

      if (existingIndex !== -1) {
        state.products[existingIndex].quantity = 0;
        state.total -= action.payload.price;
      }

      if (state.products[existingIndex].quantity === 0) {
        state.products.splice(existingIndex, 1);
      }
    },
    editAmount(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item.product?.id === action.payload?.id
      );

      if (existingIndex !== -1) {
        state.products[existingIndex].quantity = action.payload.quantity;
        state.total = action.payload.total;
      }
    },
  },
});

export const { addToCart, editAmount, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
