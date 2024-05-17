import { createSelector } from "@reduxjs/toolkit";
import { getLogin } from "../getLogin/getLogin";

export const getPassword = createSelector(getLogin, (login) => login.password);
