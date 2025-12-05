import PageHero from "@/components/sections/PageHero";
import NewsSection from "@/components/news/NewsSection";
import type { News } from "@prisma/client";

async function getNews(): Promise<News[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = (await res.json()) as News[];
  return data;
}

type NewsForSection = {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  body: string;
  publishedAtISO: string;
  dateLabel: string;
};

export default async function NewsPage() {
  const data = await getNews();

  const initialNews: NewsForSection[] = data.map((item) => {
    const published = new Date(item.publishedAt);

    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      category: item.category,
      imageUrl: item.imageUrl,
      excerpt: item.excerpt,
      body: item.body,
      publishedAtISO: published.toISOString(),
      dateLabel: new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(published),
    };
  });

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
          <NewsSection initialNews={initialNews} />
        </div>
      </section>
    </main>
  );
}
