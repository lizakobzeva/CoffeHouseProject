import { CounterShema } from "entities/Counter";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByEmail/model/types/LoginShema";

export interface StateShema {
  counter: CounterShema;
  user: UserShema;
  login: LoginShema;
}
