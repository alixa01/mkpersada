export default function NewsContent({
  news,
}: {
  news: { excerpt: string; body: string };
}) {
  return (
    <div>
      <p className="text-slate-800 text-base my-3 leading-relaxed">
        {news.excerpt}
      </p>
      {/* body dari Tiptap (HTML) */}
      <article
        className="news-body max-w-none prose-headings:text-slate-800 prose-p:text-slate-900 prose-li:marker:text-slate-950 prose-li:text-slate-950 prose-a:text-slate-800 prose-strong:text-slate-900 prose-h2:scroll-mt-24"
        dangerouslySetInnerHTML={{ __html: news.body }}
      />
    </div>
  );
}
