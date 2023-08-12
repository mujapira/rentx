"use client";

import Image from "next/image";
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
  const { fullName, modelName, brand, price, fuelType, carUrl, uniqueIdentifier } = car;

  function FuelTypeIcon(fuelType: string) {
    switch (fuelType) {
      case "Alcool":
        return (
          <BiLeaf className="text-2xl text-text-details group-data-[state=active]:text-secondary" />
        );
      case "Gasolina":
        return (
          <BsLightningCharge className="text-2xl text-text-details group-data-[state=active]:text-secondary" />
        );
      case "Eletrico":
        return (
          <FiDroplet className="text-2xl text-text-details group-data-[state=active]:text-secondary" />
        );
      default:
        return null;
    }
  }
  return (
    <Link
      href={{
        pathname: '/inicio/?',
        query: { carro: uniqueIdentifier },
      }}
      className="flex flex-col min-[500px]:flex-row-reverse 2xl:flex-col justify-between  bg-background border border-text-secondary hover:border-b hover:border-b-[#DC1637] hover:cursor-pointer"
    >
      <div className="flex items-center justify-center pl-0 pr-0 max-[500px]:pt-5 min-[500px]:pr-6 border-b-0 2xl:p-10 2xl:border-b border-text-secondary">
        <Image src={carUrl} alt={fullName} height={131} width={280} loading="lazy" />
      </div>
      <div className="flex flex-row items-center justify-between w-full 2xl:max-w-full min-[500px]:max-w-[160px] px-6 py-5 pr-5 min-[500px]:pr-0 2xl:pr-6">
        <div className="flex flex-row min-[500px]:flex-col 2xl:flex-row items-start 2xl:items-center gap-[26px] text-text-details w-full min-[500px]:w-auto 2xl:w-full">
          <div className="flex flex-col whitespace-nowrap">
            <span className={`${archivo.className} font-medium text-[14px]`}>{brand}</span>
            <span
              className={` ${archivo.className} font-medium text-primary text-[22px] max-w-[150px] truncate`}
            >
              {modelName}
            </span>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col whitespace-nowrap">
              <span className={`${archivo.className} font-medium text-sm`}>AO DIA</span>
              <span className={` ${archivo.className} font-medium text-secondary text-[22px]`}>
                R$ {price}
              </span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex items-center justify-end min-[500px]:justify-start w-full pl-4 2xl:justify-end">
                  <p>{FuelTypeIcon(fuelType)}</p>
                </TooltipTrigger>
                <TooltipContent>{fuelType}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Link>
  );
}
