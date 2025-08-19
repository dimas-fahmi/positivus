"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/src/hooks/useScrollDirection";

const NavBar = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbar = useRef<HTMLElement | null>(null);

  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      // Get Scrolling position
      const position = window.scrollY;
      const isPastTreshold = position > 200;

      // Render Clone Navbar if passed treshold
      if (isPastTreshold && scrollDirection === "up") {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, [navbar, setSticky, scrollDirection]);

  return (
    <>
      {/* NavBar */}
      <nav
        ref={navbar}
        className={`${
          sticky ? "fixed" : "absolute"
        } flex xl:px-0 px-4 top-0 left-0 right-0 z-30 bg-background py-4 lg:py-6 max-w-7xl m-auto font-mono justify-between md:grid md:grid-cols-[0.25fr_0.5fr_0.25fr]`}
      >
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
        <ul className="hidden md:flex items-center gap-6 font-semibold justify-center">
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li className="hidden lg:block">
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
        <div className="hidden lg:flex items-center justify-end">
          <Button size={"xl"}>Request a quote</Button>
        </div>
        <div className="hidden md:flex lg:hidden items-center justify-end">
          <Button size={"md"}>Request a quote</Button>
        </div>

        {/* Menu Button [mobile] */}
        <button
          className="md:hidden active:scale-90 transition-all duration-300 cursor-pointer"
          onClick={() => setOverlayOpen((overlay) => !overlay)}
        >
          {overlayOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`${
          overlayOpen ? "fixed" : "hidden"
        } bg-background border rounded-md md:hidden top-24 left-0 right-0 mx-4 p-6 space-y-6`}
      >
        {/* Nav Links */}
        <ul className="flex flex-col gap-4 font-mono text-xl">
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
        <div className="flex justify-center">
          <Button size={"xl"}>Request a quote</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
