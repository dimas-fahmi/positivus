import React from "react";
import LinkArrow from "./LinkArrow";

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

          <LinkArrow href={href} label="Case Info" iconSize={34} />
        </div>
      </div>
    );
  }
);

export default CaseStudyCard;
