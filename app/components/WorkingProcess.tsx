"use client";

import Accordion from "@/src/ui/components/Accordion";
import SectionHeader from "@/src/ui/components/SectionHeader";
import React from "react";

const WorkingProcess = () => {
  return (
    <section id="workingProcess">
      {/* Header */}
      <SectionHeader
        header="Our Working Process"
        subtitle="Step-by-Step Guide to Achieving Your Business Goals"
      />

      {/* Content */}
      <div className="mt-9">
        <Accordion>
          <Accordion.Item
            title="Consultation"
            content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
          />
          <Accordion.Item
            title="Research"
            content="After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals. "
          />
          <Accordion.Item
            title="Implementation"
            content="Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget."
          />
          <Accordion.Item
            title="Optimization"
            content="After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement."
          />
          <Accordion.Item
            title="Reporting"
            content="Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies."
          />
          <Accordion.Item
            title="Improvement"
            content="Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals."
          />
        </Accordion>
      </div>
    </section>
  );
};

export default WorkingProcess;
