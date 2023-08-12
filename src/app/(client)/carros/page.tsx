"use client";

import { Calendar } from "@/components/Calendar";
import { archivo } from "../../../styles/fonts";
import { useState } from "react";

export default function Carros() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);


  return (
    <div className="flex flex-col items-center justify-start w-full h-full pb-4 bg-background-darkened">
      <h1
        className={`${archivo.className} font-bold sm:text-4xl text-heading text-center text-2xl p-10`}
      >
        Escolha uma data <br /> de início e fim do aluguel
      </h1>
      <Calendar onDateSelected={setSelectedDate} />
    </div>
  );
}
