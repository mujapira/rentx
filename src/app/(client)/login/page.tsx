"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import LoginPageCar from "../../../assets/login-page-car.png";
import LoginPageFrames from "../../../assets/login-page-frames.png";
import { archivo } from "@/styles/fonts";
import Link from "next/link";
import { RiLock2Line, RiMailLine } from "react-icons/ri";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    alert("Login efetuado com sucesso!");
  }

  return (
    <main className="flex items-center  min-h-screen mt-[-80px] px-2 xl:px-40 bg-background-darkened">
      <div className="relative w-1/2 h-[613px] max-w-2xl hidden xl:flex justify-center">
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
      <div className="flex flex-col items-center ml-[136px] justify-start w-1/2 xl:items-start ">
        <h1
          className={`${archivo.className} text-[44px] font-bold leading-[54px] not-italic text-heading  text-center xl:text-left`}
        >
          Estamos quase lá.
        </h1>

        <span className="font-body text-md leading-[30px] not-italic text-primary mt-3 text-center xl:text-left">
          Faça seu login para começar uma
          <br />
          experiência incrível.
        </span>

        <form className="mt-10 w-[384px] flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row border border-text-secondary w-full">
              <div className="p-[23px] bg-background border-r border-text-secondary">
                <RiMailLine color="#7A7A80" size={20} />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="p-[23px] w-full placeholder:text-text-details placeholder:text-[16px]"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-row border border-text-secondary w-full">
              <div className="p-[23px] bg-background border-r border-text-secondary">
                <RiLock2Line color="#7A7A80" size={20} />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                className="p-[23px] w-full placeholder:text-text-details placeholder:text-[16px]"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>

          <Link href="/login" className="my-6 hover:underline">
            Esqueci minha senha
          </Link>

          <PrimaryButton type="submit">Login</PrimaryButton>
          <button className="mt-4 py-5 px-20 border-2 border-text-label text-primary-heading font-medium duration-200 hover:border-secondary transition-all">
            Criar conta gratuita
          </button>
        </form>
      </div>
    </main>
  );
}
