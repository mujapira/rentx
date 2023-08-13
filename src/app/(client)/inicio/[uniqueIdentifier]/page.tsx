"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
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
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/Calendar";
import { useRouter } from "next/navigation";
import placeholder from "@/assets/rentx-logo.png";
import { RentalDetailsContext } from "../../layout";
import { AiOutlineCalendar } from "react-icons/ai";
import { X } from "lucide-react";
import dayjs from "dayjs";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Carousel from "@/components/Carousel";

type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

export default function SelecionarCarro({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCar, setSelectedCar] = useState<CarData>();
  const { startDate, endDate, isDatesPicked, setDates, isCalendarOpen, setIsCalendarOpen } =
    useContext(RentalDetailsContext);
  const [isOpen, setIsOpen] = useState(false);
  const uniqueIdentifier = searchParams.carro;
  const rentPeriodInDays = dayjs(endDate).diff(dayjs(startDate), "day");

  const router = useRouter();

  function handleRent() {
    const requestCarRent = {
      selectedDate: [startDate, endDate],
      selectedCar: uniqueIdentifier,
      userId: "1",
    };
    console.log(requestCarRent);
    router.push("/sucesso");
  }

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
    images,
  } = selectedCar || {};

  return (
    <div className="h-full min-h-[calc(100vh-80px)] px-4 xl:px-[116px]">
      <div className="flex items-center justify-start gap-6 pb-6 border-b sm:gap-11 border-text-secondary">
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

      <div className="flex flex-col items-center justify-between w-full gap-5 py-10 xl:gap-24 xl:flex-row">
        <div className="flex items-center justify-center w-full max-w-7xl">
          {images ? (
            <Carousel loop>
              {images.map((src, i) => {
                return (
                  // 👇 style each individual slide.
                  // relative - needed since we use the fill prop from next/image component
                  // h-64 - arbitrary height
                  // flex[0_0_100%]
                  //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                  //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                  <div className="relative flex-[0_0_100%]" key={i}>
                    {/* use object-cover + fill since we don't know the height and width of the parent */}
                    <Image
                      src={src}
                      alt={fullName ? fullName : ""}
                      width={900}
                      height={423}
                      loading="lazy"
                      className="mx-auto"
                    />
                  </div>
                );
              })}
            </Carousel>
          ) : (
            <Image
              src={carUrl ? carUrl : placeholder}
              alt={fullName ? fullName : ""}
              width={648}
              height={423}
              loading="lazy"
            />
          )}
        </div>

        <div className="flex flex-col w-full max-w-md">
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="flex text-sm border-b sm:text-lg bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <MdSpeed className="text-xl font-bold sm:text-3xl text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{topSpeed}km/h</span>
            </div>

            <div className="flex text-sm border-b sm:text-lg bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <RiUploadLine className="text-xl font-bold sm:text-3xl text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{time}s</span>
            </div>

            <div className="flex text-sm border-b sm:text-lg bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <FiDroplet className="text-xl font-bold sm:text-3xl text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{fuelType}</span>
            </div>

            <div className="flex text-sm border-b sm:text-lg bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <GiGearStickPattern className="text-xl font-bold sm:text-3xl text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{transmission}</span>
            </div>

            <div className="flex text-sm border-b sm:text-lg bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <RiUser6Line className="text-xl font-bold sm:text-3xl text-heading" />
              </span>
              <span className="flex items-center justify-center p-4">{seats} pessoas</span>
            </div>

            <div className="flex text-sm border-b sm:text-lg bg-background-darkened text-text border-text-secondary">
              <span className="flex items-center justify-center p-4 border-r border-background aspect-square">
                <TbSteeringWheel className="text-xl font-bold sm:text-3xl text-heading" />
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
                <>
                  <div className="flex items-center justify-between pb-4 border-b border-text-secondary">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span
                          className={`${archivo.className} capitalize text-text-details text-xs`}
                        >
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
                        <span
                          className={`${archivo.className} capitalize text-text-details text-xs`}
                        >
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
                    </div>

                    <button
                      aria-controls="radix-:R29dlll6pj9:"
                      onClick={() => setIsCalendarOpen(true)}
                      className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-secondary hover:bg-secondary-darkened"
                    >
                      <AiOutlineCalendar color="#FFF" size="22px" />
                    </button>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col pt-4">
                      <span className={`${archivo.className} capitalize text-text-details text-xs`}>
                        TOTAL
                      </span>

                      <span className="text-lg font-semibold text-heading">
                        {`R$ ${price} x ${rentPeriodInDays} diárias`}
                      </span>
                    </div>

                    <span
                      className={`${archivo.className} text-xl sm:text-4xl font-medium  text-tertiary flex`}
                    >
                      R${" "}
                      {(price! * rentPeriodInDays).toLocaleString("pt-BR", {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </>
              ) : (
                <span>Selecione uma data</span>
              )}
            </TabsContent>
          </Tabs>

          <Dialog open={isCalendarOpen}>
            <DialogTrigger asChild>
              <button
                onClick={() => {
                  if (isDatesPicked) {
                    handleRent();
                  } else {
                    setIsCalendarOpen(true);
                  }
                }}
                className={`
              flex items-center justify-center w-full px-20 py-5 mt-8 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto hover:transition-all text-background 
              ${
                isDatesPicked
                  ? "bg-tertiary hover:bg-tertiary-darkened"
                  : "bg-secondary hover:bg-secondary-darkened"
              }`}
              >
                {isDatesPicked ? "Alugar agora" : "Escolher período do aluguel"}
              </button>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay onClick={() => setIsCalendarOpen(false)} />
              <DialogContent>
                <DialogHeader className="flex flex-row justify-between p-6 bg-primary">
                  <DialogTitle
                    className={`${archivo.className} text-lg font-semibold  text-background flex`}
                  >
                    Escolha uma data de início e fim
                  </DialogTitle>
                  <DialogClose
                    onClick={() => setIsCalendarOpen(false)}
                    className="
                  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 
                  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary
                  "
                  >
                    <X className="w-6 h-6 text-text-details" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </DialogHeader>
                <Calendar onDateSelected={setSelectedDate} isCalendarOpen={isCalendarOpen} />
              </DialogContent>
            </DialogPortal>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
