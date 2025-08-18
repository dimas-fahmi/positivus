import { cn } from "@/src/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

// Variants
const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      negative: "bg-red-500 text-white hover:bg-red-600",
      primary: "bg-green-500 text-white hover:bg-green-600",
    },
  },
});

// Interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

export default Button;
