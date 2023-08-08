import { CarCard } from "@/components/CarCard";
import { archivo } from "@/styles/fonts";

export default function Inicio() {
  return (
    <div className="flex px-[116px] flex-col bg-background-darkened  ">
      <div className="flex justify-between items-center w-full py-10 border-b border-text-label">
        <h3
          className={`${archivo.className} font-bold text-[#47474D] text-[36px] p-0 m-0`}
        >
          Carros disponíveis
        </h3>
        <span className="text-text text-[16px]">Total 12 carros</span>
      </div>

      <div className="grid gap-24 grid-cols-3  py-10">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
}
