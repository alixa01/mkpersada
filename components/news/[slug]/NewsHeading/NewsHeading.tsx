export default function NewsHeading({
  category,
  title,
  publishedDate,
}: {
  category: string;
  title: string;
  publishedDate: string;
}) {
  return (
    <>
      {/* meta info: date + category */}
      <div className="pb-6 flex flex-col gap-3 text-sm text-slate-800 border-b border-slate-300/80">
        <span className="w-fit items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-100">
          {category}
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
          {title}
        </h2>
        <span>{publishedDate}</span>
      </div>
      {/* excerpt
      <p className="text-slate-800 text-base my-6 leading-relaxed">{excerpt}</p> */}
    </>
  );
}
