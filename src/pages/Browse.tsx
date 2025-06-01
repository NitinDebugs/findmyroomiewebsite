
import { useState, useEffect } from "react";
import RoommateProfileDialog from "@/components/RoommateProfileDialog";
import FilterSection from "@/components/FilterSection";
import RoommateList from "@/components/RoommateList";

const ROOMMATES = [
  {
    id: 1,
    name: "Aryan Sharma",
    age: 24,
    gender: "Male",
    occupation: "Software Engineer at Tech Co",
    location: "Delhi",
    budget: 18000,
    bio: "I'm a laid-back software engineer who enjoys coding, cricket, and occasional gaming sessions. Looking for a clean and respectful roommate.",
    compatibility: 92,
    smoking: "No",
    foodType: "Non-Vegetarian",
    partyPreference: "Chill",
    petPreference: "Love them",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    name: "Priya Malhotra",
    age: 22,
    gender: "Female",
    occupation: "Graduate Student at City University",
    location: "Greater Noida",
    budget: 15000,
    bio: "Full-time grad student studying psychology. I'm quiet, organized, and prefer a peaceful living environment for studying.",
    compatibility: 87,
    smoking: "Occasionally",
    foodType: "Vegetarian",
    partyPreference: "Quiet",
    petPreference: "Okay",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Vikram Singh",
    age: 28,
    gender: "Male",
    occupation: "Marketing Specialist at Brand Agency",
    location: "Chandigarh",
    budget: 22000,
    bio: "Creative professional who loves cooking and hosting small gatherings. Looking for a roommate who appreciates good food and conversation.",
    compatibility: 78,
    smoking: "No",
    foodType: "Non-Vegetarian",
    partyPreference: "Party Animal",
    petPreference: "Love them",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    name: "Kavita Patel",
    age: 25,
    gender: "Female",
    occupation: "UX Designer at Creative Studio",
    location: "Delhi",
    budget: 17000,
    bio: "Designer by day, bookworm by night. I'm tidy, respect personal space, and enjoy occasional movie nights with roommates.",
    compatibility: 94,
    smoking: "No",
    foodType: "Vegetarian",
    partyPreference: "Chill",
    petPreference: "Allergic",
    profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
  }
];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [budgetRange, setBudgetRange] = useState<number[]>([5000, 30000]);
  const [filterValues, setFilterValues] = useState({
    location: "",
    gender: "",
    smoking: "",
    foodType: "",
    partyPreference: "",
    petPreference: ""
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRoommate, setSelectedRoommate] = useState(null);
  const [filteredRoommates, setFilteredRoommates] = useState(ROOMMATES);
  
  // Auto-apply filters whenever any filter value changes
  useEffect(() => {
    applyFilters();
  }, [searchQuery, budgetRange, filterValues]);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const handleFilterChange = (name: string, value: string) => {
    setFilterValues(prev => ({
      ...prev,
      [name]: value === `any-${name}` || value === "all-locations" || value === "any-gender" || value === "any-smoking" || value === "any-food" ? "" : value
    }));
  };
  
  const applyFilters = () => {
    const filtered = ROOMMATES.filter(roommate => {
      // Search filter
      if (searchQuery && !roommate.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !roommate.location.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !roommate.bio.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Budget filter
      if (roommate.budget < budgetRange[0] || roommate.budget > budgetRange[1]) {
        return false;
      }
      
      // Location filter
      if (filterValues.location && roommate.location !== filterValues.location) {
        return false;
      }
      
      // Gender filter
      if (filterValues.gender && roommate.gender !== filterValues.gender) {
        return false;
      }
      
      // Smoking filter
      if (filterValues.smoking && roommate.smoking !== filterValues.smoking) {
        return false;
      }
      
      // Food type filter
      if (filterValues.foodType && roommate.foodType !== filterValues.foodType) {
        return false;
      }
      
      // Party preference filter
      if (filterValues.partyPreference && roommate.partyPreference !== filterValues.partyPreference) {
        return false;
      }
      
      // Pet preference filter
      if (filterValues.petPreference && roommate.petPreference !== filterValues.petPreference) {
        return false;
      }
      
      return true;
    });
    
    setFilteredRoommates(filtered);
  };
  
  const resetFilters = () => {
    setSearchQuery("");
    setBudgetRange([5000, 30000]);
    setFilterValues({
      location: "",
      gender: "",
      smoking: "",
      foodType: "",
      partyPreference: "",
      petPreference: ""
    });
    setFilteredRoommates(ROOMMATES);
  };

  const handleViewProfile = (roommate) => {
    setSelectedRoommate(roommate);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          <span className="neon-text">Find Your</span> <span className="neon-text-alt">Roommate</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSection
            showFilters={showFilters}
            toggleFilters={toggleFilters}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            budgetRange={budgetRange}
            setBudgetRange={setBudgetRange}
            filterValues={filterValues}
            handleFilterChange={handleFilterChange}
            resetFilters={resetFilters}
            resultsCount={filteredRoommates.length}
          />
          
          <RoommateList
            roommates={filteredRoommates}
            totalRoommates={ROOMMATES.length}
            onViewProfile={handleViewProfile}
            onResetFilters={resetFilters}
          />
        </div>
      </div>
      
      <RoommateProfileDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        roommate={selectedRoommate}
      />
    </div>
  );
};

export default Browse;
