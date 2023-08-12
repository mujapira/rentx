import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="h-full min-h-[calc(100vh-80px)] bg-background-darkened px-[116px]">
      <div className="flex flex-col items-center justify-between w-full pb-6 pt-11">
        <Skeleton className="w-full h-10"/>
        <h1>Oi pedro</h1>
        <h1>Oi lel</h1>
      </div>
    </div>
  );
}
