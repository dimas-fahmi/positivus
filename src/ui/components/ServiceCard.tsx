import { cn } from "@/src/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const serviceCardVariants = cva(
  "h-[270px] rounded-b-4xl relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary-background text-primary-foreground",
        secondary: "bg-secondary-background text-secondary-foreground",
        tertiary: "bg-tertiary-background text-tertiary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof serviceCardVariants> {
  label: string;
  illustration: string;
}

const headingVariantMap: Record<
  NonNullable<CardProps["variant"]>,
  "positive" | "default" | "negative"
> = {
  default: "negative",
  secondary: "positive",
  tertiary: "default",
};

const ServiceCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, label, illustration, ...props }, ref) => {
    const headingVariant = headingVariantMap[variant ?? "default"];
    const headings = label ? label.split("[break]") : ["Undefined"];

    return (
      <div className="bg-primary-foreground h-[280px] rounded-4xl overflow-hidden border-1">
        <div
          className={cn(serviceCardVariants({ variant }), className)}
          ref={ref}
          {...props}
        >
          <div className="absolute inset-0 grid grid-cols-2">
            {/* Content */}
            <div className="flex flex-col p-8">
              {headings.map((heading, index) => (
                <Heading key={index} variant={headingVariant} size={"xs"}>
                  {heading}
                </Heading>
              ))}
            </div>

            {/* Ilustration */}
            <div className="flex items-center justify-center p-4">
              <Image
                width={180}
                height={180}
                src={
                  illustration ??
                  "/resources/images/tokyo-magnifier-web-search-with-elements 2.png"
                }
                alt={`An image for${headings.map(
                  (heading) => ` ${heading}`
                )}'s Illustration`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ServiceCard;
