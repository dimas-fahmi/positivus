import { cn } from "@/src/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const profileContainerVariants = cva("profile-container relative", {
  variants: {
    size: {
      sm: "w-20 h-20",
      md: "w-30 h-30",
      lg: "w-80 h-80",
      xl: "w-96 h-96",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ProfileContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof profileContainerVariants> {
  src: string;
}

const ProfileContainer = React.forwardRef<
  HTMLDivElement,
  ProfileContainerProps
>(({ className, size, src, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(profileContainerVariants({ size }), className)}
      {...props}
      style={{
        background: `url(${src}) center/cover
    no-repeat`,
      }}
    >
      <div className="profile-container_green-effect absolute inset-0 bg-primary-background opacity-35" />
    </div>
  );
});

export default ProfileContainer;
