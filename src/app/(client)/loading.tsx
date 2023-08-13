"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";

export default function Loading() {
  const pathname = usePathname();
  const isHome = pathname === "/inicio";
  const isFilters = pathname === "/carros";

  return (
    <>
      {isHome && (
        <div className="flex flex-col items-start justify-start w-full bg-background-darkened h-full min-h-[calc(100vh-80px)] px-4 xl:px-[116px]">
          <>
            <div className="flex items-center justify-between w-full py-10 border-b border-text-label">
              <Skeleton className="w-1/4 h-10" />

              <Skeleton className="w-1/4 h-10" />
            </div>

            <div className="grid w-full grid-cols-1 gap-4 py-10 2xl:gap-24 md:grid-cols-2 2xl:grid-cols-3">
              <Skeleton className="flex items-center justify-center w-full h-full max-w-[470px] max-h-[325px]">
                <div className="w-[470px] h-[75px] 2xl:h-[325px]"></div>
              </Skeleton>
              <Skeleton className="flex items-center justify-center w-full h-full max-w-[470px] max-h-[325px]">
                <div className="w-[470px] h-[75px] 2xl:h-[325px]"></div>
              </Skeleton>
              <Skeleton className="flex items-center justify-center w-full h-full max-w-[470px] max-h-[325px]">
                <div className="w-[470px] h-[75px] 2xl:h-[325px]"></div>
              </Skeleton>
              <Skeleton className="flex items-center justify-center w-full h-full max-w-[470px] max-h-[325px]">
                <div className="w-[470px] h-[75px] 2xl:h-[325px]"></div>
              </Skeleton>
            
            </div>
          </>
        </div>
      )}

      {isFilters && (
        <div className="flex flex-col items-center justify-start w-full bg-background-darkened h-full min-h-[calc(100vh-80px)] px-4 xl:px-[116px]">
          <Skeleton className="w-1/6 mt-6 mb-1 h-7" />
          <Skeleton className="w-1/4 mb-6 h-7" />
          <Skeleton className="w-[720px] h-[461px]" />
        </div>
      )}
    </>
  );
}
