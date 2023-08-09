"use client";

import React, { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-center w-full px-20 py-5 text-lg font-medium text-center duration-300 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto bg-secondary text-background hover:bg-secondary-darkened hover:transition-all"
    >
      {children}
    </button>
  );
}
