"use client";

import Image from "next/image";
import Eletric from "../../assets/icons/eletric.svg";

import { archivo } from "@/styles/fonts";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import Link from "next/link";
import { BiLeaf } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { FiDroplet } from "react-icons/fi";
import { CarData } from "@/utils";

interface CarCardProps {
  car: CarData;
}

export function CarCard({ car }: CarCardProps) {
  const { fullName, modelName, brand, price, fuelType, carUrl } = car;

  function FuelTypeIcon(fuelType:string) {
    switch (fuelType) {
      case "Alcool":
        return <BiLeaf className="text-2xl text-text-details group-data-[state=active]:text-secondary" />;
      case "Gasolina":
        return <BsLightningCharge className="text-2xl text-text-details group-data-[state=active]:text-secondary" />;
      case "Eletrico":
        return <FiDroplet className="text-2xl text-text-details group-data-[state=active]:text-secondary" />;
      default:
        return null;
    }
  }
  return (
    <Link
      href={carUrl}
      className="bg-background border border-text-secondary hover:border-b hover:border-b-[#DC1637] hover:cursor-pointer"
    >
      <div className="p-10 border-b border-text-secondary">
        <img src={carUrl} alt={fullName} height={131} width={280} />
      </div>
      <div className="flex flex-row items-center justify-between w-full px-6 py-5">
        <div className="flex flex-row items-center gap-[26px] text-text-details">
          <div className="flex flex-col">
            <span className={`${archivo.className} font-medium text-[14px]`}>{brand}</span>
            <span className={` ${archivo.className} font-medium text-primary text-[22px]`}>
              {modelName}
            </span>
          </div>
          <div className="flex flex-col">
            <span className={`${archivo.className} font-medium text-[14px]`}>AO DIA</span>
            <span className={` ${archivo.className} font-medium text-secondary text-[22px]`}>
              R$ {price}
            </span>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p>{FuelTypeIcon(fuelType)}</p>
            </TooltipTrigger>
            <TooltipContent>
              {fuelType}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Link>
  );
}
