import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseCookies, verifyJwt } from "@/lib/auth";
import { JwtPayload } from "@/types/auth";

// get news
export async function GET() {
  try {
    const allNews = await prisma.news.findMany({
      orderBy: { publishedAt: "desc" },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            profilePic: true,
          },
        },
      },
    });

    return NextResponse.json(allNews);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch news." },
      { status: 500 }
    );
  }
}

// post news
export async function POST(req: Request) {
  try {
    const cookieHeader = req.headers.get("cookie") ?? "";
    const cookies = parseCookies(cookieHeader);
    const token = cookies["token"];
    if (!token)
      return NextResponse.json({ message: "Unauthorized", status: 401 });

    const payload = (await verifyJwt(token)) as JwtPayload | null;
    if (!payload || !payload.sub) {
      return NextResponse.json({ message: "Invalid token", status: 401 });
    }

    console.log(payload);

    const body = await req.json();

    const { title, category, excerpt, contentHtml } = body;

    console.log(body);

    if (!title || !category || !excerpt || !contentHtml) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const imageUrls = extractImageUrls(contentHtml);

    // const ifSupabaseUrl = imageUrls.includes("supabase.co/storage");
    // if (!ifSupabaseUrl) {
    //   console.warn("Image URL is not from Supabase storage.");
    // }

    const slug =
      body.slug ??
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const newNews = await prisma.news.create({
      data: {
        title,
        slug,
        category,
        imageUrls: imageUrls.length ? imageUrls : [],
        excerpt,
        body: contentHtml,
        creatorId: payload.sub,
      },
      include: {
        creator: {
          select: {
            id: true,
            username: true,
            name: true,
            profilePic: true,
          },
        },
      },
    });

    return NextResponse.json(newNews, { status: 201 });
  } catch (error: unknown) {
    console.error(error);
    if (error && typeof error === "object" && "code" in error) {
      const e = error as { code?: string };

      if (e.code === "P2002") {
        return NextResponse.json(
          { message: "Slug already exists." },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { message: "Failed to create news." },
        { status: 500 }
      );
    }
  }
}

function extractImageUrls(html: string): string[] {
  const urls = new Set<string>();
  const regex = /<img[^>]+src=["']([^"']+)["']/g;

  let match;
  while ((match = regex.exec(html)) !== null) {
    urls.add(match[1]);
  }

  return Array.from(urls);
}
