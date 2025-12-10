import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import type { NewsCardData } from "@/types/news";

export default function NewsCard({ items }: { items: NewsCardData[] }) {
  return (
    <>
      {/* news card */}
      {items.map((item) => (
        <Link href={`/news/${item.slug}`} key={item.id}>
          <div className="flex flex-col md:flex-row gap-6 rounded-xl border-0 border-b border-slate-200/20 py-4 px-2 hover:cursor-pointer">
            {/* right: image */}
            <div className="basis-[20%] md:order-2">
              <div className="relative w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[1/1] rounded-lg overflow-hidden">
                <Image
                  src={item.imageUrls ? item.imageUrls[0] : `${item.slug}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* left content: date,title,desc,category */}
            <div className="basis-[80%]">
              <p className="text-xs text-slate-400">{item.date}</p>
              <h3 className="text-xl font-semibold text-white mt-2 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-300 mb-4 text-sm">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="px-2 py-0 bg-slate-100/80 text-[#194670] font-medium rounded-full text-xs pointer-events-none">
                  {item.category}
                </Badge>
              </div>
            </div>
          </div>
        </Link>
      ))}

      {/* grid overlay */}
      {/* <div className="absolute inset-0 bg-grid-white-soft-big opacity-40 pointer-events-none [mask-image:radial-gradient(circle,black_60%,transparent_100%)]" /> */}
    </>
  );
}
