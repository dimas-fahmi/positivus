import { cn } from "@/src/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

// Variants
const headingVariants = cva(
  "px-2 tracking-wider py-0 text-3xl flex items-center justify-center font-mono rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary-background text-primary-foreground",
        positive: "bg-secondary-foreground text-secondary-background",
        negative: "bg-secondary-background text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(headingVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

export default Heading;
