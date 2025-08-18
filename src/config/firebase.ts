import * as admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

const FIREBASE_CRED = JSON.parse(
  (process.env.FIREBASE_CREDENTIALS as string) || "{}"
);

if (!FIREBASE_CRED) {
  console.error("FIREBASE_CRED is not defined in environment variables.");
  process.exit(1);
}

console.log("FIREBASE_CRED:", FIREBASE_CRED);

admin.initializeApp({
  credential: admin.credential.cert(FIREBASE_CRED),
});

export default admin;
