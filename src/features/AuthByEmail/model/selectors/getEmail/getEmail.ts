import { createSelector } from "@reduxjs/toolkit";
import { getLogin } from "../getLogin/getLogin";

export const getEmail = createSelector(getLogin, (login) => login.email);
