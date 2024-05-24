import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SetItemInCart } from "entities/Cart/model/slice/CartSlice";
import { setAuthData } from "entities/User/model/slice/UserSlice";
import { User } from "entities/User/model/types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface AddItemInCartTypes {
  id: string;
  cart: Array<string>;
}
export const AddItemInCart = createAsyncThunk(
  "register/AddItemInCart",
  async (authData: AddItemInCartTypes, thunkAPI) => {
    try {
      const response = await axios.patch<User>(
        `http://localhost:8000/users/${authData.id}`,
        authData
      );

      console.log(response.data);
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      thunkAPI.dispatch(setAuthData(response.data));
      thunkAPI.dispatch(SetItemInCart(response.data.cart));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
