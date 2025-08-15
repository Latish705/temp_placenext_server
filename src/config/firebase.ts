import * as admin from "firebase-admin";

const FIREBASE_CRED = JSON.parse((process.env.FIREBASE_CRED as string) || "{}");

if (!FIREBASE_CRED) {
  console.error("FIREBASE_CRED is not defined in environment variables.");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(FIREBASE_CRED),
});

export default admin;
