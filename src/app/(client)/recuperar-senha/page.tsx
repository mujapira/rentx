"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import LoginPageCar from "../../../assets/login-page-car.png";
import LoginPageFrames from "../../../assets/login-page-frames.png";
import { archivo } from "@/styles/fonts";
import Link from "next/link";
import { RiLock2Line, RiMailLine } from "react-icons/ri";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useRouter } from "next/navigation";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    alert("Email enviado com sucesso!");
    router.push("/login");
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
          Recuperar senha
        </h1>

        <span className="font-body text-md leading-[30px] not-italic text-text mt-3 text-center xl:text-left">
          Insira seu e-mail para receber um <br />
          link de recuperação
        </span>

        <form className="mt-10 w-[384px] flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row w-full border border-text-secondary">
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
            <PrimaryButton disabled={!email} type="submit">
              Enviar
            </PrimaryButton>
            <Link href="/login" className="hover:underline">
              voltar para login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
