import { User } from "../../model/User";

export class Student extends User {
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
    super(firebaseId, email, accessToken);
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

  getSchool(): string {
    return this.school;
  }
  setSchool(value: string): void {
    this.school = value;
  }

  getGrade(): number {
    return this.grade;
  }
  setGrade(value: number): void {
    this.grade = value;
  }

  getBirthDate(): Date {
    return this.birthDate;
  }
  setBirthDate(value: Date): void {
    this.birthDate = value;
  }

  getAddress(): string {
    return this.address;
  }
  setAddress(value: string): void {
    this.address = value;
  }

  getCity(): string {
    return this.city;
  }
  setCity(value: string): void {
    this.city = value;
  }

  getState(): string {
    return this.state;
  }
  setState(value: string): void {
    this.state = value;
  }

  getZipCode(): string {
    return this.zipCode;
  }
  setZipCode(value: string): void {
    this.zipCode = value;
  }

  getParentName(): string {
    return this.parentName;
  }
  setParentName(value: string): void {
    this.parentName = value;
  }

  getParentEmail(): string {
    return this.parentEmail;
  }
  setParentEmail(value: string): void {
    this.parentEmail = value;
  }

  getParentPhoneNumber(): string {
    return this.parentPhoneNumber;
  }
  setParentPhoneNumber(value: string): void {
    this.parentPhoneNumber = value;
  }

  getParentAddress(): string {
    return this.parentAddress;
  }
  setParentAddress(value: string): void {
    this.parentAddress = value;
  }

  getParentCity(): string {
    return this.parentCity;
  }
  setParentCity(value: string): void {
    this.parentCity = value;
  }

  getParentState(): string {
    return this.parentState;
  }
  setParentState(value: string): void {
    this.parentState = value;
  }

  getParentZipCode(): string {
    return this.parentZipCode;
  }
  setParentZipCode(value: string): void {
    this.parentZipCode = value;
  }
}
