import { createSlice, current } from "@reduxjs/toolkit";
import { Cart } from "../models/Cart";
import { Product } from "../models/Product";

const initialState = {
  logged: false,
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginWithGoogle(state, action) {
      let userLogged = action.payload?.additionalUserInfo;
      state.user = userLogged?.profile?.given_name;
      state.logged = true;
    },
    logoutFirebase(state) {
      state.logged = false;
      state.user = "";
    },
  },
});

export const { loginWithGoogle, logoutFirebase } = authSlice.actions;

export default authSlice.reducer;
