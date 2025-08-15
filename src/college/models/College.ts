import { Document } from "mongoose";
import { IDepartment } from "./Department";
import { Organisation } from "../../model/Organisation";

export interface ICollege extends Document, Organisation {}

class College extends Organisation {
  constructor(
    name: string,
    address: string,
    contactNo: number,
    websiteUrl: string,
    location: string,
    constactEmail: string
  ) {
    super(name, address, contactNo, websiteUrl, location, constactEmail);
  }
}
