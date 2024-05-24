import { configureStore } from "@reduxjs/toolkit";

import { StateShema } from "./StateShema";
import { CounterSlice } from "entities/Counter";
import { UserSlice } from "entities/User";
import LoginSlice from "features/AuthByEmail/model/slice/LoginSlice";
import { useDispatch } from "react-redux";
import RegisterSlice from "features/AuthByEmail/model/slice/RegisterSlice";
import CartSlice from "entities/Cart/model/slice/CartSlice";

const store = configureStore<StateShema>({
  reducer: {
    register: RegisterSlice,
    counter: CounterSlice,
    user: UserSlice,
    login: LoginSlice,
    cart: CartSlice,
  },
  devTools: _isDev,
});

export function CreateReduxStore(initialState?: StateShema) {
  const store = configureStore<StateShema>({
    reducer: {
      counter: CounterSlice,
      user: UserSlice,
      login: LoginSlice,
      register: RegisterSlice,
      cart: CartSlice,
    },
    devTools: _isDev,
    preloadedState: initialState,
  });
  return store;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
