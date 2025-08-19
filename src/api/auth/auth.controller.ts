import { NextFunction, Request, Response } from "express";
import { StudentAuthStrategy } from "../../paterns/strategy/studentAuth.strategy";
import UserModel from "../../models/user.model";
import StudentModel from "../../models/student.model";
import { CourseType, UserRole } from "../../models/enums";
import { ICollege } from "../../models/college.model";
import { IDepartment } from "../../models/department.model";

export const studentSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    // @ts-ignore
    const user = req.user;
    const { firebaseId, email } = user;

    const dbUser = await UserModel.findOne({ firebaseId: firebaseId });
    // also need to check is someone with the mail this is signined as facult or what
    // const dbFaculty = await UserModel.findOne({ email });

    if (!dbUser) {
      return res.status(200).json({
        success: true,
        message: "User doesn't exists",
        isFirstSignin: true,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User already exists",
        isFirstSignin: false,
      });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const studentSignin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    //@ts-ignore
    const user = req.user;

    const dbStudent = await UserModel.findOne({ firebaseId: user.uid });

    if (!dbStudent) {
      return res.status(200).json({
        success: true,
        message: "User does not already exists",
        isFirstSignin: true,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User already exists",
        isFirstSignin: false,
      });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

type expectedFields = {
  sem1_grade: number;
  sem2_grade: number;
  sem3_grade: number;
  sem4_grade: number;
  sem5_grade: number | undefined;
  sem6_grade: number | undefined;
  sem7_grade: number | undefined;
  sem8_grade: number | undefined;
  sem1_marksheet: File;
  sem2_marksheet: File;
  sem3_marksheet: File;
  sem4_marksheet: File;
  sem5_marksheet: File | undefined;
  sem6_marksheet: File | undefined;
  sem7_marksheet: File | undefined;
  sem8_marksheet: File | undefined;
  alternatePhone: number;
  alternateEmail: string;
  aadharNo: number;
  panNo: string;
  courseType: CourseType;
  collegeId: ICollege["_id"];
  departmentId: IDepartment["_id"];
  githubLink: string;
  leetcode: string;
  resume: File;
  prefferedLocation: string;
};

export const studentRegistration = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    // we can also generalize the user type later
    const user = (req as any).user;
    if (!user || !user.uid) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const body = req.body || {};

    const toNumber = (v: any) => {
      if (v === undefined || v === null || v === "") return undefined;
      const n = Number(v);
      return Number.isNaN(n) ? undefined : n;
    };

    const toCourseType = (v: string): CourseType | undefined => {
      // Normalize input to uppercase and trim spaces
      const normalized = v?.toUpperCase().trim();
      switch (normalized) {
        case CourseType.BE:
          return CourseType.BE;
        case CourseType.BTECH:
          return CourseType.BTECH;
        case CourseType.MCA:
          return CourseType.MCA;
        case CourseType.MTECH:
          return CourseType.MTECH;
        case CourseType.PHD:
          return CourseType.PHD;
        default:
          return undefined;
      }
    };

    // our correct data format is yyyy-mm-dd
    console.log(toCourseType(body.courseType));
    // Validate date format (expects 'YYYY-MM-DD')
    const isValidDate = (dateStr: string) => {
      // Simple regex for 'YYYY-MM-DD'
      return /^\d{4}-\d{2}-\d{2}$/.test(dateStr) && !isNaN(Date.parse(dateStr));
    };
    console.log(
      body.dob && isValidDate(body.dob) ? new Date(body.dob) : undefined
    );

    const payload = {
      sem1_grade: toNumber(body.sem1_grade),
      sem2_grade: toNumber(body.sem2_grade),
      sem3_grade: toNumber(body.sem3_grade),
      sem4_grade: toNumber(body.sem4_grade),
      sem5_grade: toNumber(body.sem5_grade),
      sem6_grade: toNumber(body.sem6_grade),
      sem7_grade: toNumber(body.sem7_grade),
      sem8_grade: toNumber(body.sem8_grade),
      alternatePhone: body.alternatePhone
        ? String(body.alternatePhone)
        : undefined,
      alternateEmail: body.alternateEmail,
      aadharNo: body.aadharNo ? String(body.aadharNo) : undefined,
      panNo: body.panNo,
      courseType: toCourseType(body.courseType),
      collegeId: body.collegeId,
      departmentId: body.departmentId,
      githubLink: body.githubLink,
      leetcode: body.leetcode,
      prefferedLocation: body.prefferedLocation,
      fullName: body.fullName || body.name,
      phoneNumber: body.phoneNumber || undefined,
      dob: body.dob ? new Date(body.dob) : undefined,

      year: body.year,
    };

    // file lookup helper (works with multer single/fields or client-sent URLs)
    const getFileValue = (field: string) => {
      const anyReq = req as any;
      // multer: req.files can be object { fieldName: [file,...] } or array
      if (anyReq.files) {
        if (Array.isArray(anyReq.files)) {
          const f = anyReq.files.find((x: any) => x.fieldname === field);
          if (f) return f.path || f.filename || f.location || f.url;
        } else if (anyReq.files[field]) {
          const f = anyReq.files[field];
          const fileObj = Array.isArray(f) ? f[0] : f;
          return (
            fileObj?.path ||
            fileObj?.filename ||
            fileObj?.location ||
            fileObj?.url
          );
        }
      }
      // single file middleware
      if ((anyReq as any).file && (anyReq as any).file.fieldname === field) {
        const f = (anyReq as any).file;
        return f.path || f.filename || f.location || f.url;
      }
      // fallback: client may send url/string in body
      return body[field];
    };

    const files = {
      sem1_marksheet: getFileValue("sem1_marksheet"),
      sem2_marksheet: getFileValue("sem2_marksheet"),
      sem3_marksheet: getFileValue("sem3_marksheet"),
      sem4_marksheet: getFileValue("sem4_marksheet"),
      sem5_marksheet: getFileValue("sem5_marksheet"),
      sem6_marksheet: getFileValue("sem6_marksheet"),
      sem7_marksheet: getFileValue("sem7_marksheet"),
      sem8_marksheet: getFileValue("sem8_marksheet"),
      resume: getFileValue("resume"),
    };

    // required keys and validation
    const requiredKeys = [
      "sem1_grade",
      "sem2_grade",
      "sem3_grade",
      "sem4_grade",
      "sem1_marksheet",
      "sem2_marksheet",
      "sem3_marksheet",
      "sem4_marksheet",
      "alternatePhone",
      "alternateEmail",
      "aadharNo",
      "panNo",
      "courseType",
      "collegeId",
      "departmentId",
      "resume",
      "prefferedLocation",
      "dob",
      "courseType",
      "year",
    ];

    const missing: string[] = [];
    for (const key of requiredKeys) {
      if (key.endsWith("_marksheet") || key === "resume") {
        if (!files[key as keyof typeof files]) missing.push(key);
      } else {
        const val = (payload as any)[key];
        if (
          val === undefined ||
          val === null ||
          (typeof val === "string" && val.trim() === "")
        ) {
          missing.push(key);
        }
      }
    }

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields for student registration.",
        missingFields: missing,
      });
    }

    // Prevent duplicate student record
    const existing = await StudentModel.findOne({ firebaseId: user.uid });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Student profile already exists",
        data: existing,
      });
    }
    console.log("payload", payload);

    // Build document to create (only include known fields)
    const studentDoc: any = {
      firebaseId: user.uid,
      email: user.email || user.emailAddress || "",
      fullName: payload.fullName,
      phoneNumber: payload.phoneNumber || payload.alternatePhone,
      sem1_grade: payload.sem1_grade,
      sem2_grade: payload.sem2_grade,
      sem3_grade: payload.sem3_grade,
      sem4_grade: payload.sem4_grade,
      sem5_grade: payload.sem5_grade,
      sem6_grade: payload.sem6_grade,
      sem7_grade: payload.sem7_grade,
      sem8_grade: payload.sem8_grade,
      sem1_marksheet: files.sem1_marksheet,
      sem2_marksheet: files.sem2_marksheet,
      sem3_marksheet: files.sem3_marksheet,
      sem4_marksheet: files.sem4_marksheet,
      sem5_marksheet: files.sem5_marksheet,
      sem6_marksheet: files.sem6_marksheet,
      sem7_marksheet: files.sem7_marksheet,
      sem8_marksheet: files.sem8_marksheet,
      alternatePhone: payload.alternatePhone,
      alternateEmail: payload.alternateEmail,
      aadharNo: payload.aadharNo,
      panNo: payload.panNo,
      courseType: payload.courseType,
      collegeId: payload.collegeId,
      departmentId: payload.departmentId,
      githubLink: payload.githubLink,
      leetcode: payload.leetcode,
      resume: files.resume,
      prefferedLocation: payload.prefferedLocation,
      isProfileCompleted: true,
      year: payload.year,
      dob: payload.dob,
    };

    const created = await StudentModel.create(studentDoc);

    // ensure user role is STUDENT
    try {
      await UserModel.findOneAndUpdate(
        { firebaseId: user.uid },
        { role: UserRole.STUDENT },
        { new: true }
      );
    } catch (e) {
      // non-fatal - log and continue
      console.warn(
        "Warning: failed to update user role for student",
        (e as any)?.message
      );
    }

    return res.status(201).json({ success: true, data: created });
  } catch (error: any) {
    console.error("Error in studentRegistration", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
