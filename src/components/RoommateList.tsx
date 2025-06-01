
import React from "react";
import RoommateCard from "./RoommateCard";
import EmptyState from "./EmptyState";

interface Roommate {
  id: number;
  name: string;
  age: number;
  gender: string;
  occupation: string;
  location: string;
  budget: number;
  bio: string;
  compatibility: number;
  smoking: string;
  foodType: string;
  partyPreference: string;
  petPreference: string;
  profilePic: string;
}

interface RoommateListProps {
  roommates: Roommate[];
  totalRoommates: number;
  onViewProfile: (roommate: Roommate) => void;
  onResetFilters: () => void;
}

const RoommateList: React.FC<RoommateListProps> = ({ 
  roommates, 
  totalRoommates, 
  onViewProfile, 
  onResetFilters 
}) => {
  return (
    <div className="md:w-3/4">
      <div className="mb-4 text-contrast-light">
        Showing {roommates.length} of {totalRoommates} roommates
      </div>
      
      <div className="space-y-6">
        {roommates.length > 0 ? (
          roommates.map((roommate) => (
            <RoommateCard
              key={roommate.id}
              roommate={roommate}
              onViewProfile={onViewProfile}
            />
          ))
        ) : (
          <EmptyState onResetFilters={onResetFilters} />
        )}
      </div>
    </div>
  );
};

export default RoommateList;
