"use client";

import { Calendar } from "@/components/Calendar";
import { archivo } from "../../../../styles/fonts";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { RentalDetailsContext } from "../../layout";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiDroplet } from "react-icons/fi";
import { BiLeaf } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,

  // DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface FormData {
  carName: string;
  priceRange: [number, number];
  fuelType: string;
  transmission: string;
}
interface CarData {
  carName: string;
  price: number;
  fuelType: string;
  transmission: string;
}

export default function Filtros() {
  const fakeCars: CarData[] = [
    {
      carName: "Toyota Corolla",
      price: 500,
      fuelType: "Alcool",
      transmission: "Automatico",
    },
    {
      carName: "Honda Civic",
      price: 600,
      fuelType: "Gasolina",
      transmission: "Automatico",
    },
    {
      carName: "Ford Mustang",
      price: 1000,
      fuelType: "Gasolina",
      transmission: "Manual",
    },
    {
      carName: "Chevrolet Camaro",
      price: 1100,
      fuelType: "Gasolina",
      transmission: "Manual",
    },
    {
      carName: "Tesla Model S",
      price: 2000,
      fuelType: "Eletrico",
      transmission: "Automatico",
    },
    {
      carName: "BMW 3 Series",
      price: 1500,
      fuelType: "Gasolina",
      transmission: "Automatico",
    },
    {
      carName: "Audi A4",
      price: 400,
      fuelType: "Gasolina",
      transmission: "Automatico",
    },
  ];

  const [filterResults, setFilterResults] = useState<CarData[]>([]);
  const [searchInputResults, setSearchInputResults] = useState<CarData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setSearchFocused] = useState(false);

  const [openFilterSheet, setOpenFilterSheet] = useState(false);

  const { setDates, startDate, endDate } = useContext(RentalDetailsContext);
  const priceRangerDefaultValues = [500, 1000];
  const [priceRange, setPriceRange] = useState(priceRangerDefaultValues);
  const [fuelType, setFuelType] = useState("");
  const [transmissionType, setTransmissionType] = useState("");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState<FormData>({
    carName: "",
    priceRange: [0, 2000],
    fuelType: "",
    transmission: "",
  });

  function handleClearResults(event:any) {
    event.preventDefault();
    setFormData({ carName: "", priceRange: [0, 2000], fuelType: "", transmission: "" });
    setPriceRange(priceRangerDefaultValues);
    setFuelType("");
    setSearchQuery("");
    setTransmissionType("");
  }
  
  const isSearchFocusedCondition = isSearchFocused ? "opacity-50" : "";

  const handleInputFocus = () => {
    setSearchFocused(true);
  };

  const handleInputBlur = () => {
    setSearchFocused(false);
  };

  const handleFilterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const matchingCars = fakeCars.filter((car) => {
      // Filter conditions based on formData
      const carNameMatch =
        formData.carName === "" ||
        car.carName.toLowerCase().includes(formData.carName.toLowerCase());
      const priceRangeMatch =
        car.price >= formData.priceRange[0] && car.price <= formData.priceRange[1];
      const fuelTypeMatch =
        formData.fuelType === "" || car.fuelType.toLowerCase() === formData.fuelType.toLowerCase();
      const transmissionMatch =
        formData.transmission === "" ||
        car.transmission.toLowerCase() === formData.transmission.toLowerCase();

      // Check if all filter conditions are true for this car
      return carNameMatch && priceRangeMatch && fuelTypeMatch && transmissionMatch;
    });
    setFilterResults(matchingCars);
    setOpenFilterSheet(false);
  };

  const handleSelectSearchedCar = (car: CarData) => {
    setSearchQuery(car.carName);
    setFormData({
      ...formData,
      carName: car.carName,
    });

    setSearchInputResults([]);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFormData({
      ...formData,
      carName: value,
    });

    setSearchQuery(value);
    handleInputSearch(value);
  }

  function handleInputSearch(query: string) {
    if (query.trim() === "") {
      // If the query is empty or only contains whitespace, return an empty array
      setSearchInputResults([]);
    } else {
      const matchingCars = fakeCars.filter((car) => {
        // Check if the car name matches the search query
        return car.carName.toLowerCase().includes(query.toLowerCase());
      });

      setSearchInputResults(matchingCars);
    }
  }

  function handlePriceSliderChange(newValue: number[]) {
    setPriceRange(newValue);
    setFormData({
      ...formData,
      priceRange: [newValue[0], newValue[1]],
    });
  }

  function handleFuelTabChange(newValue: string) {
    setFuelType(newValue);
    setFormData({
      ...formData,
      fuelType: newValue,
    });
  }
  function handleTransmissionTabChange(newValue: string) {
    setTransmissionType(newValue);
    setFormData({
      ...formData,
      transmission: newValue,
    });
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
  return (
    <div className="flex flex-col items-start justify-start w-full h-screen bg-background-darkened px-[116px]">
      <div className="flex items-center justify-between w-full pb-6 pt-11">
        <h1 className={`${archivo.className} font-bold text-heading text-center text-4xl`}>
          {filterResults.length} carro(s) encontrados
        </h1>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <span className={`${archivo.className} capitalize text-text-details text-xs`}>DE</span>
            {startDate ? (
              <span className="text-lg font-semibold lg:text-lg text-heading">
                {dateFormatter(startDate)}
              </span>
            ) : (
              <hr className="w-24 mt-5" />
            )}
          </div>

          <div className="flex items-center justify-center">
            <RiArrowRightSLine size={22} color="#AEAEB3" />
          </div>

          <div className="flex flex-col">
            <span className={`${archivo.className} capitalize text-text-details text-xs`}>ATÉ</span>
            {endDate ? (
              <span className="text-lg font-semibold lg:text-lg text-heading">
                {dateFormatter(endDate)}
              </span>
            ) : (
              <hr className="w-24 mt-5" />
            )}
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button
                aria-controls="radix-:R29dlll6pj9:"
                onClick={() => setDates(startDate!, endDate!)}
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-secondary hover:bg-secondary-darkened"
              >
                <AiOutlineCalendar color="#FFF" size="22px" />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle
                  className={`${archivo.className} p-6 text-lg font-semibold bg-primary text-background flex`}
                >
                  Escolha uma data de início e fim do aluguel
                </DialogTitle>
              </DialogHeader>
              <Calendar onDateSelected={setSelectedDate} />
            </DialogContent>
          </Dialog>

          <div className="border-l border-solid border-[#DEDEE3] h-6 my-auto"></div>

          <Sheet open={openFilterSheet} onOpenChange={setOpenFilterSheet}>
            <SheetTrigger
              asChild
              className="flex items-center justify-center w-12 h-12 transition-all duration-300 bg-secondary hover:bg-secondary-darkened"
            >
              <button aria-controls="radix-:R39dlll6pj9:">
                <HiOutlineAdjustmentsHorizontal color="#FFF" size="22px" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-background-darkened">
              <SheetHeader className={`${isSearchFocusedCondition} flex flex-row mb-4`}>
                <SheetTitle className={`${archivo.className} text-2xl font-semibold text-heading`}>
                  Filtro
                </SheetTitle>
                <SheetClose className="w-auto rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                  <X className="w-6 h-6 text-text-details" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>
              <div className="border-b border-solid border-[#DEDEE3] w-full mb-6"></div>

              <form className={`flex flex-col gap-8`} onSubmit={handleFilterSubmit}>
                <div className="relative">
                  <input
                    onChange={handleInputChange}
                    value={searchQuery}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    type="text"
                    placeholder="Qual carro você deseja?"
                    className={`w-full px-4 py-4 border border-text-secondary bg-background placeholder:font-normal placeholder:text-text-details placeholder:text-base`}
                  />
                  <ul className="absolute z-50 w-full bg-background">
                    {searchInputResults.map((car, index) => {
                      const matchIndex = car.carName
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase());

                      const highlightedCarName =
                        matchIndex !== -1 ? (
                          <li
                            onClick={() => handleSelectSearchedCar(car)}
                            className="p-4 border-t cursor-pointer border-text-secondary"
                            key={index}
                          >
                            {car.carName.substring(0, matchIndex)}
                            <strong>
                              {car.carName.substring(matchIndex, matchIndex + searchQuery.length)}
                            </strong>
                            {car.carName.substring(matchIndex + searchQuery.length)}
                          </li>
                        ) : (
                          <li
                            onClick={() => handleSelectSearchedCar(car)}
                            className="p-4 border-t cursor-pointer border-text-secondary"
                            key={index}
                          >
                            {car.carName}
                          </li>
                        );

                      return highlightedCarName;
                    })}
                  </ul>
                </div>

                <div className={`${isSearchFocusedCondition} flex flex-col gap-4`}>
                  <div className="flex justify-between">
                    <span className={`${archivo.className} text-xl font-medium text-heading`}>
                      Preço ao dia
                    </span>
                    <span className="text-base font-medium text-secondary">
                      R$ {priceRange[0]} - R$ {priceRange[1]}
                    </span>
                  </div>
                  <Slider
                    onValueChange={handlePriceSliderChange}
                    defaultValue={priceRangerDefaultValues}
                    value={priceRange}
                    max={2000}
                    min={100}
                    step={1}
                    minStepsBetweenThumbs={1}
                  />
                </div>

                <div className={`${isSearchFocusedCondition} flex flex-col gap-4`}>
                  <span className={`${archivo.className} text-xl font-medium text-heading`}>
                    Combustível
                  </span>
                  <Tabs
                    defaultValue=""
                    value={fuelType}
                    className="w-full"
                    onValueChange={handleFuelTabChange}
                  >
                    <TabsList className="w-full bg-background">
                      <TabsTrigger
                        value="gasolina"
                        className="group flex flex-col items-center justify-center gap-2 data-[state=active]:bg-background-darkened transition-all duration-300 w-full"
                      >
                        <FiDroplet className="text-2xl text-text-details group-data-[state=active]:text-secondary" />
                        <span className="text-sm text-text-details group-data-[state=active]:text-heading transition-all duration-300">
                          Gasolina
                        </span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="eletrico"
                        className="group flex flex-col items-center justify-center gap-2 data-[state=active]:bg-background-darkened transition-all duration-300 w-full"
                      >
                        <BsLightningCharge className="text-2xl text-text-details group-data-[state=active]:text-secondary" />
                        <span className="text-sm text-text-details group-data-[state=active]:text-heading transition-all duration-300">
                          Elétrico
                        </span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="alcool"
                        className="group flex flex-col items-center justify-center gap-2 data-[state=active]:bg-background-darkened transition-all duration-300 w-full"
                      >
                        <BiLeaf className="text-2xl  text-text-details group-data-[state=active]:text-secondary" />
                        <span className="text-sm text-text-details group-data-[state=active]:text-heading transition-all duration-300">
                          Álcool
                        </span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className={`${isSearchFocusedCondition} flex flex-col gap-4`}>
                  <span className={`${archivo.className} text-xl font-medium text-heading`}>
                    Transmissão
                  </span>

                  <Tabs
                    defaultValue=""
                    value={transmissionType}
                    className="w-full"
                    onValueChange={handleTransmissionTabChange}
                  >
                    <TabsList className="w-full bg-background">
                      <TabsTrigger
                        value="automatico"
                        className="flex items-center text-base text-text-details justify-center data-[state=active]:bg-background-darkened w-full transition-all duration-300"
                      >
                        Automático
                      </TabsTrigger>
                      <TabsTrigger
                        value="manual"
                        className="flex items-center text-base justify-center text-text-details data-[state=active]:bg-background-darkened w-full transition-all duration-300"
                      >
                        Manual
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <button
                  className={`${isSearchFocusedCondition} flex items-center justify-center w-full px-20 py-5 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto bg-secondary text-background hover:bg-secondary-darkened hover:transition-all`}
                >
                  Filtrar resultados
                </button>
                <button
                  onClick={handleClearResults}
                  className="text-base hover:underline text-text-details"
                >
                  Limpar dados
                </button>
              </form>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="border-b border-solid border-[#DEDEE3] w-full mb-6"></div>

      <div>
        <ul className="">
          {filterResults.map((car, index) => (
            <li
              key={index}
              onClick={() => handleSelectSearchedCar(car)}
              className="p-4 border-t cursor-pointer border-text-secondary"
            >
              {car.carName}
              {car.fuelType}
              {car.price}
              {car.transmission}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
