import type { NewsData, NewsDataCreator } from "@/types/news";
import type { News } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { DATE_FORMATTER } from "./formatters";

export async function getNews(): Promise<NewsData[]> {
  const news = await prisma.news.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return news.map(mapToNewsData);
}

export async function getLatestNews(limit: number): Promise<NewsData[]> {
  const news = await prisma.news.findMany({
    orderBy: { publishedAt: "desc" },
    take: limit,
  });

  return news.map(mapToNewsData);
}

export async function getNewsBySlug(
  slug: string
): Promise<NewsDataCreator | null> {
  const news = await prisma.news.findUnique({
    where: { slug },
    include: {
      creator: {
        select: { id: true, name: true, profilePic: true },
      },
    },
  });

  if (!news) return null;

  return news ? mapToNewsDataCreator(news) : null;
}

function formatDate(date: Date): { iso: string; label: string } {
  return {
    iso: date.toISOString(),
    label: DATE_FORMATTER.format(date),
  };
}

function mapToNewsData(news: News): NewsData {
  const published = formatDate(new Date(news.publishedAt));

  return {
    id: news.id,
    title: news.title,
    slug: news.slug,
    category: news.category,
    imageUrls: news.imageUrls,
    excerpt: news.excerpt,
    body: news.body,
    publishedAt: published.iso,
    dateLabel: published.label,
  };
}

function mapToNewsDataCreator(
  news: News & { creator: { id: string; name: string; profilePic: string } }
): NewsDataCreator {
  const published = formatDate(new Date(news.publishedAt));

  return {
    id: news.id,
    title: news.title,
    slug: news.slug,
    category: news.category,
    imageUrls: news.imageUrls,
    excerpt: news.excerpt,
    body: news.body,
    publishedAt: published.iso,
    dateLabel: published.label,
    creator: news.creator,
  };
}
