import { Document } from "mongoose";
import { ICollege } from "./College";

export interface IDepartment {
  name: string;
  // hod:
  collegeId: ICollege["_id"];
}

export class Department extends Document implements IDepartment {
  name: string;
  // hod:
  collegeId: ICollege["_id"];

  constructor(name: string, collegeId: ICollege["_id"]) {
    super();
    this.name = name;
    this.collegeId = collegeId;
  }
}
