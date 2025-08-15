import { User } from "../../model/User";
import { AuthStrategy } from "../../strategies/AuthStrategy";

class StudentAuth implements AuthStrategy {
  signin(user: User): boolean {
    return true;
  }
  signup(user: User): boolean {
    return true;
  }
  signout(user: User): boolean {
    return true;
  }
}
