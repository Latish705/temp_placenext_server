import { User } from "../../model/User";

class Faculty implements User {
  firebaseId: string;
  email: string;
  accessToken: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  collegeId: ICollege["_id"];

  constructor(
    firebaseId: string,
    email: string,
    accessToken: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    collegeId: ICollege["_id"]
  ) {
    this.firebaseId = firebaseId;
    this.email = email;
    this.accessToken = accessToken;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.collegeId = collegeId;
  }

  getFirebaseId(): string {
    return this.firebaseId;
  }
  setFirebaseId(value: string): void {
    this.firebaseId = value;
  }
  getEmail(): string {
    return this.email;
  }
  setEmail(value: string): void {
    this.email = value;
  }
  getAccessToken(): string {
    return this.accessToken;
  }
  setAccessToken(value: string): void {
    this.accessToken = value;
  }
  getFirstName(): string {
    return this.firstName;
  }
  setFirstName(value: string): void {
    this.firstName = value;
  }
  getLastName(): string {
    return this.lastName;
  }
  setLastName(value: string): void {
    this.lastName = value;
  }
  getPhoneNumber(): string {
    return this.phoneNumber;
  }
  setPhoneNumber(value: string): void {
    this.phoneNumber = value;
  }
  getCollegeId(): ICollege["_id"] {
    return this.collegeId;
  }
  setCollegeId(value: ICollege["_id"]): void {
    this.collegeId = value;
  }
}
