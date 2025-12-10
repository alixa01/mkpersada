import type { News as PrismaNews } from "@prisma/client";

export type NewsDB = PrismaNews;

export type NewsData = {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrls: string[];
  excerpt: string;
  body: string;
  publishedAt: string;
  dateLabel: string;
};

export type NewsCardData = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrls: string[];
  slug: string;
};

export type NewsRoomData = {
  title: string;
  slug: string;
  date: string;
  category: string;
  imageUrls: string[];
};
