import Button from "@/src/ui/components/Button";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contactUs"
      className="relative bg-tertiary-background md:grid md:grid-cols-2 p-6 py-16 md:py-4 md:p-4 md:px-16 rounded-2xl md:h-[280px] mb-16 md:mb-32"
    >
      {/* Content */}
      <div className="flex items-center justify-center md:justify-start">
        {/* Content Wrapper */}
        <div className="max-w-md space-y-5 text-center md:text-start">
          <h1 className="font-bold text-3xl">Let's make things happen</h1>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button
            variant={"negativePrimaryActive"}
            size={"lg"}
            className="block w-full"
          >
            Get your free proposal
          </Button>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden absolute md:-right-14 lg:right-14 -top-14 md:flex justify-center">
        <Image
          width={360}
          height={360}
          src={"/resources/images/Illustration 2.png"}
          alt="Contact us illustration"
        />
      </div>
    </section>
  );
};

export default ContactUs;
