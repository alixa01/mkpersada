"use client";

import { motion } from "framer-motion";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";

const clients: LogoItem[] = [
  { src: "/clients/APGWI.png", alt: "APGWI" },
  { src: "/clients/BSP.png", alt: "BSP" },
  { src: "/clients/EMP.png", alt: "EMP" },
  { src: "/clients/ORMAT.png", alt: "ORMAT" },
  { src: "/clients/PDSI.png", alt: "PDSI" },
  { src: "/clients/PEP.png", alt: "PEP" },
  { src: "/clients/PHE.png", alt: "PHE" },
  { src: "/clients/PRIMA-ENERGI.png", alt: "PRIMA ENERGI" },
  { src: "/clients/SPRL.png", alt: "SPRL" },
  { src: "/clients/TATELY-NV.png", alt: "TATELY NV" },
];

const partners: LogoItem[] = [
  { src: "/partners/ATMOS.png", alt: "ATMOS" },
  { src: "/partners/BAKER-HUGHES.png", alt: "BAKER HUGHES" },
  { src: "/partners/BBT.png", alt: "BBT" },
  { src: "/partners/DHVI.png", alt: "DHVI" },
  { src: "/partners/GOWELL.png", alt: "GOWELL" },
  { src: "/partners/LS.png", alt: "LS" },
  { src: "/partners/REXROTH.png", alt: "REXROTH" },
  { src: "/partners/SHANGDONG.png", alt: "SHANGDONG" },
];

export default function ClientsPartnersSection() {
  return (
    <section
      id="clients-partners"
      className="h-[500px] bg-[linear-gradient(135deg,#e6f0fa_0%,#c9dff2_40%,#b1cee7_100%)]
 text-[#194670] relative overflow-hidden">
      {/* content */}
      <div className="relative h-full  flex flex-col gap-10 lg:py-16 py-10 px-6 lg:px-8 mx-auto max-w-7xl">
        {/* clients */}
        <div className="flex flex-1 flex-col gap-6 overflow-hidden">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}>
            Our Clients
          </motion.h2>
          <div className="w-full h-full flex items-center z-10">
            <LogoLoop
              logos={clients}
              speed={80}
              direction="left"
              logoHeight={60}
              gap={80}
              hoverSpeed={5}
              scaleOnHover
              ariaLabel="Our Clients"
            />
          </div>
        </div>

        {/* partners */}
        <div className="flex flex-1 flex-col gap-6 overflow-hidden">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}>
            Our Partners
          </motion.h2>
          <div className="w-full h-full flex items-center z-10">
            <LogoLoop
              logos={partners}
              speed={80}
              direction="right"
              logoHeight={60}
              gap={80}
              hoverSpeed={5}
              scaleOnHover
              ariaLabel="Our Partners"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-primary-blue opacity-20 pointer-events-none [mask-image:radial-gradient(circle,black_20%,transparent_70%)]" />

      {/* blob shape */}
      {/* <div className="pointer-events-none absolute -right-20 top-16 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] bg-[#194670]/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -left-20 bottom-20 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] bg-[#194670]/20 blur-3xl rounded-full" /> */}
    </section>
  );
}
