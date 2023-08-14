"use client";

import { PrimaryButton } from "@/components/PrimaryButton";
import { archivo } from "@/styles/fonts";
import Image from "next/image";
import LoginPageFrames from "@/assets/login-page-frames.png";
import RegisterPageCar from "@/assets/register-car.png";
import { RiLock2Line, RiUser6Line } from "react-icons/ri";
import { MailIcon } from "lucide-react";
import { PiCar } from "react-icons/pi";

export default function Cadastro() {
  function handleSubmit() {
    console.log("submit");
  }

  return (
    <main className="flex items-start justify-center min-h-screen px-2 pt-16 xl:items-start xl:px-40 bg-background-darkened">
      <div className="flex flex-col items-center justify-center w-auto ml-0 xl:w-1/3 xl:items-start ">
        <h1
          className={`${archivo.className} text-4xl font-bold leading-[54px] not-italic text-heading  text-center xl:text-left`}
        >
          Crie sua conta.
        </h1>

        <span className="font-body text-md leading-[24px] not-italic text-text mt-3 text-center xl:text-left">
          Faça seu cadastro de forma <br />
          rápida e fácil.
        </span>

        <form className="mt-10 w-full max-w-[400px] flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-row w-full border border-text-secondary">
            <div className="p-[23px] bg-background border-r border-text-secondary">
              <RiUser6Line color="#7A7A80" size={20} />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome completo"
              className="p-[23px] w-full placeholder:text-text-details placeholder:text-[16px]"
              // onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="flex flex-row w-full border border-text-secondary">
            <div className="p-[23px] bg-background border-r border-text-secondary">
              <MailIcon color="#7A7A80" size={20} />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="p-[23px] w-full placeholder:text-text-details placeholder:text-[16px]"
            />
          </div>

          <div className="flex flex-row w-full border border-text-secondary">
            <div className="p-[23px] bg-background border-r border-text-secondary">
              <PiCar color="#7A7A80" size={20} />
            </div>
            <input
              type="text"
              name="cnh"
              id="cnh"
              placeholder="CNH"
              className="p-[23px] w-full placeholder:text-text-details placeholder:text-[16px]"
            />
          </div>

          <div className="flex flex-row w-full border border-text-secondary">
            <div className="p-[23px] bg-background border-r border-text-secondary">
              <RiLock2Line color="#7A7A80" size={20} />
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              className="p-[23px] w-full placeholder:text-text-details placeholder:text-[16px]"
              // onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="flex flex-row w-full border border-text-secondary">
            <div className="p-[23px] bg-background border-r border-text-secondary">
              <RiLock2Line color="#7A7A80" size={20} />
            </div>
            <input
              type="password"
              name="confirmPassword"
              id="password"
              placeholder="Repita a senha"
              className="p-[23px] w-full placeholder:text-text-details placeholder:text-[16px]"
              // onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            disabled={true}
            type="submit"
            className={` flex mt-4 items-center justify-center w-full px-20 py-5 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto bg-secondary text-background hover:bg-secondary-darkened hover:transition-all`}
          >
            Cadastrar
          </button>
        </form>
      </div>

      <div className="relative w-auto xl:w-1/2 h-[613px] max-w-2xl hidden xl:flex justify-center">
        <Image
          className="absolute z-0 max-w-2xl inset-center"
          objectPosition="center"
          src={LoginPageFrames}
          width={477}
          height={612}
          alt="Picture of the author"
        />
        <Image
          className="absolute z-10 inset-center"
          objectPosition="center"
          src={RegisterPageCar}
          width={648}
          height={286}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
}
