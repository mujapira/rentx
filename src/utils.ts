import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export interface CarData {
  fullName: string;
  modelName: string;
  brand: string;
  price: number;
  fuelType: string;
  carUrl: string;
  transmission: string;
}

dayjs.locale("pt-br");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GetWeekDaysParams {
  short?: boolean;
}

export function convertTimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(":").map(Number);

  return hours * 60 + minutes;
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat("pt-BR", { weekday: "long" });

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toUpperCase();
      }

      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1));
    });
}
export const fakeCars: CarData[] = [

  {
    fullName: "Volvo XC40",
    modelName: "XC40",
    brand: "Volvo",
    price: 500,
    fuelType: "Alcool",
    transmission: "Automatico",
    carUrl: "https://firebasestorage.googleapis.com/v0/b/rentx-plm.appspot.com/o/xc40.png?alt=media&token=be98555b-c869-45da-8c06-9c68d4d4d05e",
  },


  {
    fullName: "Chevrolet Corvette Z06",
    modelName: "Corvette Z06",
    brand: "Chevrolet",
    price: 800,
    fuelType: "Gasolina",
    transmission: "Manual",
    carUrl: "https://firebasestorage.googleapis.com/v0/b/rentx-plm.appspot.com/o/corvettez06.png?alt=media&token=6e03842c-ce8b-4fb4-a7be-6bde02198d2c",
  },
 
  {
    fullName: "Audi RS 5 Coupé",
    modelName: "RS 5 Coupé",
    brand: "Audi",
    price: 640,
    fuelType: "Gasolina",
    transmission: "Automatico",
    carUrl: "https://firebasestorage.googleapis.com/v0/b/rentx-plm.appspot.com/o/r5coupe.png?alt=media&token=187cde80-c107-4bd6-a68e-dac7534bd764",
  },
  {
    fullName: "Audi Lancer Evo X",
    modelName: "Lancer Evo X",
    brand: "Audi",
    price: 640,
    fuelType: "Gasolina",
    transmission: "Automatico",
    carUrl: "https://firebasestorage.googleapis.com/v0/b/rentx-plm.appspot.com/o/lancerexox.png?alt=media&token=c4b2d956-ebbd-4fb3-a6e3-cc79737ca4d2",
  },

  {
    fullName: "Lamborghini Huracan",
    modelName: "Huracan",
    brand: "Lamborghini",
    price: 980,
    fuelType: "Gasolina",
    transmission: "Manual",
    carUrl: "https://firebasestorage.googleapis.com/v0/b/rentx-plm.appspot.com/o/huracan.png?alt=media&token=70153cd0-7a73-4169-9683-7febd22fb68f",
  },
  {
    fullName: "Porche Panamera",
    modelName: "Panamera",
    brand: "Porche",
    price: 990,
    fuelType: "Gasolina",
    transmission: "Manual",
    carUrl: "https://firebasestorage.googleapis.com/v0/b/rentx-plm.appspot.com/o/panamera.png?alt=media&token=4a56c04a-2c1e-444c-ac5d-3e50b32e2f7c",
  },
];
