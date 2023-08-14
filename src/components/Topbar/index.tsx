"use client";

import Link from "next/link";
import { RiUser6Line } from "react-icons/ri";
export function Topbar() {
  return (
    <div className="flex items-center justify-between h-20 ml-0 sm:ml-20 bg-background px-4 xl:px-[116px]">
      <Link href="/inicio" className="text-xl not-italic font-semibold text-center text-primary xl:text-left">
        Início
      </Link>

      <div className="flex flex-row items-center gap-4">
        <Link href="/login" className="text-base font-semibold">Faça login</Link>
        <Link href="/perfil" className="flex items-center justify-center w-12 rounded-full bg-text-secondary aspect-square">
          <RiUser6Line size="24" className="font-normal text-text"/>
        </Link>
      </div>
    </div>
  );
}
