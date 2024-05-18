import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User/model/types/user";

export interface RegisterByEmailTypes {
  name: string;
  email: string;
  password: string;
}
export const RegisterByEmail = createAsyncThunk(
  "register/registerByEmail",
  async (authData: RegisterByEmailTypes, thunckAPI) => {
    try {
      const response = await axios.post<User>(
        "http://localhost:8000/register",
        authData
      );

      return response.data;
    } catch (e) {
      return thunckAPI.rejectWithValue("error");
    }
  }
);
