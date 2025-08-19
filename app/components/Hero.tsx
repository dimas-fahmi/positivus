import Button from "@/src/ui/components/Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse mb-16 md:mb-6 md:grid font-mono grid-cols-2 min-h-[480px]"
    >
      {/* Hero Content */}
      <div className="flex items-center justify-center">
        {/* Content Wrapper */}
        <div>
          <h1 className="font-bold text-4xl text-center md:text-start mt-4 md:mt-0 md:text-6xl mb-4">
            Navigating the digital landscape for success
          </h1>
          <p className="max-w-md text-center md:text-start mb-6 block mx-auto md:mx-0">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          {/* <button className="bg-secondary-background text-secondary-foreground px-6 py-4 rounded-2xl text-xl hover:bg-transparent hover:text-foreground border cursor-pointer">
            Book a consultant
          </button> */}

          <Button
            variant={"negative"}
            size={"xl"}
            className="mx-auto md:mx-0 block"
          >
            Book a consultant
          </Button>
        </div>
      </div>

      {/* Hero Illustration */}
      <div className="flex items-center justify-center md:justify-end">
        <Image
          width={500}
          height={500}
          src={"/resources/images/Illustration.png"}
          alt="Hero Illustration"
        />
      </div>
    </section>
  );
};

export default Hero;
