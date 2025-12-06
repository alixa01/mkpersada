import type { NewsDB, NewsData } from "@/types/news";

export async function getNews(): Promise<NewsData[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = (await res.json()) as NewsDB[];

  return data.map((item) => {
    const published = new Date(item.publishedAt);

    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      category: item.category,
      imageUrl: item.imageUrl,
      excerpt: item.excerpt,
      body: item.body,
      publishedAt: published.toISOString(),
      dateLabel: new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(published),
    };
  });
}
