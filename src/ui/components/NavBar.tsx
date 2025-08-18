"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isNotDesktop = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <nav className="p-4 lg:py-6 max-w-6xl m-auto font-mono grid grid-cols-[0.25fr_0.5fr_0.25fr]">
      {/* Brand */}
      <div className="flex items-center justify-center">
        <Image
          width={200}
          height={150}
          src={"/resources/logos/logo.png"}
          alt="Positivus Logo"
          suppressHydrationWarning
        />
      </div>

      {/* NavLinks */}
      <ul className="flex items-center gap-6 font-semibold justify-center">
        <li>
          <Link href={"#"}>About Us</Link>
        </li>
        <li>
          <Link href={"#"}>Services</Link>
        </li>
        <li>
          <Link href={"#"}>Use Cases</Link>
        </li>
        <li>
          <Link href={"#"}>Pricing</Link>
        </li>
        <li>
          <Link href={"#"}>Blog</Link>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="flex items-center justify-center">
        <button className="text-xl border rounded-xl px-8 py-5 cursor-pointer hover:bg-secondary-background hover:text-secondary-foreground">
          Request a quote
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
