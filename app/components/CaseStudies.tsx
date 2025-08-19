import Heading from "@/src/ui/components/Heading";
import React from "react";

const CaseStudies = () => {
  return (
    <section id="caseStudies">
      {/* Header */}
      <div className="md:flex items-center gap-4 text-center md:text-start">
        <Heading className="mb-4 md:mb-0 mx-auto md:mx-0">Case Studies</Heading>
        <p className="max-w-[60ch]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* Cards */}
    </section>
  );
};

export default CaseStudies;
