import { jwtVerify, SignJWT } from "jose";
import { serialize, parse } from "cookie";
import type { JwtPayload } from "@/types/auth";

const TOKEN_NAME = "token";
const MAX_AGE = 60 * 60 * 8; // 8 hours
const JWT_SECRET = process.env.JWT_SECRET;

const SECRET_KEY = new TextEncoder().encode(JWT_SECRET);

export async function signJwt(
  payload: Omit<JwtPayload, "exp">
): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(SECRET_KEY);
}

export async function verifyJwt(token: string): Promise<JwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload as unknown as JwtPayload;
  } catch (error) {
    return null;
  }
}

export function parseCookies(cookieHeader?: string) {
  return parse(cookieHeader ?? "");
}

export function setTokenCookie(token: string) {
  return serialize(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: MAX_AGE,
    sameSite: "lax",
    path: "/",
  });
}

export function removeTokenCookie(): string {
  return serialize(TOKEN_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
    path: "/",
  });
}
