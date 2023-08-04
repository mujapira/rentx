// import { useQuery } from '@tanstack/react-query'
import dayjs from "dayjs";
import { archivo } from "../../styles/fonts";
import { useRouter } from "next/router";
// import { CaretLeft, CaretRight } from "phosphor-react";
import { useMemo, useState } from "react";
// import { api } from '../../lib/axios'
import { getWeekDays } from "../../utils";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
interface CalendarWeek {
  week: number;
  days: Array<{
    date: dayjs.Dayjs;
    disabled: boolean;
  }>;
}

type CalendarWeeks = CalendarWeek[];

interface BlockedDates {
  blockedWeekDays: number[];
  blockedDates: number[];
}

interface CalendarProps {
  selectedDate: Date | null;
  onDateSelected: (date: Date) => void;
}

export function Calendar({ selectedDate, onDateSelected }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set("date", 1);
  });

  //   const router = useRouter();

  function handlePreviousMonth() {
    const previousMonth = currentDate.subtract(1, "month");

    setCurrentDate(previousMonth);
  }

  function handleNextMonth() {
    const nextMonth = currentDate.add(1, "month");

    setCurrentDate(nextMonth);
  }

  const shortWeekDays = getWeekDays({ short: true });

  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");

  //   const username = String(router.query.username);

  // const { data: blockedDates } = useQuery<BlockedDates>(
  //   ['blocked-dates', currentDate.get('year'), currentDate.get('month')],
  //   async () => {
  //     const response = await api.get(`/users/${username}/blocked-dates`, {
  //       params: {
  //         year: currentDate.get('year'),
  //         month: String(currentDate.get('month') + 1).padStart(2, '0'),
  //       },
  //     })

  //     return response.data
  //   },
  // )

  //  const blockedDates:BlockedDates = {[]}

  const calendarWeeks = useMemo(() => {
    // if (!blockedDates) {
    //   return [];
    // }

    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set("date", i + 1);
    });

    const firstWeekDay = currentDate.get("day");

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, "day");
      })
      .reverse();

    const lastDayInCurrentMonth = currentDate.set("date", currentDate.daysInMonth());
    const lastWeekDay = lastDayInCurrentMonth.get("day");

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, "day");
    });

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: true };
      }),
      ...daysInMonthArray.map((date) => {
        return {
          date,
          disabled: date.endOf("day").isBefore(new Date()),
          // || blockedDates.blockedWeekDays.includes(date.get("day")) ||
          // blockedDates.blockedDates.includes(date.get("date")),
        };
      }),
      ...nextMonthFillArray.map((date) => {
        return { date, disabled: true };
      }),
    ];

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>((weeks, _, i, original) => {
      const isNewWeek = i % 7 === 0;

      if (isNewWeek) {
        weeks.push({
          week: i / 7 + 1,
          days: original.slice(i, i + 7),
        });
      }

      return weeks;
    }, []);

    return calendarWeeks;
  }, [
    currentDate,
    // ,blockedDates
  ]);

  return (
    <div className="flex flex-col max-w-4xl gap-6 p-6 bg-background">
      <div className="max-w-[400px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full gap-2">
            <button
              onClick={handlePreviousMonth}
              title="Previous month"
              className="flex items-center justify-center"
            >
              <RiArrowLeftSLine size={22} color="#7A7A80" />
            </button>

            <h1
              className={`${archivo.className} font-semibold capitalize text-heading text-2xl heading-[30px]`}
            >
              {currentMonth} <span>{currentYear}</span>
            </h1>
            <button
              onClick={handleNextMonth}
              title="Next month"
              className="flex items-center justify-center"
            >
              <RiArrowRightSLine size={22} color="#7A7A80" />
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              {shortWeekDays.map((weekDay) => (
                <th
                  className="text-[#AEAEB3] font-semibold text-sm aspect-square py-4"
                  key={weekDay}
                >
                  {weekDay}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarWeeks.map(({ week, days }) => {
              return (
                <tr key={week}>
                  {days.map(({ date, disabled }) => {
                    return (
                      <td key={date.toString()} className="p-0">
                        <button
                          onClick={() => onDateSelected(date.toDate())}
                          className={`all:unset text-center cursor-pointer w-[56px] h-[56px]
                        ${
                          disabled
                            ? "bg-none cursor-default opacity-40"
                            : "bg-background text-[#47474D]"
                        } 
                        ${
                          !disabled && "hover:bg-secondary hover:text-background"
                        } focus:shadow-outline-gray-100`}
                          disabled={disabled}
                        >
                          {date.get("date")}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
