"use client";

import Image from "next/image";
import { RiHome2Line, RiCarLine, RiUser6Line } from "react-icons/ri";
import Logo from "../../assets/logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SideBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed flex flex-col w-20 h-full bg-primary">
      <Link
        href="/"
        className="flex content-center justify-center w-20 h-20 bg-secondary"
      >
        <Image src={Logo} alt="rentx-logo" width={30} height={20} />
      </Link>

      <div className="flex flex-col my-auto">
        <Link
          href="/inicio"
          className={`flex items-center justify-center h-14 ${
            pathname == "/inicio"
              ? "bg-primary-darkened border-l border-secondary"
              : "bg-primary-primary hover:border-l border-secondary cursor-pointer"
          }`}
          prefetch
        >
          <RiHome2Line color="#FFF" size="22px" />
        </Link>
        <Link
          href="/carros"
          className={`flex items-center justify-center h-14 ${
            (pathname == "/carros") || (pathname == "/carros/filtros")
              ? "bg-primary-darkened border-l border-secondary"
              : "bg-primary-primary hover:border-l border-secondary cursor-pointer"
          }`}
          prefetch
        >
          <RiCarLine color="#FFF" size="22px" />
        </Link>
        <Link
          href="/perfil"
          className={`flex items-center justify-center h-14 ${
            pathname == "/perfil" ||
            pathname == "/login" ||
            pathname == "/cadastrar" ||
            pathname == "/esqueci-minha-senha"
              ? "bg-primary-darkened border-l border-secondary"
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
