"use client";

import Image from "next/image";
import Eletric from "../../assets/icons/eletric.svg";

import { archivo } from "@/styles/fonts";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import Link from "next/link";

export function CarCard() {
  return (
    <Link
      href="/inicio"
      className="bg-background border border-text-secondary hover:border-b hover:border-b-[#DC1637] hover:cursor-pointer"
    >
      <div className="border-b border-text-secondary p-10">
        <img
          src="https://www.pngmart.com/files/10/Audi-Transparent-Background.png"
          alt="teste"
        />
      </div>
      <div className="flex flex-row items-center py-5 px-6  w-full justify-between">
        <div className="flex flex-row items-center gap-[26px] text-text-details">
          <div className="flex flex-col">
            <span className={`${archivo.className} font-medium text-[14px]`}>
              AUDI
            </span>
            <span
              className={` ${archivo.className} font-medium text-primary text-[22px]`}
            >
              RS 5 Coupé
            </span>
          </div>
          <div className="flex flex-col">
            <span className={`${archivo.className} font-medium text-[14px]`}>
              AO DIA
            </span>
            <span
              className={` ${archivo.className} font-medium text-secondary text-[22px]`}
            >
              R$ 640
            </span>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image src={Eletric} alt="Eletrico" width={24} height={24} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Elétrico</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Link>
  );
}
