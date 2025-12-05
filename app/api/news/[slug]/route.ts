import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// get 1 news dari slug
export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }

  try {
    const news = await prisma.news.findUnique({ where: { slug: slug } });

    if (!news) {
      return NextResponse.json({ message: "News not found." }, { status: 404 });
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch news." },
      { status: 500 }
    );
  }
}

// patch news dari slug
export async function PATCH(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }
  try {
    const data = await req.json();

    if (data.slug) delete data.slug;

    const updated = await prisma.news.update({
      where: { slug: slug },
      data,
    });

    return NextResponse.json(updated);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error) {
      const e = error as { code?: string };

      if (e.code === "P2025") {
        return NextResponse.json(
          { message: "News not found." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "Failed to update news." },
        { status: 500 }
      );
    }
  }
}

// delete news dari slug
export async function DELETE(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }
  try {
    await prisma.news.delete({ where: { slug: slug } });

    return NextResponse.json(
      { message: "News deleted successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error) {
      const e = error as { code?: string };

      if (e.code === "P2025") {
        return NextResponse.json(
          { message: "News not found." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "Failed to delete news." },
        { status: 500 }
      );
    }
  }
}
