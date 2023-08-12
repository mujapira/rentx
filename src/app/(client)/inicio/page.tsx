import { CarCard } from "@/components/CarCard";
import { archivo } from "@/styles/fonts";
import { fakeCars } from "@/utils";
export default function Inicio() {
  return (
    <div className="flex px-[116px] flex-col bg-background-darkened  ">
      <div className="flex items-center justify-between w-full py-10 border-b border-text-label">
        <h3 className={`${archivo.className} font-bold text-[#47474D] text-[36px] p-0 m-0`}>
          Carros disponíveis
        </h3>
        <span className="text-text text-[16px]">Total {fakeCars.length} carros</span>
      </div>

      <div className="grid grid-cols-3 gap-24 py-10">
        {fakeCars.map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
    </div>
  );
}
