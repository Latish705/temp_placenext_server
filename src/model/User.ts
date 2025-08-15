// export interface User {
//   firebaseId: string;
//   email: string;
//   accessToken: string;
// }

export interface IUser {
  firebaseId: string;
  email: string;
  accessToken: string;
}

export class User {
  private firebaseId: string;
  private email: string;
  private accessToken: string;

  constructor(firebaseId: string, email: string, accessToken: string) {
    this.firebaseId = firebaseId;
    this.email = email;
    this.accessToken = accessToken;
  }

  getFirebaseId(): string {
    return this.firebaseId;
  }

  setFirebaseId(firebaseId: string): void {
    this.firebaseId = firebaseId;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }
}
