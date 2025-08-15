import { Document } from "mongoose";
import { IDepartment } from "./Department";
import { Organisation } from "../../model/Organisation";

export interface ICollege extends Document, Organisation {}

// _id?: string;
//   coll_name: string;
//   coll_address: string;
//   coll_no_employs: number;
//   coll_website: string;
//   coll_location: string;
//   colLcontact_no: string;
//

//   coll_departments: IDepartment["_id"][];
//   coll_no_of_stud: number;
//   coll_courses_offered: string[];
//   googleId: string;
class College extends Organisation {
  courses_offered: string[];
  affiliated_to: string;
  constructor(
    name: string,
    address: string,
    contactNo: number,
    websiteUrl: string,
    location: string,
    constactEmail: string,
    courses_offered: string[],
    affiliated_to: string
  ) {
    super(name, address, contactNo, websiteUrl, location, constactEmail);
    this.courses_offered = courses_offered;
    this.affiliated_to = affiliated_to;
  }

  getCoursesOffered(): string[] {
    return this.courses_offered;
  }
  setCoursesOffered(value: string[]): void {
    this.courses_offered = value;
  }

  getAffiliatedTo(): string {
    return this.affiliated_to;
  }
  setAffiliatedTo(value: string): void {
    this.affiliated_to = value;
  }
}
