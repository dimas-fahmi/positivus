import Heading from "@/src/ui/components/Heading";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-16">
      {/* Header */}
      <div className="flex gap-4">
        <Heading>Services</Heading>
        <p className="max-w-[60ch] font-mono">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include
        </p>
      </div>
    </section>
  );
};

export default Services;
