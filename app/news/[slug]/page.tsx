import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NewsHeroDetail from "@/components/news/[slug]/NewsHeroDetail";
import NewsContent from "@/components/news/[slug]/NewsWithTOC/NewsContent";
import TableContent from "@/components/news/[slug]/NewsWithTOC/TableContent";
import NewsHeading from "../../../components/news/[slug]/NewsHeading/NewsHeading";
import NewsWithTOC from "@/components/news/[slug]/NewsWithTOC";

type NewsApi = {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

// get news dari slug
async function getNews(slug: string): Promise<NewsApi> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch news item");
  }

  const news = (await res.json()) as NewsApi;
  return news;
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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNews(slug);

  const publishedDate = new Date(news.publishedAt).toLocaleDateString("id-Id", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="relative overflow-hidden">
      {/* hero / header */}
      <section className="w-full relative">
        <NewsHeroDetail image={news.imageUrl} />
      </section>

      <section className="bg-slate-100 text-slate-800">
        <div className="mx-auto max-w-7xl lg:pt-8 pt-5 px-6 lg:px-8">
          {/* heading */}
          <NewsHeading
            category={news.category}
            title={news.title}
            publishedDate={publishedDate}
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
