import jwt from "jsonwebtoken";
import type { User } from "../../client/src/type";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export function generateToken(user: Omit<User, "password">): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "1d" });
}

