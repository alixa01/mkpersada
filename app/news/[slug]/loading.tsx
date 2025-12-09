import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[400px] w-full rounded-xl" />
      <div className="space-y-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[50%]" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="p-4">
      <SkeletonCard />
    </div>
  );
}
