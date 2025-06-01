
import React from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onResetFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onResetFilters }) => {
  return (
    <div className="text-center py-16">
      <div className="text-4xl mb-4">😕</div>
      <h3 className="text-xl font-semibold mb-2">No Matches Found</h3>
      <p className="text-white/70 mb-6">Try adjusting your filters to see more results</p>
      <Button onClick={onResetFilters} className="neon-button">
        Reset Filters
      </Button>
    </div>
  );
};

export default EmptyState;
