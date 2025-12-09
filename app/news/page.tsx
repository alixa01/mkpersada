import { Suspense } from "react";
import PageHero from "@/components/sections/PageHero";
import NewsSection from "@/components/news/NewsSection";
import { getNews } from "@/lib/newsApi";
import { notFound } from "next/navigation";

export const revalidate = 600; // Revalidate every 60 seconds

export default async function NewsPage() {
  const allNews = await getNews();
  if (!allNews) notFound();

  return (
    <main id="news" className="relative overflow-hidden">
      <section id="hero" className="w-full relative">
        <PageHero
          title="News"
          subtext="Stay updated with the latest news and announcements."
        />
      </section>
      <section
        id="news"
        className="bg-gradient-to-r from-[#194670] to-[#0C2741] border-t border-slate-300/20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 sm:py-8 lg:py-0">
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                <div className="text-slate-300">Loading news...</div>
              </div>
            }>
            <NewsSection initialNews={allNews} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
