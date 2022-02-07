import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { productsSlice, cartSlice, categoriesSlice } from "./reducers";
import { useDispatch } from "react-redux";
import { authSlice } from "./reducers/authSlice";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    categories: categoriesSlice.reducer,
    auth: authSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
