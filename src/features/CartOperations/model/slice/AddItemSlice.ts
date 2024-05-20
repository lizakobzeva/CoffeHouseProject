import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginShema } from "../types/LoginShema";
import { AddItemInCart } from "../services/AddItemInCart/AddItemInCart";

const initialState: LoginShema = {
  email: "",
  password: "",
  isLoading: false,
  error: false,
};
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, actions: PayloadAction<string>) => {
      state.email = actions.payload;
    },
    setPassword: (state, actions: PayloadAction<string>) => {
      state.password = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddItemInCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(AddItemInCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddItemInCart.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setEmail, setPassword } = LoginSlice.actions;

export default LoginSlice.reducer;
