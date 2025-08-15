import { CourseType } from "../../college/models/CourseType";
import { User } from "../../model/User";

interface IStudent {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  address: string;
  dob: Date;
  CourseType: CourseType;
  year: number;
  isSystemVerified: boolean;
  isAdminVerified: boolean;
  admission_year: Date;
  sem1_grade: number;
  sem2_grade: number;
  sem3_grade: number;
  sem4_grade: number;
  sem5_grade: number;
  sem6_grade: number;
  sem7_grade: number;
  sem8_grade: number;
  cet: number;
  jee: number;
  diploma: number;
  hsc: number;
  ssc: number;
  hsc_board_name: string;
  ssc_board_name: string;
  diploma_board_name: string;
  adhar_number: number;
  pan: number;
  photo_with_signature: string;
  gap_certificate: string;
  handicap_certificate: string;
}
export class Student extends User implements IStudent {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  address: string;
  dob: Date;
  CourseType: CourseType;
  year: number;
  isSystemVerified: boolean;
  isAdminVerified: boolean;
  admission_year: Date;
  sem1_grade: number;
  sem2_grade: number;
  sem3_grade: number;
  sem4_grade: number;
  sem5_grade: number;
  sem6_grade: number;
  sem7_grade: number;
  sem8_grade: number;
  cet: number;
  jee: number;
  diploma: number;
  hsc: number;
  ssc: number;
  hsc_board_name: string;
  ssc_board_name: string;
  diploma_board_name: string;
  adhar_number: number;
  pan: number;
  photo_with_signature: string;
  gap_certificate: string;
  handicap_certificate: string;

  constructor(
    firebaseId: string,
    email: string,
    accessToken: string,
    firstname: string,
    lastname: string,
    phoneNumber: string,
    address: string,
    dob: Date,
    CourseType: CourseType,
    year: number,
    isSystemVerified: boolean,
    isAdminVerified: boolean,
    admission_year: Date,
    sem1_grade: number,
    sem2_grade: number,
    sem3_grade: number,
    sem4_grade: number,
    sem5_grade: number,
    sem6_grade: number,
    sem7_grade: number,
    sem8_grade: number,
    cet: number,
    jee: number,
    diploma: number,
    hsc: number,
    ssc: number,
    hsc_board_name: string,
    ssc_board_name: string,
    diploma_board_name: string,
    adhar_number: number,
    pan: number,
    photo_with_signature: string,
    gap_certificate: string,
    handicap_certificate: string
  ) {
    super(firebaseId, email, accessToken);
    this.firstname = firstname;
    this.lastname = lastname;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.dob = dob;
    this.CourseType = CourseType;
    this.year = year;
    this.isSystemVerified = isSystemVerified;
    this.isAdminVerified = isAdminVerified;
    this.admission_year = admission_year;
    this.sem1_grade = sem1_grade;
    this.sem2_grade = sem2_grade;
    this.sem3_grade = sem3_grade;
    this.sem4_grade = sem4_grade;
    this.sem5_grade = sem5_grade;
    this.sem6_grade = sem6_grade;
    this.sem7_grade = sem7_grade;
    this.sem8_grade = sem8_grade;
    this.cet = cet;
    this.jee = jee;
    this.diploma = diploma;
    this.hsc = hsc;
    this.ssc = ssc;
    this.hsc_board_name = hsc_board_name;
    this.ssc_board_name = ssc_board_name;
    this.diploma_board_name = diploma_board_name;
    this.adhar_number = adhar_number;
    this.pan = pan;
    this.photo_with_signature = photo_with_signature;
    this.gap_certificate = gap_certificate;
    this.handicap_certificate = handicap_certificate;
  }

  getFirstname(): string {
    return this.firstname;
  }
  setFirstname(value: string): void {
    this.firstname = value;
  }

  getLastname(): string {
    return this.lastname;
  }
  setLastname(value: string): void {
    this.lastname = value;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }
  setPhoneNumber(value: string): void {
    this.phoneNumber = value;
  }

