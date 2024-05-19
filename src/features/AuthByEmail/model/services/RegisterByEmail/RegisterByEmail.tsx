import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthData } from "entities/User/model/slice/UserSlice";
import { User } from "entities/User/model/types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface RegisterByEmailTypes {
  name: string;
  email: string;
  password: string;
}
export const RegisterByEmail = createAsyncThunk(
  "register/registerByEmail",
  async (authData: RegisterByEmailTypes, thunkAPI) => {
    try {
      const response = await axios.post<User>(
        "http://localhost:8000/register",
        authData
      );

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      thunkAPI.dispatch(setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);