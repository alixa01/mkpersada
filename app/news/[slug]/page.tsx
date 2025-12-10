import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NewsHeroDetail from "@/components/news/[slug]/NewsHeroDetail";
import NewsHeading from "../../../components/news/[slug]/NewsHeading/NewsHeading";
import NewsWithTOC from "@/components/news/[slug]/NewsWithTOC";
import type { NewsData } from "@/types/news";
import { getNewsBySlug } from "@/lib/newsApi";

export const revalidate = 600;

async function getNews(slug: string): Promise<NewsData> {
  const news = await getNewsBySlug(slug);
  if (!news) {
    notFound();
  }
  return news;
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNews(slug);

  return (
    <main className="relative overflow-hidden">
      {/* hero / header */}
      <section className="w-full relative">
        <NewsHeroDetail
          image={news.imageUrls ? news.imageUrls[0] : `${news.slug}`}
        />
      </section>

      <section className="bg-slate-100 text-slate-800">
        <div className="mx-auto max-w-7xl lg:pt-8 pt-5 px-6 lg:px-8">
          {/* heading */}
          <NewsHeading
            category={news.category}
            title={news.title}
            publishedDate={news.dateLabel}
          />
        </div>
      </section>

      {/* content */}
      <section className="bg-slate-100 text-slate-800">
        <NewsWithTOC news={news} />
      </section>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNews(slug);

  return {
    title: news.title,
    description: news.excerpt,
  };
}
