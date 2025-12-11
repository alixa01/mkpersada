import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { username, password, name, profilePic } = (await req.json()) as {
    username: string;
    password: string;
    name: string;
    profilePic: string;
  };

  if (!username || !password || !name || !profilePic) {
    return NextResponse.json({
      message: "Missing field",
      status: 400,
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      password: hash,
      name,
      profilePic,
    },
  });

  return NextResponse.json({
    message: "User created",
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
      profilePic: user.profilePic,
    },
    status: 201,
  });
}
