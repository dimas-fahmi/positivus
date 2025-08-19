import React from "react";

export interface CaseStudyCardProps {
  text: string;
  href: string;
}

const CaseStudyCard = React.forwardRef<HTMLDivElement, CaseStudyCardProps>(
  ({ href, text }) => {
    return (
      <div className="bg-secondary-background text-secondary-foreground p-16 rounded-[50px]">
        {/* Content Wrapper */}
        <div className="space-y-6">
          <p>{text}</p>

          <a href={href}>Case Info</a>
        </div>
      </div>
    );
  }
);

export default CaseStudyCard;
