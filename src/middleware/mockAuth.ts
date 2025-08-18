import { Request, Response, NextFunction } from "express";

export function mockAuth(req: Request, _res: Response, next: NextFunction) {
  const header = (req.headers["x-mock-user"] as string) || "";
  console.log(header);

  if (header) {
    try {
      (req as any).user = JSON.parse(header);
    } catch {
      // If header is just an id string, create a minimal object
      (req as any).user = {
        uid: header,
        email: `${header}@example.com`,
        role: header,
      };
    }
  }
  next();
}
