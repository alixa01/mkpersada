import type { NewsData } from "@/types/news";
import type { News } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function getNews(): Promise<NewsData[]> {
  const rows = await prisma.news.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return mapToNewsDataList(rows);
}

export async function getLatestNews(limit: number): Promise<NewsData[]> {
  const rows = await prisma.news.findMany({
    orderBy: { publishedAt: "desc" },
    take: limit,
  });

  return mapToNewsDataList(rows);
}

export async function getNewsBySlug(slug: string): Promise<NewsData | null> {
  const row = await prisma.news.findUnique({
    where: { slug },
  });
  if (!row) return null;

  return mapToNewsData(row);
}

function mapToNewsDataList(rows: News[]): NewsData[] {
  return rows.map(mapToNewsData);
}

function mapToNewsData(row: News): NewsData {
  const published = new Date(row.publishedAt);

  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    category: row.category,
    imageUrls: row.imageUrls,
    excerpt: row.excerpt,
    body: row.body,
    publishedAt: published.toISOString(),
    dateLabel: new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(published),
  };
}
