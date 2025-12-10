import AboutUsSection from "@/components/home/AboutUsSection/AboutUsSection";
import ClientsPartnersSection from "@/components/home/ClientsPartnersSection";
import NewsRoomSection from "@/components/home/NewsRoomSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import VisionProject from "@/components/home/VisionProject";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import { getLatestNews } from "@/lib/newsApi";
import { notFound } from "next/navigation";
import type { NewsRoomData } from "@/types/news";

export const revalidate = 600;

export default async function Home() {
  const latestNews = await getLatestNews(5);
  if (!latestNews) {
    notFound();
  }

  const initialNews: NewsRoomData[] = latestNews.map((item) => ({
    title: item.title,
    slug: item.slug,
    date: item.dateLabel,
    category: item.category,
    imageUrls: item.imageUrls,
  }));

  return (
    <>
      <Navbar variant="scaleOut" />
      <HeroSection />
      <AboutUsSection />
      <VisionProject />
      <ClientsPartnersSection />
      <NewsRoomSection initialNews={initialNews} />
      <ContactUsSection />
    </>
  );
}
