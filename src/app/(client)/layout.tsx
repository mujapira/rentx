"use client";

import { SideBar } from "@/components/Sidebar";
import React from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="w-full">
      <SideBar />
      <div className="ml-20">{children}</div>
    </div>
  );
}
