"use client";

import { SideBar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { createContext, useEffect, useState } from "react";
import React from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

interface RentalDetailsContextType {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setDates: (startDate: Date, endDate: Date) => void;
  selectedDates?: Date[];
  setSelectedDates: (date: Date[]) => void;
  isDatesPicked: boolean;
}

export const RentalDetailsContext = createContext<RentalDetailsContextType>(
  {} as RentalDetailsContextType
);

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>();
  const [isDatesPicked, setIsDatesPicked] = useState<boolean>(false);
  const setDates = (newStartDate: Date, newEndDate: Date) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  // Retrieve data from local storage when the component mounts
  useEffect(() => {
    const storedStartDate = localStorage.getItem("startDate");
    const storedEndDate = localStorage.getItem("endDate");
    const storedSelectedDates = localStorage.getItem("selectedDates");

    if (storedStartDate) {
      setStartDate(new Date(JSON.parse(storedStartDate)));
    }
    if (storedEndDate) {
      setEndDate(new Date(JSON.parse(storedEndDate)));
    }
    if (storedStartDate && storedEndDate) {
      setIsDatesPicked(true);
    }
    if (storedSelectedDates) {
      try {
        const parsedSelectedDates = JSON.parse(storedSelectedDates);
        setSelectedDates(parsedSelectedDates);
      } catch (error) {
        console.error("Error parsing selectedDates from local storage:", error);
        setSelectedDates([]);
      }
    }
  }, []);

  return (
    <div className="w-full">
      <SideBar />
      <div className="flex flex-col">
        <Topbar />
        <div className="ml-0 mb-14 sm:ml-20 sm:mb-0">
          <RentalDetailsContext.Provider
            value={{
              startDate,
              endDate,
              setEndDate,
              setStartDate,
              setDates,
              selectedDates,
              setSelectedDates,
              isDatesPicked
            }}
          >
            {children}
          </RentalDetailsContext.Provider>
        </div>
      </div>
    </div>
  );
}
