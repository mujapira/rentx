"use client";

import Image from "next/image";
import { archivo } from "@/styles/fonts";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import Link from "next/link";
import { BiLeaf } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { FiDroplet } from "react-icons/fi";
import { CarData, Rent } from "@/utils";
import { ArrowRight } from "lucide-react";
import dayjs from "dayjs";

interface CarCardProps {
  car: CarData;
  rent: Rent;
}
export function CarCardHistory({ car, rent }: CarCardProps) {
  const { fullName, modelName, brand, price, fuelType, carUrl } = car;
  const { endDate, startDate } = rent;

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
    <div className="flex flex-col w-full">
      <div className="flex flex-col min-[500px]:flex-row-reverse justify-between bg-background border border-text-secondary hover:cursor-pointer w-full max-w-[600px]">
        <div className="flex items-center justify-center pl-0 pr-0 max-[500px]:pt-5 min-[500px]:pr-6 border-b-0 w-full border-text-secondary">
          <Image src={carUrl} alt={fullName} height={131} width={280} loading="lazy" />
        </div>
        <div className="flex flex-row items-center justify-between w-full min-[500px]:max-w-[160px] px-6 py-5 pr-5 min-[500px]:pr-0 ">
          <div className="flex flex-row min-[500px]:flex-col  items-start gap-[26px] text-text-details w-full min-[500px]:w-auto ">
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
                  <TooltipTrigger className="flex items-center justify-end min-[500px]:justify-start w-full pl-4">
                    <p>{FuelTypeIcon(fuelType)}</p>
                  </TooltipTrigger>
                  <TooltipContent>{fuelType}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-1 justify-between items-center bg-background border border-text-secondary max-w-[600px] px-6 py-5">
        <span className={`${archivo.className} font-medium text-xs text-text-details`}>
          PERÍODO DO ALUGUEL
        </span>

        <div className="flex flex-col gap-2 sm:flex-row">
          <span className="text-sm font-semibold sm:text-lg text-heading">
            {dayjs(endDate, "DD/MM/YYYY").format("DD MMM YYYY")}
          </span>

          <ArrowRight className="hidden text-text-details sm:flex" />

          <span className="text-sm font-semibold sm:text-lg text-heading">
            {dayjs(startDate, "DD/MM/YYYY").format("DD MMM YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
}
