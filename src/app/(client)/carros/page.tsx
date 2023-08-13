"use client";

import { Calendar } from "@/components/Calendar";
import { archivo } from "../../../styles/fonts";
import { useContext, useState } from "react";
import { RentalDetailsContext } from "../layout";

export default function Carros() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { isCalendarOpen } = useContext(RentalDetailsContext);

  return (
    <div className="flex flex-col items-center justify-start w-full h-full pb-4 bg-background-darkened min-h-[calc(100vh-80px)]">
      <h1
        className={`${archivo.className} font-bold sm:text-4xl text-heading text-center text-2xl p-10`}
      >
        Escolha uma data <br /> de início e fim do aluguel
      </h1>
      <Calendar onDateSelected={setSelectedDate} isCalendarOpen={isCalendarOpen} />
    </div>
  );
}
