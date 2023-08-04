"use client";
import { Calendar } from "@/components/Calendar";
import { useState } from "react";

interface Availability {
  possibleTimes: number[];
  availableTimes: number[];
}

export default function pica() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />;
}
