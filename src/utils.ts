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
    fullName: "Toyota Corolla",
    modelName: "Corolla",
    brand: "Toyota",
    price: 500,
    fuelType: "Alcool",
    transmission: "Automatico",
    carUrl: "https://picsum.photos/280/131?blur=2?random=1",
  },
  {
    fullName: "Honda Civic",
    modelName: "Civic",
    brand: "Honda",
    price: 600,
    fuelType: "Gasolina",
    transmission: "Automatico",
    carUrl: "https://picsum.photos/280/131?blur=2?random=2",
  },
  {
    fullName: "Ford Mustang",
    modelName: "Mustang",
    brand: "Ford",
    price: 1000,
    fuelType: "Gasolina",
    transmission: "Manual",
    carUrl: "https://picsum.photos/280/131?blur=2?random=3",
  },
  {
    fullName: "Chevrolet Camaro",
    modelName: "Camaro",
    brand: "Chevrolet",
    price: 1100,
    fuelType: "Gasolina",
    transmission: "Manual",
    carUrl: "https://picsum.photos/280/131?blur=2?random=4",
  },
  {
    fullName: "Tesla Model S",
    modelName: "Model S",
    brand: "Tesla",
    price: 2000,
    fuelType: "Eletrico",
    transmission: "Automatico",
    carUrl: "https://picsum.photos/280/131?blur=2?random=5",
  },
  {
    fullName: "BMW 3 Series",
    modelName: "3 Series",
    brand: "BMW",
    price: 1500,
    fuelType: "Gasolina",
    transmission: "Automatico",
    carUrl: "https://picsum.photos/280/131?blur=2?random=6",
  },
  {
    fullName: "Audi A4",
    modelName: "A4",
    brand: "Audi",
    price: 400,
    fuelType: "Gasolina",
    transmission: "Automatico",
    carUrl: "https://picsum.photos/280/131?blur=2?random=7",
  },
  {
    fullName: "Mercedes-Benz C-Class",
    modelName: "C-Class",
    brand: "Mercedes-Benz",
    price: 1700,
    fuelType: "Diesel",
    transmission: "Automatico",
    carUrl: "https://picsum.photos/280/131?blur=2?random=8",
  },
  {
    fullName: "Lamborghini Aventador",
    modelName: "Aventador",
    brand: "Lamborghini",
    price: 5000,
    fuelType: "Gasolina",
    transmission: "Manual",
    carUrl: "https://picsum.photos/280/131?blur=2?random=9",
  },
];
