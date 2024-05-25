export interface User {
  id: string;
  name: string;
  cart: Array<Array<string | number>>;
}
export interface UserShema {
  authData?: User;
}
