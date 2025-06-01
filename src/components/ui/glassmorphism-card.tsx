
import React from "react";
import { cn } from "@/lib/utils";

interface GlassmorphismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  animateExit?: boolean;
}

const GlassmorphismCard = ({ 
  children, 
  className, 
  hoverable = false,
  animateExit = false,
  ...props 
}: GlassmorphismCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/25 backdrop-blur-lg border border-white/40 rounded-xl shadow-xl p-4 sm:p-5 md:p-6", 
        hoverable && "transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl hover:bg-white/30",
        animateExit && "transition-all duration-300 exit:opacity-0 exit:translate-y-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { GlassmorphismCard };
