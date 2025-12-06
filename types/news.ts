import type { News as PrismaNews } from "@prisma/client";

export type NewsDB = PrismaNews;

export type NewsData = {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  dateLabel: string;
};

export type NewsCardData = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  image: string;
};

export type NewsRoomData = {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
};
