"use client";

import { useState } from "react";
import EditorSection from "./Editor";

export default function FormNews() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, body });
    // logic form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="w-[50%]">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
          placeholder="Enter news title..."
        />
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Category
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
          placeholder="Enter news category..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Content
        </label>
        <EditorSection value={body} onChange={setBody} />
      </div>

      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-[#194670] text-white text-sm font-medium hover:bg-[#143657]">
        Publish News
      </button>
    </form>
  );
}