  getAddress(): string {
    return this.address;
  }
  setAddress(value: string): void {
    this.address = value;
  }

  getDob(): Date {
    return this.dob;
  }
  setDob(value: Date): void {
    this.dob = value;
  }

  getCourseType(): CourseType {
    return this.CourseType;
  }
  setCourseType(value: CourseType): void {
    this.CourseType = value;
  }

  getYear(): number {
    return this.year;
  }
  setYear(value: number): void {
    this.year = value;
  }

  getIsSystemVerified(): boolean {
    return this.isSystemVerified;
  }
  setIsSystemVerified(value: boolean): void {
    this.isSystemVerified = value;
  }

  getIsAdminVerified(): boolean {
    return this.isAdminVerified;
  }
  setIsAdminVerified(value: boolean): void {
    this.isAdminVerified = value;
  }

  getAdmissionYear(): Date {
    return this.admission_year;
  }
  setAdmissionYear(value: Date): void {
    this.admission_year = value;
  }

  getSem1Grade(): number {
    return this.sem1_grade;
  }
  setSem1Grade(value: number): void {
    this.sem1_grade = value;
  }

  getSem2Grade(): number {
    return this.sem2_grade;
  }
  setSem2Grade(value: number): void {
    this.sem2_grade = value;
  }

  getSem3Grade(): number {
    return this.sem3_grade;
  }
  setSem3Grade(value: number): void {
    this.sem3_grade = value;
  }

  getSem4Grade(): number {
    return this.sem4_grade;
  }
  setSem4Grade(value: number): void {
    this.sem4_grade = value;
  }

  getSem5Grade(): number {
    return this.sem5_grade;
  }
  setSem5Grade(value: number): void {
    this.sem5_grade = value;
  }

  getSem6Grade(): number {
    return this.sem6_grade;
  }
  setSem6Grade(value: number): void {
    this.sem6_grade = value;
  }

  getSem7Grade(): number {
    return this.sem7_grade;
  }
  setSem7Grade(value: number): void {
    this.sem7_grade = value;
  }

  getSem8Grade(): number {
    return this.sem8_grade;
  }
  setSem8Grade(value: number): void {
    this.sem8_grade = value;
  }

  getCet(): number {
    return this.cet;
  }
  setCet(value: number): void {
    this.cet = value;
  }

  getJee(): number {
    return this.jee;
  }
  setJee(value: number): void {
    this.jee = value;
  }

  getDiploma(): number {
    return this.diploma;
  }
  setDiploma(value: number): void {
    this.diploma = value;
  }

  getHsc(): number {
    return this.hsc;
  }
  setHsc(value: number): void {
    this.hsc = value;
  }

  getSsc(): number {
    return this.ssc;
  }
  setSsc(value: number): void {
    this.ssc = value;
  }

  getHscBoardName(): string {
    return this.hsc_board_name;
  }
  setHscBoardName(value: string): void {
    this.hsc_board_name = value;
  }

  getSscBoardName(): string {
    return this.ssc_board_name;
  }
  setSscBoardName(value: string): void {
    this.ssc_board_name = value;
  }

  getDiplomaBoardName(): string {
    return this.diploma_board_name;
  }
  setDiplomaBoardName(value: string): void {
    this.diploma_board_name = value;
  }

  getAdharNumber(): number {
    return this.adhar_number;
  }
  setAdharNumber(value: number): void {
    this.adhar_number = value;
  }

  getPan(): number {
    return this.pan;
  }
  setPan(value: number): void {
    this.pan = value;
  }

  getPhotoWithSignature(): string {
    return this.photo_with_signature;
  }
  setPhotoWithSignature(value: string): void {
    this.photo_with_signature = value;
  }

  getGapCertificate(): string {
    return this.gap_certificate;
  }
  setGapCertificate(value: string): void {
    this.gap_certificate = value;
  }

  getHandicapCertificate(): string {
    return this.handicap_certificate;
  }
  setHandicapCertificate(value: string): void {
    this.handicap_certificate = value;
  }
}
