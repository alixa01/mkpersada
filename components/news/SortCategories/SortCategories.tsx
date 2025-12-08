import { usePin768 } from "@/hooks/usePin768";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";
import { ArrowDownAZ, Calendar } from "lucide-react";

type SortOption = "Newest" | "Oldest" | "Title";

type SortCategoriesProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
};

export default function SortCategories({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: SortCategoriesProps) {
  const pinRef = usePin768();

  return (
    <>
      <div ref={pinRef} className="lg:py-6 lg:pl-6 h-full py-4 px-2">
        {/* sort by */}
        <div>
          <h1 className="text-white pb-2 font-medium">Sort by</h1>
          <Select
            value={sortBy}
            onValueChange={(value) => onSortChange(value as SortOption)}>
            <SelectTrigger className="w-[50%] lg:w-full bg-slate-800 text-white border border-slate-600">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 text-white border border-slate-600">
              <SelectGroup>
                <SelectLabel>
                  <span className="font-light text-sm">Sort options</span>
                </SelectLabel>

                <SelectItem value="Newest">
                  <span className="flex flex-row items-center gap-2 font-light text-sm">
                    <Calendar width={15} /> Date (Newest)
                  </span>
                </SelectItem>

                <SelectItem value="Oldest">
                  <span className="flex flex-row items-center gap-2 font-light text-sm">
                    <Calendar width={15} /> Date (Oldest)
                  </span>
                </SelectItem>

                <SelectItem value="Title">
                  <span className="flex flex-row items-center gap-2 font-light text-sm">
                    <ArrowDownAZ width={15} /> Title (A–Z)
                  </span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* categories */}
        <div>
          <h1 className="text-white pb-2 pt-6 font-medium">Categories</h1>
          <div>
            {categories.map((cat) => (
              <Badge
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-2 py-0 rounded-full text-xs mr-1 hover:bg-slate-800 cursor-default ${
                  selectedCategory === cat
                    ? "bg-slate-100 text-[#194670] font-semibold hover:bg-slate-100"
                    : "bg-slate-800 text-white"
                }`}>
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
