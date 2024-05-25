import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { USER_LOCALSTORAGE_KEY } from "../../../../shared/const/localStorage";
import { CartShema } from "../types/cart";

const initialState: CartShema = {};
export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    SetItemInCart: (
      state,
      action: PayloadAction<Array<Array<string | number>>>
    ) => {
      state.cart = action.payload;
    },
    initCart: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.cart = JSON.parse(user).cart;
      }
    },
    // logout: (state) => {
    //   // state.authData = undefined;
    //   localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    // },
  },
});

export const { SetItemInCart, initCart } = userSlice.actions;

export default userSlice.reducer;
