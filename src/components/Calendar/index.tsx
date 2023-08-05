import dayjs from "dayjs";
import { archivo } from "../../styles/fonts";
import { useMemo, useState } from "react";
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
  selectedDate: Date[] | Date | null;
  onDateSelected: (date: Date) => void;
}

export function Calendar({ selectedDate, onDateSelected }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set("date", 1);
  });


  function handleConfirm(){
    console.log('confirm')
  }

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const blockedDates: BlockedDates = {
    blockedWeekDays: [0], // Domingo (0) bloqueado
    blockedDates: [15], // Exemplo de dias bloqueados
  };

  const calendarWeeks = useMemo(() => {
    if (!blockedDates) {
      return [];
    }

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
          disabled:
            date.endOf("day").isBefore(new Date()) ||
            blockedDates.blockedWeekDays.includes(date.get("day")) ||
            blockedDates.blockedDates.includes(date.get("date")),
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
  }, [currentDate, blockedDates]);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function handleSelectDate(date: Date) {
    if (!startDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate && date >= startDate) {
      // Se a data inicial foi selecionada e a data final ainda não foi, e a data selecionada é maior ou igual à data inicial
      setEndDate(date);
    } else {
      // Se a data final foi selecionada ou a data selecionada é menor que a data inicial, selecionamos uma nova data inicial
      setStartDate(date);
      setEndDate(null);
    }
    onDateSelected(date);
  }

  return (
    <div className="flex flex-col justify-around max-w-4xl gap-8 p-1 mx-auto lg:gap0 lg:p-12 lg:flex-row bg-background">
      <div className="max-w-[400px] mx-auto lg:mx-0">
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
                <th className="text-[#AEAEB3] font-semibold text-sm py-4" key={weekDay}>
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
                    const isStartDate =
                      startDate && date.toDate().getTime() === startDate.getTime();
                    const isEndDate = endDate && date.toDate().getTime() === endDate.getTime();
                    const isInRange =
                      startDate && endDate && date.toDate() > startDate && date.toDate() < endDate;

                    return (
                      <td key={date.toString()} className="p-0">
                        <button
                          onClick={() => handleSelectDate(date.toDate())}
                          className={`all:unset text-center cursor-pointer max-[400px]:w-12 max-[400px]:h-12 w-14 h-14
                        ${
                          disabled
                            ? "bg-none cursor-not-allowed opacity-40"
                            : isInRange
                            ? "bg-[#FDEDEF] text-secondary"
                            : isStartDate || isEndDate
                            ? " bg-secondary  text-background"
                            : "bg-background text-[#47474D]"
                        }
                        ${
                          !disabled && !isInRange && "hover:bg-secondary hover:text-background"
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

      <div className="flex flex-col items-center w-full lg:items-start lg:w-auto justify-between gap-8 lg:gap-0 max-w-[400px] mx-auto lg:mx-0">
        <div className="flex flex-row justify-between w-full gap-0 px-4 lg:gap-12 lg:px-0 lg:flex-col">
          <div className="flex flex-col gap-1 min-w-[150px] w-min lg:w-full">
            <span className={`${archivo.className} capitalize text-text-details text-sm`}>DE</span>
            {startDate ? (
              <span className="text-lg font-semibold lg:text-3xl text-heading">
                {startDate.toLocaleString("pt-BR", {
                  day: "numeric",
                  month: "long",
                })}
              </span>
            ) : (
              <hr className="mt-9" />
            )}
          </div>

          <div className="flex flex-col gap-1 min-w-[150px] w-min lg:w-full">
            <span className={`${archivo.className} capitalize text-text-details text-sm`}>ATÉ</span>
            {endDate ? (
              <span className="text-lg font-semibold lg:text-3xl text-heading">
                {endDate.toLocaleString("pt-BR", {
                  day: "numeric",
                  month: "long",
                })}
              </span>
            ) : (
              <hr className="mt-9" />
            )}
          </div>
        </div>
     
          <button
            onClick={handleConfirm}
            disabled={!startDate || !endDate}
            className="flex items-center justify-center w-full px-20 py-4 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto bg-secondary text-background hover:bg-secondary-darkened hover:transition-all"
          >
            Confirmar
          </button>
       
      </div>
    </div>
  );
}
