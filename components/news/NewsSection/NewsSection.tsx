"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NewsCard from "../NewsCard";
import SortCategories from "../SortCategories";
import type { NewsData, NewsCardData } from "@/types/news";

const PAGE_SIZE = 5;

type SortOption = "Newest" | "Oldest" | "Title";

export default function NewsSection({
  initialNews,
}: {
  initialNews: NewsData[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("Newest");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(initialNews.map((item) => item.category))),
    ],
    [initialNews]
  );

  const processedNews = useMemo(() => {
    let data = [...initialNews];

    if (selectedCategory !== "All") {
      data = data.filter((item) => item.category === selectedCategory);
    }

    data.sort((a, b) => {
      if (sortBy === "Newest" || sortBy === "Oldest") {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return sortBy === "Newest" ? dateB - dateA : dateA - dateB;
      }
      return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
    });

    return data;
  }, [initialNews, selectedCategory, sortBy]);

  const totalPages = Math.max(1, Math.ceil(processedNews.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  const start = (safePage - 1) * PAGE_SIZE;
  const currentNews = processedNews.slice(start, start + PAGE_SIZE);

  const currentItems: NewsCardData[] = currentNews.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.excerpt,
    date: item.dateLabel,
    category: item.category,
    image: item.imageUrl,
    slug: item.slug,
  }));

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    handlePageChange(1);
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    handlePageChange(1);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", newPage.toString());
    }

    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;
    router.push(newUrl, { scroll: true });
  };

  if (!processedNews.length) {
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
          onCategoryChange={handleCategoryChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />
      </div>

      <div className="lg:w-[70%] flex flex-col gap-2 lg:py-6 lg:pr-6 lg:border-r lg:border-slate-300/20">
        <NewsCard items={currentItems} />

        <div className="flex justify-between items-center pt-4 text-sm text-slate-200">
          <button
            type="button"
            onClick={() => handlePageChange(Math.max(1, safePage - 1))}
            disabled={safePage === 1}
            className="px-3 py-1 rounded border border-slate-500/60 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700/30 transition-colors">
            Prev
          </button>

          <span>
            Page {safePage} of {totalPages}
          </span>

          <button
            type="button"
            onClick={() => handlePageChange(Math.min(totalPages, safePage + 1))}
            disabled={safePage === totalPages}
            className="px-3 py-1 rounded border border-slate-500/60 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700/30 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
