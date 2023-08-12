"use client";
import { useContext, useEffect, useState } from "react";
import { RentalDetailsContext } from "../../layout";
import { usePathname, useSearchParams } from "next/navigation";
import { CarData, fakeCars } from "@/utils";
export default function SelecionarCarro({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const uniqueIdentifier = searchParams.carro;

  const [selectedCar, setSelectedCar] = useState<CarData>();

  function getCarByUniqueIdentifier(
    cars: CarData[],
    uniqueIdentifier: string | string[] | undefined
  ) {
    const selectedCar = cars.find((car) => car.uniqueIdentifier === uniqueIdentifier);
    setSelectedCar(selectedCar);
  }

  useEffect(() => {
    getCarByUniqueIdentifier(fakeCars, uniqueIdentifier);
  }, [uniqueIdentifier]);

  return (
    <div>
      <div>
         {selectedCar?.fullName}
      </div>
    </div>
  );
}
