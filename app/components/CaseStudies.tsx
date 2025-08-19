import CaseStudyCard from "@/src/ui/components/CaseStudyCard";
import Heading from "@/src/ui/components/Heading";
import React from "react";

const cases = [
  {
    caseInfo:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    casePath: "/",
  },
  {
    caseInfo:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    casePath: "/",
  },
  {
    caseInfo:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    casePath: "/",
  },
];

const CaseStudies = () => {
  return (
    <section id="caseStudies" className="space-y-8 mb-16">
      {/* Header */}
      <div className="md:flex items-center gap-4 text-center md:text-start">
        <Heading className="mb-4 md:mb-0 mx-auto md:mx-0">Case Studies</Heading>
        <p className="max-w-[60ch]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Card */}
        {cases.map((item, index) => (
          <CaseStudyCard
            key={index}
            text={item.caseInfo}
            href={item.casePath}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
