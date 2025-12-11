import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signJwt, setTokenCookie } from "@/lib/auth";
import type { loginRequest } from "@/types/auth";

export async function POST(req: Request) {
  const body = (await req.json()) as loginRequest;
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({
      message: "Username or Password required",
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return NextResponse.json({
      message: "Username or Password invalid",
      status: 401,
    });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return NextResponse.json({
      message: "Username or Password invalid",
      status: 401,
    });
  }

  const token = await signJwt({
    sub: user.id,
    username: user.username,
  });

  const res = NextResponse.json(
    {
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        profilePic: user.profilePic,
      },
    },
    { status: 200 }
  );

  res.headers.append("Set-Cookie", setTokenCookie(token));
  return res;
}
