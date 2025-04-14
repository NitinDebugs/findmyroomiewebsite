
import React from "react";
import { cn } from "@/lib/utils";

interface GlassmorphismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const GlassmorphismCard = ({ 
  children, 
  className, 
  hoverable = false,
  ...props 
}: GlassmorphismCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6", 
        hoverable && "transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { GlassmorphismCard };
