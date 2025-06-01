
import React from "react";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { MapPin, User, MessageSquare } from "lucide-react";

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

interface RoommateCardProps {
  roommate: Roommate;
  onViewProfile: (roommate: Roommate) => void;
}

const RoommateCard: React.FC<RoommateCardProps> = ({ roommate, onViewProfile }) => {
  return (
    <GlassmorphismCard className="animate-scale-in" hoverable>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
        <div className="lg:w-1/4 flex flex-col items-center">
          <div className="relative">
            <img 
              src={roommate.profilePic} 
              alt={roommate.name}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-3 border-white/30 shadow-lg" 
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-coral to-teal text-white font-bold rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center text-xs sm:text-sm md:text-base shadow-lg">
              {roommate.compatibility}%
            </div>
          </div>
          <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-700 font-medium">Compatibility</p>
        </div>
        
        <div className="lg:w-3/4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{roommate.name}, {roommate.age}</h3>
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-sky/20 text-sky border border-sky/30">
                {roommate.gender}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-mint/20 text-gray-700 border border-mint/30">
                Budget: ₹{roommate.budget}
              </span>
            </div>
          </div>
          
          <div className="mb-3 flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-coral" />
            {roommate.location}
          </div>
          
          <div className="mb-3 flex items-center text-gray-600 text-sm">
            <User className="h-4 w-4 mr-2 text-teal" />
            {roommate.occupation}
          </div>
          
          <p className="mb-4 text-gray-700 text-sm sm:text-base leading-relaxed">{roommate.bio}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-coral/20 text-gray-700 border border-coral/30">
              🚬 {roommate.smoking}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-peach/30 text-gray-700 border border-sunset/30">
              🍲 {roommate.foodType}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lavender/20 text-gray-700 border border-lavender/30">
              🎉 {roommate.partyPreference}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime/20 text-gray-700 border border-lime/30">
              🐶 {roommate.petPreference}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button
              className="neon-button text-xs sm:text-sm"
              onClick={() => onViewProfile(roommate)}
            >
              View Profile
            </Button>
            <a href={`/messages/${roommate.id}`}>
              <Button className="neon-button-alt text-xs sm:text-sm">
                <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Send Message
              </Button>
            </a>
          </div>
        </div>
      </div>
    </GlassmorphismCard>
  );
};

export default RoommateCard;
