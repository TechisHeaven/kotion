"use client";
import Image from "next/image";
import { NavItems } from "./NavItems";
import React from "react";

export default function Header() {
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });

  return (
    <header
      className={`p-4 flex items-center gap-2 transition-all sticky top-0 bg-white ${
        scroll && "sticky  shadow-sm border-b-2"
      }`}
    >
      <div className="flex items-center gap-2 font-bold">
        <Image src="/Logo.png" width={32} height={32} alt="logo" />
        <p>Kotion</p>
      </div>
      <div>
        <NavItems />
      </div>
    </header>
  );
}
