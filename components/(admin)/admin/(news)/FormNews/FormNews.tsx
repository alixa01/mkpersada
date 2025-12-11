"use client";

import { useState } from "react";
import EditorSection from "./Editor";

export default function FormNews() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          excerpt,
          contentHtml,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error("Error", data);
        return;
      }

      setTitle("");
      setCategory("");
      setExcerpt("");
      setContentHtml("");
      alert("News submitted!");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="w-[50%]">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-2 py-2 focus:outline-none focus:ring-0 border rounded-xl shadow-sm sm:text-sm mb-2"
          placeholder="Enter news title..."
        />

        <label className="block text-sm font-medium text-slate-700 mb-1">
          Category
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full px-2 py-2 focus:outline-none focus:ring-0 border rounded-xl shadow-sm sm:text-sm"
          placeholder="Enter news category..."
        />

        <label className="block text-sm font-medium text-slate-700 mb-1">
          Excerpt
        </label>
        <input
          type="text"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="mt-1 block w-full px-2 py-2 focus:outline-none focus:ring-0 border rounded-xl shadow-sm sm:text-sm"
          placeholder="Enter news excerpt..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Content
        </label>
        <EditorSection value={contentHtml} onChange={setContentHtml} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 rounded-lg bg-[#194670] text-white text-sm font-medium hover:bg-[#143657]">
        {isSubmitting ? "Submitting..." : "Submit News"}
      </button>
    </form>
  );
}
