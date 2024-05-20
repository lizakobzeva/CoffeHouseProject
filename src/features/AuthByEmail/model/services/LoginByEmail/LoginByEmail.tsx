import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthData } from "entities/User/model/slice/UserSlice";
import { User } from "entities/User/model/types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface LoginByEmailTypes {
  email: string;
  password: string;
}
export const LoginByEmail = createAsyncThunk(
  "login/loginByEmail",
  async (authData: LoginByEmailTypes, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        authData
      );

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.user)
      );
      thunkAPI.dispatch(setAuthData(response.data.user));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
