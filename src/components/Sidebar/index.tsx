"use client";

import Image from "next/image";

import Logo from "../../assets/logo.svg";

export function SideBar() {
  return (
    <nav className="fixed h-full bg-primary w-20 flex flex-col">
      <div className="w-20 h-20 flex content-center justify-center bg-secondary">
        <Image src={Logo} alt="rentx-logo" width={30} height={20} />
      </div>

      <div className="flex flex-col">
        <div></div>
      </div>
    </nav>
  );
}
