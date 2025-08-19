import { cn } from "@/src/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const linkArrowsVariants = cva("flex items-center", {
  variants: {
    variant: {
      default: "text-primary-background",
      positive: "text-tertiary-background",
      negative: "text-secondary-background",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LinkArrowProps
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    VariantProps<typeof linkArrowsVariants> {
  label: string;
  iconSize?: number;
}

const LinkArrow = React.forwardRef<HTMLAnchorElement, LinkArrowProps>(
  ({ className, variant, label, iconSize, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(linkArrowsVariants({ variant }), className)}
      >
        {/* Label */}
        <div>{label}</div>

        {/* Arrow */}
        <div>
          <ArrowUpRight size={iconSize ?? 22} />
        </div>
      </a>
    );
  }
);

export default LinkArrow;
