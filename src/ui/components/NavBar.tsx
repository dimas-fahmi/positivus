"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="md:px-0 px-4 py-4 lg:py-6 max-w-7xl m-auto font-mono grid grid-cols-[0.25fr_0.5fr_0.25fr]">
      {/* Brand */}
      <div className="flex items-center">
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
      <div className="flex items-center justify-end">
        <Button size={"xl"}>Request a quote</Button>
      </div>
    </nav>
  );
};

export default NavBar;
