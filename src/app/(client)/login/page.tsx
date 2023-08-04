import React from "react";
import Image from "next/image";
import LoginPageCar from "../../../assets/login-page-car.png";
import LoginPageFrames from "../../../assets/login-page-frames.png";
import { archivo } from "@/styles/fonts";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen px-2 xl:px-40 bg-background-darkened">
      <div className="relative w-full h-[613px] max-w-2xl hidden xl:flex">
        <Image
          className="absolute z-0 max-w-2xl inset-center"
          objectPosition="center"
          src={LoginPageFrames}
          width={408}
          height={198}
          alt="Picture of the author"
        />
        <Image
          className="absolute z-10 inset-center"
          objectPosition="center"
          src={LoginPageCar}
          width={577}
          height={712}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col items-center justify-start w-full max-w-lg xl:items-start">
        <h1
          className={`${archivo.className} text-[44px] font-semibold leading-[54px] not-italic text-primary mt-28 text-center xl:text-left`}
        >
          Estamos quase lá.
        </h1>

        <span className="font-body text-md leading-[30px] not-italic text-primary mt-3 text-center xl:text-left">
          Faça seu login para começar uma
          <br />
          experiência incrível.
        </span>

        {/* <Link
          href="/inicio"
          className="flex items-center justify-center px-20 py-6 mt-16 text-lg font-medium text-center duration-300 bg-secondary text-background hover:bg-secondary-darkened hover:transition-all"
        >
          Começar agora
        </Link> */}
      </div>
    </main>
  );
}
