import AboutUsSection from "@/components/home/AboutUsSection/AboutUsSection";
import ClientsPartnersSection from "@/components/home/ClientsPartnersSection";
import NewsRoomSection from "@/components/home/NewsRoomSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import VisionProject from "@/components/home/VisionProject";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar variant="scaleOut" />
      <HeroSection />
      <AboutUsSection />
      <VisionProject />
      <ClientsPartnersSection />
      <NewsRoomSection />
      <ContactUsSection />
    </>
  );
}
