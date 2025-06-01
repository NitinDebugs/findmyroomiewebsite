
import React from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onResetFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onResetFilters }) => {
  return (
    <div className="text-center py-12 sm:py-16">
      <div className="text-3xl sm:text-4xl md:text-5xl mb-4">😕</div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-readable">No Matches Found</h3>
      <p className="text-readable-secondary mb-6 text-sm sm:text-base px-4">Try adjusting your filters to see more results</p>
      <Button onClick={onResetFilters} className="neon-button">
        Reset Filters
      </Button>
    </div>
  );
};

export default EmptyState;
