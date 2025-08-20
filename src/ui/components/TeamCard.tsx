import { cn } from "@/src/utils";
import React from "react";
import ProfileContainer from "./ProfileContainer";
import LinkedIn from "../logos/LinkedIn";

export interface TeamCardProps {
  name: string;
  about: string;
  position: string;
  image: string;
  className?: string;
}

const TeamCard = ({
  about,
  image,
  name,
  position,
  className,
}: TeamCardProps) => {
  return (
    <div
      className={cn(
        "border-[1px_1px_7px_1px] p-11 rounded-4xl space-y-6",
        className
      )}
    >
      {/* Header */}
      <div className="flex gap-4">
        {/* Image */}
        <div>
          <ProfileContainer src={image} />
        </div>

        {/* Information */}
        <div className="flex flex-col justify-between flex-grow">
          {/* Social */}
          <div className="flex justify-end">
            <a href={"/"}>
              <LinkedIn className="w-6 h-6" />
            </a>
          </div>

          {/* Name & Position */}
          <div className="pb-3">
            <h1 className="font-mono font-semibold text-xl">Jhon Doe</h1>
            <p className="text-sm">CEO and Founder</p>
          </div>
        </div>
      </div>

      <hr />

      {/* About Section */}
      <p>
        10+ years of experience in digital marketing. Expertise in SEO, PPC, and
        content strategy
      </p>
    </div>
  );
};

export default TeamCard;
