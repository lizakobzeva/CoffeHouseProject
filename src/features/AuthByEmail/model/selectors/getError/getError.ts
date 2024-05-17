import { createSelector } from "@reduxjs/toolkit";
import { getLogin } from "../getLogin/getLogin";

export const getError = createSelector(getLogin, (login) => login.error);
