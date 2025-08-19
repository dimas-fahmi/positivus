import Heading from "@/src/ui/components/Heading";
import ServiceCard from "@/src/ui/components/ServiceCard";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-16 md:px-0 md:mb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 text-center md:text-start">
        <Heading className="mx-auto md:mx-0">Services</Heading>
        <p className="max-w-[60ch]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card */}
        <ServiceCard
          variant={"tertiary"}
          label="Search Engine[break]Optimization"
          illustration="/resources/images/tokyo-magnifier-web-search-with-elements 2.png"
          href="/anywehre"
        />
        <ServiceCard
          variant={"default"}
          label="Pay-per-click[break]Advertising"
          illustration="/resources/images/tokyo-selecting-a-value-in-the-browser-window 1.png"
          href="/anywehre"
        />
        <ServiceCard
          variant={"secondary"}
          label="Social Media[break]Marketing"
          illustration="/resources/images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png"
          href="/anywehre"
        />
        <ServiceCard
          variant={"tertiary"}
          label="Email[break]Marketing"
          illustration="/resources/images/tokyo-sending-messages-from-one-place-to-another 1.png"
          href="/anywehre"
        />
        <ServiceCard
          variant={"default"}
          label="Content[break]Creation"
          illustration="/resources/images/tokyo-many-browser-windows-with-different-information 1.png"
          href="/anywehre"
        />
        <ServiceCard
          variant={"secondary"}
          label="Analytic and[break]Tracking"
          illustration="/resources/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"
          href="/anywehre"
        />
      </div>
    </section>
  );
};

export default Services;
