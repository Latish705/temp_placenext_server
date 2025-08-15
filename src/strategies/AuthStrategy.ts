import { User } from "../model/User";

export interface AuthStrategy {
  signin(user: User): boolean;
  signup(user: User): boolean;
  signout(user: User): boolean;
}
