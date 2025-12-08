"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { NewsRoomData } from "@/types/news";

export default function NewsRoomSection({
  initialNews,
}: {
  initialNews: NewsRoomData[];
}) {
  const newestNews: NewsRoomData = initialNews[0];
  const oldestNews: NewsRoomData[] = initialNews.slice(1);
  return (
    <section
      id="newsroom"
      className="min-h-fit bg-[radial-gradient(circle_at_50%_100%,#dbe4ec_0%,#f5f7fa_60%,#ffffff_100%)] relative overflow-hidden">
      {/* content */}
      <div className="lg:py-16 py-10 px-6 lg:px-8 mx-auto max-w-7xl h-full text-[#194670] flex flex-col">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Newsroom
          </h2>
          <p className="mt-4 text-gray-600">Latest updates from our team.</p>
        </motion.div>

        {/* button see all */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="my-4 flex justify-end">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="inline-flex">
            <Link
              href="/news"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#194670] px-5 py-2 text-sm font-medium text-slate-100 shadow-lg hover:bg-[#15365a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#194670]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              <span>See all news</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* news */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* newest news (left) */}
            <Link href={`/news/${newestNews.slug}`}>
              {" "}
              <motion.div
                className="relative aspect-square rounded-lg overflow-hidden z-10"
                initial="rest"
                whileHover="hover"
                animate="rest">
                {/* IMAGE */}
                <motion.div
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.08 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full">
                  <Image
                    src={newestNews.image}
                    alt={newestNews.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* OVERLAY*/}
                <motion.div
                  variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 z-20 bg-gradient-to-b from-[#194670]/30 to-[#194670]/50"
                />

                {/* TEXT */}
                <motion.div
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -10 },
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-x-0 bottom-0 px-4 pb-4 z-30 space-y-2">
                  <span className="inline-flex items-center gap-2 text-slate-100 text-sm">
                    <Calendar className="w-4 h-4" />
                    {newestNews.date}
                  </span>

                  <h2 className="text-slate-100 text-base md:text-lg font-semibold">
                    {newestNews.title}
                  </h2>

                  <span className="mx-1">
                    <Badge className="px-2 py-0 bg-slate-100/80 text-[#194670] font-medium rounded-full text-xs pointer-events-none">
                      {newestNews.category}
                    </Badge>
                  </span>
                </motion.div>
              </motion.div>
            </Link>

            {/* oldest news (right) */}
            <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {oldestNews.slice(0, 4).map((item, i) => (
                <Link key={i} href={`/news/${item.slug}`}>
                  <motion.div
                    className="relative aspect-square rounded-lg overflow-hidden"
                    initial="rest"
                    whileHover="hover"
                    animate="rest">
                    {/* IMAGE */}
                    <motion.div
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.08 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* OVERLAY */}
                    <motion.div
                      variants={{
                        rest: { opacity: 1 },
                        hover: { opacity: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 z-20 bg-gradient-to-b from-[#194670]/30 to-[#194670]/50"
                    />

                    {/* TEXT */}
                    <motion.div
                      variants={{
                        rest: { y: 0, opacity: 1 },
                        hover: { y: -10, opacity: 1 },
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute bottom-4 left-4 right-4 z-30">
                      <span className="flex items-center gap-2 text-slate-100 text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </span>

                      <h2 className="mt-1 text-slate-100 text-base md:text-sm font-semibold leading-snug">
                        {item.title}
                      </h2>

                      <span className="mx-1">
                        <Badge className="px-2 py-0 bg-slate-100/80 text-[#194670] font-medium rounded-full text-xs pointer-events-none">
                          {item.category}
                        </Badge>
                      </span>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* grid overlay */}
      {/* <div className="absolute inset-0 bg-grid-primary-blue opacity-20 pointer-events-none [mask-image:radial-gradient(circle,black_20%,transparent_90%)]" /> */}
      {/* blob shapes */}
      <div className="pointer-events-none absolute -right-16 -top-16 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] bg-shape/25 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] bg-shape/25 blur-3xl rounded-full" />
    </section>
  );
}
