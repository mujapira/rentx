import Image from "next/image";
import Logo from "../assets/rentx-logo.png";
import LandingPageCar from "../assets/landing-page-car.png";
import LandingPageFrames from "../assets/landing-page-frames.png";

export default function Home() {
  
  return (
    <main className="flex items-center justify-between min-h-screen px-40 bg-primary">
      <div className="flex flex-col w-full">
        <Image src={Logo} width={200} height={22} alt="Picture of the author" />

  
        <h1 className="text-5xl font-semibold font-[archivo]">Alugue em carro de maneira simples e fácil</h1>
        <span>
          Vários modelos para você dirigir
          <br />
          seguro, com conforto e segurança.
        </span>
      </div>

      <div className="relative w-full h-[613px]">
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
