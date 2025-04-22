
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoommateProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roommate: {
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
  } | null;
}

const RoommateProfileDialog: React.FC<RoommateProfileDialogProps> = ({ open, onOpenChange, roommate }) => {
  if (!roommate) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue border-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col items-center">
              <img
                src={roommate.profilePic}
                alt={roommate.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mb-3"
              />
              <span className="text-xl font-bold text-white text-center">{roommate.name}, {roommate.age}</span>
              <span className="mt-1 inline-block px-2 py-1 rounded-full bg-white/20 text-white text-xs">{roommate.gender}</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="my-2 text-center text-white/90">
          <div className="flex items-center justify-center text-sm mb-2">
            <MapPin className="mr-1 w-4 h-4" /> {roommate.location}
          </div>
          <div className="flex items-center justify-center text-sm mb-2">
            <User className="mr-1 w-4 h-4" />
            {roommate.occupation}
          </div>
          <div className="font-semibold my-2">Budget: <span className="font-bold">₹{roommate.budget}</span></div>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs bg-white/20">{roommate.smoking} 🚬</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs bg-white/20">{roommate.foodType} 🍲</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs bg-white/20">{roommate.partyPreference} 🎉</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs bg-white/20">{roommate.petPreference} 🐶</span>
          </div>
          <div className="mt-4 mb-2 bg-white/10 rounded-md p-3 text-white/80 text-sm">
            {roommate.bio}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            asChild
            className="w-full font-semibold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue text-white shadow-lg hover:from-neon-blue hover:to-neon-purple transition-all rounded-full py-2"
          >
            <a href={`/messages/${roommate.id}`}>
              <MessageSquare className="inline-block w-4 h-4 mr-1" />
              Send Message
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoommateProfileDialog;
