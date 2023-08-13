import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  //acho que n funciona
  return (
    <>
      <div className="flex items-center justify-between h-20 ml-0 sm:ml-20 bg-background px-4 xl:px-[116px]">
        <Skeleton className="w-[50px] h-[28px]" />

        <div className="flex flex-row items-center gap-4">
          <Skeleton className="w-[80px] h-[24px]" />

          <Skeleton className="w-12 rounded-full aspect-square" />
        </div>
      </div>
    </>
  );
}
