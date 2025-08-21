import Button from "@/src/ui/components/Button";
import SectionHeader from "@/src/ui/components/SectionHeader";
import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <section id="contactForm">
      {/* Header */}
      <SectionHeader
        header="Contact Form"
        subtitle="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        className="mb-11"
      />

      {/* Content */}
      <div className="bg-tertiary-background text-tertiary-foreground grid grid-cols-1 lg:grid-cols-2 rounded-4xl overflow-hidden">
        {/* Form Section */}
        <div className="p-16 flex items-center">
          {/* Content Wrapper */}
          <div className="w-full">
            {/* Radio Select */}
            <div></div>

            {/* Form */}
            <form action="" className="space-y-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-lg">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border rounded-xl h-13 bg-secondary-foreground text-secondary-background px-4 outline-0"
                  autoComplete="off"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="border rounded-xl h-13 bg-secondary-foreground text-secondary-background px-4 outline-0"
                  autoComplete="off"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-lg">
                  Message
                </label>
                <textarea
                  rows={3}
                  id="message"
                  name="message"
                  className="border rounded-xl bg-secondary-foreground text-secondary-background px-4 outline-0 overflow-hidden h-fit p-4"
                />
              </div>

              <Button
                variant={"negativePrimaryActive"}
                className="block w-full hover:scale-105"
                size={"xl"}
              >
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden lg:flex justify-end items-center overflow-hidden">
          <Image
            width={780}
            height={780}
            src={"/resources/images/Illustration 3.png"}
            alt="Illustration Contact Form"
            className="lg:translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
