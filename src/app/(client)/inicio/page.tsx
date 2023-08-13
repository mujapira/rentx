"use client";
import { CarCard } from "@/components/CarCard";
import { Skeleton } from "@/components/ui/skeleton";
import { archivo } from "@/styles/fonts";
import { fakeCars } from "@/utils";
export default function Inicio() {
  return (
    <div className="flex flex-col items-start justify-start w-full bg-background-darkened h-full min-h-[calc(100vh-80px)] px-4 xl:px-[116px]">
      <div className="flex items-center justify-between w-full py-10 border-b border-text-label">
        <h3
          className={`${archivo.className} font-bold text-[#47474D] text-2xl sm:text-4xl p-0 m-0`}
        >
          Carros disponíveis
        </h3>
        <span className="text-text text-[16px]">Total {fakeCars.length} carros</span>
      </div>

     
      
      <div className="grid w-full grid-cols-1 gap-4 py-10 2xl:gap-24 md:grid-cols-2 2xl:grid-cols-3">
        {fakeCars.map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
    </div>
  );
}
