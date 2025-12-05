import OurProjectSection from "@/components/home/OurProjectSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";

export default function VisionProject() {
  return (
    <section
      id="vision-project"
      className="relative bg-gradient-to-b from-[#2A5B8C] via-[#1F4A74] to-[#194670]">
      <VisionMissionSection />
      <OurProjectSection />
    </section>
  );
}
