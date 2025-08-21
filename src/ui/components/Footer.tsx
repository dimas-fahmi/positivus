import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkedIn from "../logos/LinkedIn";
import Facebook from "../logos/Facebook";
import Instagram from "../logos/Instagram";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="max-w-7xl m-auto space-y-6 px-4 lg:px-0">
      {/* Content Wrapper */}
      <div className="bg-secondary-background space-y-8 text-secondary-foreground p-16 rounded-t-[50px] pb-24">
        {/* Header Section */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 mb-16">
          {/* Logo */}
          <div className="flex justify-center lg:block">
            <Image
              width={240}
              height={240}
              src={"/resources/logos/logo.png"}
              alt="Logo"
              className="invert-100"
            />
          </div>

          {/* NavLinks */}
          <ul className="flex flex-col md:flex-row gap-4 items-center justify-center text-nowrap">
            <li>
              <Link href={"/"}>About Us</Link>
            </li>
            <li>
              <Link href={"/"}>Services</Link>
            </li>
            <li className="hidden xl:block">
              <Link href={"/"}>Use Cases</Link>
            </li>
            <li>
              <Link href={"/"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex justify-center items-center gap-4">
            <Image
              width={32}
              height={32}
              src={"/resources/logos/Linkedin.png"}
              alt="linkeding"
            />
            <Image
              width={32}
              height={32}
              src={"/resources/logos/Facebook.png"}
              alt="linkeding"
            />
            <Image
              width={32}
              height={32}
              src={"/resources/logos/Twitter.png"}
              alt="linkeding"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.3fr_0.7fr]">
          {/* Contact and address */}
          <div className="space-y-4 text-center lg:text-start">
            <h1 className="text-xl font-semibold text-primary-background tracking-wider">
              Contact Us
            </h1>
            <div className="opacity-70 font-light font-sans space-y-2">
              <p>example@positivus.dimasfahmi.pro</p>

              <p>+1 234-567-890</p>
              <p>123 Stree, City Name</p>
              <p>State, Country Name</p>
            </div>
          </div>

          {/* Subscribe to newsletter form */}
          <div className="lg:bg-slate-700 p-4 px-0 lg:px-16 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="flex-grow w-full border p-4 rounded-xl"
            />
            <Button variant={"primary"} className="border-0 w-full" size={"xl"}>
              Subscribe to news
            </Button>
          </div>
        </div>

        <hr />

        {/* More Section */}
        <div className="md:flex md:justify-between text-center lg:text-start">
          {/* Copyright section */}
          <div>2024 Positivus - Made With Astro by Manul</div>

          {/* Credits Section */}
          <div>Credits ( Olga, Esteban) & Licence</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
