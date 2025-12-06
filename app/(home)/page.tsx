import AboutUsSection from "@/components/home/AboutUsSection/AboutUsSection";
import ClientsPartnersSection from "@/components/home/ClientsPartnersSection";
import NewsRoomSection from "@/components/home/NewsRoomSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import VisionProject from "@/components/home/VisionProject";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import { getNews } from "@/lib/newsApi";

export default async function Home() {
  const initialNews = await getNews();
  return (
    <>
      <Navbar variant="scaleOut" />
      <HeroSection />
      <AboutUsSection />
      <VisionProject />
      <ClientsPartnersSection />
      <NewsRoomSection
        initialNews={initialNews.map((item) => ({
          id: item.id,
          title: item.title,
          date: item.dateLabel,
          category: item.category,
          image: item.imageUrl,
          slug: item.slug,
        }))}
      />
      <ContactUsSection />
    </>
  );
}
