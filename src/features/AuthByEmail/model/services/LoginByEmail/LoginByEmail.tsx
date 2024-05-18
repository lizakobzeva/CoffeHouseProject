import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User/model/types/user";

export interface LoginByEmailTypes {
  email: string;
  password: string;
}
export const LoginByEmail = createAsyncThunk(
  "login/loginByEmail",
  async (authData: LoginByEmailTypes, thunckAPI) => {
    try {
      const response = await axios.post<User>(
        "http://localhost:8000/login",
        authData
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunckAPI.rejectWithValue("error");
    }
  }
);
