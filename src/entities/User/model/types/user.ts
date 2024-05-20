export interface User {
  id: string;
  name: string;
  cart: Array<string>;
}
export interface UserShema {
  authData?: User;
}
