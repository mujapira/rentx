import Image from "next/image";
import success from "@/assets/success-rent.png";
import successIcon from "@/assets/success-icon.png";
import { archivo } from "@/styles/fonts";
import Link from "next/link";

export default function Sucesso() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full min-h-screen bg-primary">
      <Image src={success} width={929} height={585} alt="" />

      <div className="absolute flex flex-col items-center justify-center gap-6 text-center inset-center text-background">
        <Image src={successIcon} width={78} height={56} alt="" className="mb-6" />

        <h1 className={`${archivo.className} text-5xl font-semibold`}>Carro alugado!</h1>

        <span className="font-normal text-text-details">
          agora você só precisa ir até a concessionária <br />
          da RentX pegar o seu automóvel
        </span>

        <Link href={"/inicio"} className="px-11 py-4 bg-[#29292E] mt-6">Ok</Link>
      </div>
    </div>
  );
}
