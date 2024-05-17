import { createSelector } from "@reduxjs/toolkit";
import { getLogin } from "../getLogin/getLogin";

export const getLoading = createSelector(getLogin, (login) => login.isLoading);
