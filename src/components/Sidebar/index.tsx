"use client";

import Image from "next/image";
import { RiHome2Line, RiCarLine, RiUser6Line } from "react-icons/ri";
import Logo from "../../assets/logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SideBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 z-40 flex flex-col w-full h-auto sm:h-full sm:w-20 bg-primary">
      <Link
        href="/inicio"
        className="content-center justify-center hidden w-20 h-20 sm:flex bg-secondary"
      >
        <Image src={Logo} alt="rentx-logo" width={30} height={20} />
      </Link>

      <div className="flex flex-row max-sm:mx-auto sm:my-auto sm:flex-col">
        <Link
          href="/inicio"
          className={`flex items-center justify-center h-14 max-sm:px-10 ${
            pathname.includes("/inicio")
              ? "bg-primary-darkened border-b sm:border-b-0 border-l-0 sm:border-l border-secondary"
              : "bg-primary-primary hover:border-l border-secondary cursor-pointer"
          }`}
          prefetch
        >
          <RiHome2Line color="#FFF" size="22px" />
        </Link>
        <Link
          href="/carros"
          className={`flex items-center justify-center h-14 max-sm:px-10 ${
            pathname.includes("/carros")
              ? "bg-primary-darkened border-b sm:border-b-0 border-l-0 sm:border-l border-secondary"
              : "bg-primary-primary hover:border-l border-secondary cursor-pointer"
          }`}
          prefetch
        >
          <RiCarLine color="#FFF" size="22px" />
        </Link>
        <Link
          href="/perfil"
          className={`flex items-center justify-center h-14 max-sm:px-10 ${
            (!pathname.includes("/inicio") && !pathname.includes("/carros"))
              ? "bg-primary-darkened border-b sm:border-b-0 border-l-0 sm:border-l border-secondary"
              : "bg-primary-primary hover:border-l border-secondary cursor-pointer"
          }`}
          prefetch
        >
          <RiUser6Line color="#FFF" size="22px" />
        </Link>
      </div>
    </nav>
  );
}
