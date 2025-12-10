import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// get news
export async function GET() {
  try {
    const allNews = await prisma.news.findMany({
      orderBy: { publishedAt: "desc" },
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
    const body = await req.json();

    const { title, category, imageUrls, excerpt, body: content } = body;

    if (!title || !category || !imageUrls || !excerpt || !content) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const ifSupabaseUrl = imageUrls.includes("supabase.co/storage");
    if (!ifSupabaseUrl) {
      console.warn("Image URL is not from Supabase storage.");
    }

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
        imageUrls,
        excerpt,
        body: content,
      },
    });

    return NextResponse.json(newNews, { status: 201 });
  } catch (error: unknown) {
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
