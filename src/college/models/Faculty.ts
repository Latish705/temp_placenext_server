import { User } from "../../model/User";
import { ICollege } from "./College";

class Faculty extends User {
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
    super(firebaseId, email, accessToken);
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.collegeId = collegeId;
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
