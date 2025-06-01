
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
    <GlassmorphismCard className="animate-on-scroll" hoverable>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 flex flex-col items-center">
          <div className="relative">
            <img 
              src={roommate.profilePic} 
              alt={roommate.name}
              className="w-32 h-32 rounded-full object-cover border-2 border-white/10" 
            />
            <div className="absolute -bottom-2 -right-2 bg-neon-gradient-1 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
              {roommate.compatibility}%
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-white/70">Compatibility</p>
        </div>
        
        <div className="md:w-3/4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{roommate.name}, {roommate.age}</h3>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white">
                {roommate.gender}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white">
                Budget: ₹{roommate.budget}
              </span>
            </div>
          </div>
          
          <div className="mb-3 flex items-center text-white/70 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {roommate.location}
          </div>
          
          <div className="mb-3 flex items-center text-white/70 text-sm">
            <User className="h-4 w-4 mr-1" />
            {roommate.occupation}
          </div>
          
          <p className="mb-4 text-white/90">{roommate.bio}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white">
              🚬 {roommate.smoking}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white">
              🍲 {roommate.foodType}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white">
              🎉 {roommate.partyPreference}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white">
              🐶 {roommate.petPreference}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button
              className="font-semibold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue text-white shadow transition-all rounded-full py-2 px-5 hover:from-neon-blue hover:to-neon-purple border-0"
              onClick={() => onViewProfile(roommate)}
            >
              View Profile
            </Button>
            <a href={`/messages/${roommate.id}`}>
              <Button className="neon-button">
                <MessageSquare className="h-4 w-4 mr-2" />
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
