import { User } from "../../model/User";

class Student implements User {
  firebaseId: string;
  email: string;
  accessToken: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  school: string;
  grade: number;
  birthDate: Date;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  parentName: string;
  parentEmail: string;
  parentPhoneNumber: string;
  parentAddress: string;
  parentCity: string;
  parentState: string;
  parentZipCode: string;

  constructor(
    firebaseId: string,
    email: string,
    accessToken: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    school: string,
    grade: number,
    birthDate: Date,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    parentName: string,
    parentEmail: string,
    parentPhoneNumber: string,
    parentAddress: string,
    parentCity: string,
    parentState: string,
    parentZipCode: string
  ) {
    this.firebaseId = firebaseId;
    this.email = email;
    this.accessToken = accessToken;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.school = school;
    this.grade = grade;
    this.birthDate = birthDate;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.parentName = parentName;
    this.parentEmail = parentEmail;
    this.parentPhoneNumber = parentPhoneNumber;
    this.parentAddress = parentAddress;
    this.parentCity = parentCity;
    this.parentState = parentState;
    this.parentZipCode = parentZipCode;
  }
}
