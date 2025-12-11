import { parseCookies, verifyJwt } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { AuthUser } from "../../../../types/auth";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie");
  const cookies = parseCookies(cookieHeader || "");
  const token = cookies["token"];

  if (!token) return NextResponse.json({ user: null });

  const payload = await verifyJwt(token);
  if (!payload) return NextResponse.json({ user: null });

  const user = await prisma.user.findUnique({
    where: {
      id: payload.sub,
    },
  });

  if (!user) return NextResponse.json({ user: null });

  const authUser: AuthUser = {
    id: user.id,
    username: user.username,
    name: user.name,
    profilePic: user.profilePic,
  };

  return NextResponse.json({ user: authUser });
}
