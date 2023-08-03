import Image from "next/image";
import Logo from "../assets/rentx-logo.png";
import LandingPageCar from "../assets/landing-page-car.png";
import LandingPageFrames from "../assets/landing-page-frames.png";
import { archivo } from "../styles/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen px-2 xl:px-40 bg-primary">
      <div className="flex flex-col items-center justify-start w-full max-w-lg xl:items-start">
        <Image src={Logo} width={200} height={22} alt="Picture of the author" />

        <h1
          className={`${archivo.className} text-[54px] font-semibold leading-[54px] not-italic text-background mt-28 text-center xl:text-left`}
        >
          Alugue um
          <br />
          carro de maneira
          <br />
          simples e fácil
        </h1>

        <span className="font-body text-xl leading-[30px] not-italic text-background mt-8 text-center xl:text-left">
          Vários modelos para você dirigir
          <br />
          seguro, com conforto e segurança.
        </span>
      
        <Link href="/inicio" className="flex items-center justify-center px-20 py-6 mt-16 text-lg font-medium text-center duration-300 bg-secondary text-background hover:bg-secondary-darkened hover:transition-all">Começar agora</Link>
      </div>

      <div className="relative w-full h-[613px] max-w-2xl hidden xl:flex">
        <Image
          className="absolute z-10 max-w-2xl inset-center"
          objectPosition="center"
          src={LandingPageCar}
          width={608}
          height={398}
          alt="Picture of the author"
        />
        <Image
          className="absolute z-0 inset-center"
          objectPosition="center"
          src={LandingPageFrames}
          width={477}
          height={612}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
}
