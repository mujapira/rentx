import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="h-full min-h-[calc(100vh-80px)] bg-background-darkened px-[116px]">
      <div className="flex items-center justify-between w-full pb-6 pt-11">
        <Skeleton className="w-[400px] h-[40px] rounded-full" />

        <div className="flex items-center gap-5">
          <div className="flex flex-col">
            <Skeleton className="w-[113px] h-[40px] rounded-full" />
          </div>
          <div className="flex items-center justify-center">
            <Skeleton className="w-[22px] h-[22px]" />
          </div>
          <div className="flex flex-col">
            <Skeleton className="w-[113px] h-[40px] rounded-full" />
          </div>

          <Skeleton className="w-[48px] h-[48px]" />

          <div className="border-l border-solid border-[#DEDEE3] h-6 my-auto"></div>

          <Skeleton className="w-[48px] h-[48px]" />
        </div>
      </div>
    </div>
  );
}
