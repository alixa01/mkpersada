import { NewsDataCreator } from "@/types/news";
import Image from "next/image";

export default function NewsHeading({
  category,
  title,
  publishedDate,
  creator,
}: {
  category: string;
  title: string;
  publishedDate: string;
  creator: NewsDataCreator["creator"];
}) {
  return (
    <>
      {/* meta info: date + category */}
      <div className="pb-6 flex flex-col gap-4 text-sm text-slate-800 border-b border-slate-300/80">
        <span className="w-fit items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-100">
          {category}
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
          {title}
        </h2>
        <div className="flex flex-row gap-4">
          <div className="w-11 h-11 rounded-full overflow-hidden flex justify-center">
            <Image
              src={creator.profilePic}
              alt={creator.name}
              width={44}
              height={44}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <span className="text-xs md:text-sm font-semibold">
              {creator.name}
            </span>
            <span className="text-xs text-slate-600 font-normal">
              {publishedDate}
            </span>
          </div>
        </div>
      </div>
      {/* excerpt
      <p className="text-slate-800 text-base my-6 leading-relaxed">{excerpt}</p> */}
    </>
  );
}
