"use client";
import { useContext, useEffect, useState } from "react";
import { CarData, fakeCars } from "@/utils";
import { archivo } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";
import { MdSpeed } from "react-icons/md";
import { RiArrowLeftSLine, RiUploadLine } from "react-icons/ri";
import { FiDroplet } from "react-icons/fi";
import { GiGearStickPattern } from "react-icons/gi";
import { RiUser6Line } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { TbSteeringWheel } from "react-icons/tb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/Calendar";

import placeholder from "@/assets/rentx-logo.png";
import { RentalDetailsContext } from "../../layout";
import { AiOutlineCalendar } from "react-icons/ai";

export default function SelecionarCarro({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCar, setSelectedCar] = useState<CarData>();
  const { startDate, endDate, isDatesPicked, setDates } = useContext(RentalDetailsContext);

  const uniqueIdentifier = searchParams.carro;

  function getCarByUniqueIdentifier(
    cars: CarData[],
    uniqueIdentifier: string | string[] | undefined
  ) {
    const selectedCar = cars.find((car) => car.uniqueIdentifier === uniqueIdentifier);
    setSelectedCar(selectedCar);
  }

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function dateFormatter(date: Date) {
    const formattedDate = date
      ?.toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" })
      .replaceAll(" de", "")
      .replaceAll(".", "");

    const parts = formattedDate.split(" ");
    const capitalizedMonth = capitalizeFirstLetter(parts[1]);
    parts[1] = capitalizedMonth;
    return parts.join(" ");
  }

  useEffect(() => {
    getCarByUniqueIdentifier(fakeCars, uniqueIdentifier);
  }, [uniqueIdentifier]);

  const {
    modelName,
    brand,
    price,
    fuelType,
    carUrl,
    horsePower,
    seats,
    time,
    topSpeed,
    transmission,
    fullName,
  } = selectedCar || {};

  return (
    <div className="h-full min-h-[calc(100vh-80px)] px-4 xl:px-[116px]">
      <div className="flex items-center justify-start pb-6 border-b gap-11 border-text-secondary">
        <Link href="/inicio">
          <RiArrowLeftSLine className="text-3xl text-text" />
        </Link>

        <div className="flex flex-col items-start justify-center whitespace-nowrap">
          <span className={`${archivo.className} font-medium text-sm text-text-details uppercase`}>
            {brand}
          </span>
          <span className={` ${archivo.className} font-bold text-heading text-4xl truncate`}>
            {modelName}
          </span>
        </div>

        <div className="flex flex-col items-start justify-center whitespace-nowrap">
          <span className={`${archivo.className} font-medium text-sm text-text-details uppercase`}>
            AO DIA
          </span>
          <span className={` ${archivo.className} font-bold text-secondary text-4xl`}>
            R$ {price}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full gap-24 py-10">
        <div className="relative flex items-center justify-center">
          <Image
            src={carUrl ? carUrl : placeholder}
            alt={fullName ? fullName : ""}
            width={200}
            height={200}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col w-full max-w-md">
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="flex text-lg border-b bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <MdSpeed className="text-3xl font-bold text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{topSpeed}km/h</span>
            </div>

            <div className="flex text-lg border-b bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <RiUploadLine className="text-3xl font-bold text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{time}s</span>
            </div>

            <div className="flex text-lg border-b bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <FiDroplet className="text-3xl font-bold text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{fuelType}</span>
            </div>

            <div className="flex text-lg border-b bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <GiGearStickPattern className="text-3xl font-bold text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{transmission}</span>
            </div>

            <div className="flex text-lg border-b bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <RiUser6Line className="text-3xl font-bold text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{seats} pessoas</span>
            </div>

            <div className="flex text-lg border-b bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <TbSteeringWheel className="text-3xl font-bold text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{horsePower} HP</span>
            </div>
          </div>

          <Tabs defaultValue="about" className="w-full min-h-[300px] h-full">
            <TabsList className="w-full p-0 my-6 border-b bg-background shrink-0">
              <TabsTrigger
                value="about"
                className="uppercase w-full text-sm text-text-label data-[state=active]:text-heading shadow-none data-[state=active]:shadow-none
              data-[state=active]:border-b-2 border-b-2 border-b-transparent data-[state=active]:border-secondary
              "
              >
                sobre o carro
              </TabsTrigger>
              <TabsTrigger
                value="time"
                className="uppercase w-full text-sm text-text-label data-[state=active]:text-heading shadow-none data-[state=active]:shadow-none
                 data-[state=active]:border-b-2 border-b-2 border-b-transparent data-[state=active]:border-secondary
                 "
              >
                período
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="text-base text-text">
              Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real
              Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
            </TabsContent>
            <TabsContent value="time" className="text-base text-text">
              {isDatesPicked ? (
                <div>
                  <div className="flex flex-col">
                    <span className={`${archivo.className} capitalize text-text-details text-xs`}>
                      DE
                    </span>
                    {startDate ? (
                      <span className="text-lg font-semibold text-heading">
                        {dateFormatter(startDate)}
                      </span>
                    ) : (
                      <hr className="w-24 mt-5" />
                    )}
                  </div>

                  <div className="items-center justify-center hidden sm:flex">
                    <RiArrowRightSLine size={22} color="#AEAEB3" />
                  </div>

                  <div className="flex flex-col">
                    <span className={`${archivo.className} capitalize text-text-details text-xs`}>
                      ATÉ
                    </span>
                    {endDate ? (
                      <span className="text-lg font-semibold text-heading">
                        {dateFormatter(endDate)}
                      </span>
                    ) : (
                      <hr className="w-24 mt-5" />
                    )}
                  </div>

                  {/* < asChild> */}
                    <button
                      aria-controls="radix-:R29dlll6pj9:"
                      onClick={() => setDates(startDate!, endDate!)}
                      className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-secondary hover:bg-secondary-darkened"
                    >
                      <AiOutlineCalendar color="#FFF" size="22px" />
                    </button>
                  {/* </> */}
                </div>
              ) : (
                <span>Selecione uma data</span>
              )}
            </TabsContent>
          </Tabs>

          <Dialog>
            {isDatesPicked ? (
              <button className="flex items-center justify-center w-full px-20 py-5 mt-8 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto bg-tertiary text-background hover:bg-tertiary-darkened hover:transition-all">
                Alugar agora
              </button>
            ) : (
              <button
                className={`flex mt-8 items-center justify-center w-full px-20 py-5 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto bg-secondary text-background hover:bg-secondary-darkened hover:transition-all`}
              >
                Escolher período do aluguel
              </button>
            )}

            <DialogContent>
              <DialogHeader>
                <DialogTitle
                  className={`${archivo.className} p-6 text-lg font-semibold bg-primary text-background flex`}
                >
                  Escolha uma data de início e fim
                </DialogTitle>
              </DialogHeader>
              <Calendar onDateSelected={setSelectedDate} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
