"use client";

import { useEffect, useState } from "react";
import NewsContent from "./NewsContent";
import TableContent from "./TableContent";

type NewsData = {
  excerpt: string;
  body: string;
};

type Heading = {
  id: string;
  text: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function NewsWithTOC({ news }: { news: NewsData }) {
  const [htmlWithIds, setHtmlWithIds] = useState(news.body);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const container = document.createElement("div");
    container.innerHTML = news.body;

    const result: Heading[] = [];

    container.querySelectorAll("h2").forEach((el, index) => {
      let id = el.id;

      if (!id) {
        const text = el.textContent || `section-${index + 1}`;
        id = slugify(text) || `section-${index + 1}`;
        el.id = id;
      }

      result.push({
        id,
        text: el.textContent || "",
      });
    });

    setHtmlWithIds(container.innerHTML);
    setHeadings(result);
  }, [news.body]);

  return (
    <div className="mx-auto max-w-7xl lg:pb-8 pb-5 px-6 lg:px-8 flex flex-row">
      <div className="w-full lg:w-[80%] mr-4">
        <NewsContent news={{ excerpt: news.excerpt, body: htmlWithIds }} />
      </div>

      <div className="w-[20%] hidden lg:block border-l border-slate-300/80 pl-4">
        <TableContent headings={headings} />
      </div>
    </div>
  );
}
