export interface AuthStrategy<T, U> {
  signup(params: T): Promise<U>;
  signin(params: any): Promise<any>;
  logout(params: any): Promise<void>;
}
