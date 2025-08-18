import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="grid font-mono grid-cols-2 h-[480px]">
      {/* Hero Content */}
      <div className="flex items-center justify-center">
        {/* Content Wrapper */}
        <div>
          <h1 className="font-bold text-6xl mb-4">
            Navigating the digital landscape for success
          </h1>
          <p className="max-w-md mb-6">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-secondary-background text-secondary-foreground px-6 py-4 rounded-2xl text-xl hover:bg-transparent hover:text-foreground border cursor-pointer">
            Book a consultant
          </button>
        </div>
      </div>

      {/* Hero Illustration */}
      <div className="flex items-center justify-end">
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
