"use client";

import { useMemo, useState } from "react";
import NewsCard from "../NewsCard";
import SortCategories from "../SortCategories";
import type { NewsData, NewsCardData } from "@/types/news";

const CARD = 5;

export default function NewsSection({
  initialNews,
}: {
  initialNews: NewsData[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(initialNews.map((item) => item.category))),
    ],
    [initialNews]
  );

  const filteredNews =
    selectedCategory === "All"
      ? initialNews
      : initialNews.filter((item) => item.category === selectedCategory);

  const topNews = filteredNews.slice(0, CARD);

  const items: NewsCardData[] = topNews.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.excerpt,
    date: item.dateLabel,
    category: item.category,
    image: item.imageUrl,
    slug: item.slug,
  }));

  if (!items.length) {
    return (
      <div className="text-center text-slate-300 py-10">
        No news available in this category.
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-0">
      <div className="lg:w-[25%] lg:order-2">
        <SortCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <div className="lg:w-[70%] flex flex-col gap-2 lg:py-6 lg:pr-6 lg:border-r lg:border-slate-300/20">
        <NewsCard items={items} />
      </div>
    </div>
  );
}
