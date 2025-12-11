import { NextResponse } from "next/server";
import { removeTokenCookie } from "@/lib/auth";

export async function POST() {
  const res = NextResponse.json({
    message: "User logged out",
  });

  res.headers.append("Set-Cookie", removeTokenCookie());
  return res;
}
