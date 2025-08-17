import { Model } from "mongoose";
import { AuthStrategy } from "./auth.strategy";
import { IUser } from "../../models/user.model";
import { IStudent } from "../../models/student.model";

type StudentSignupParams = Omit<
  IStudent,
  keyof Document | "firebaseId" | "email"
> & {
  firebaseId: string;
  email: string;
};

export class StudentAuthStrategy
  implements AuthStrategy<StudentSignupParams, IStudent>
{
  constructor(
    private userModel: Model<IUser>,
    private studentModel: Model<IStudent>
  ) {}

  async signup(params: StudentSignupParams): Promise<IStudent> {
    const { firebaseId, email } = params;

    const existingUser = await this.userModel.findOne({ firebaseId });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const newStudent = await this.studentModel.create({
      ...params,
      email,
    });

    return newStudent;
  }

  async signin(params: any): Promise<any> {}

  async logout(params: any): Promise<void> {}
}
