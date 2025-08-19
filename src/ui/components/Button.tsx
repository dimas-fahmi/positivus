import { cn } from "@/src/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

// Variants
const buttonVariants = cva("border p-4 rounded-xl cursor-pointer", {
  variants: {
    variant: {
      default: "hover:bg-secondary-background hover:text-secondary-foreground",
      negative:
        "bg-secondary-background text-secondary-foreground hover:bg-background hover:text-foreground",
      primary: "bg-green-500 text-white hover:bg-green-600",
      negativePrimaryActive:
        "bg-secondary-background text-secondary-foreground hover:bg-primary-background hover:text-primary-foreground hover:scale-115 transition-all duration-300 hover:border-primary-background",
    },
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-md px-5 py-3",
      lg: "text-lg px-6 py-4",
      xl: "text-xl px-8 py-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

// Interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

export default Button;
