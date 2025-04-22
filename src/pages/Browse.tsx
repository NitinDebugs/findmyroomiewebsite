import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Search, 
  Filter, 
  MapPin, 
  User, 
  DollarSign, 
  Coffee, 
  Home, 
  MessageSquare, 
  UserPlus,
  X
} from "lucide-react";
import RoommateProfileDialog from "@/components/RoommateProfileDialog";

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
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const handleFilterChange = (name: string, value: string) => {
    setFilterValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const applyFilters = () => {
    const filtered = ROOMMATES.filter(roommate => {
      if (searchQuery && !roommate.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !roommate.location.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !roommate.bio.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      if (roommate.budget < budgetRange[0] || roommate.budget > budgetRange[1]) {
        return false;
      }
      
      if (filterValues.location && roommate.location !== filterValues.location) {
        return false;
      }
      
      if (filterValues.gender && roommate.gender !== filterValues.gender) {
        return false;
      }
      
      if (filterValues.smoking && roommate.smoking !== filterValues.smoking) {
        return false;
      }
      
      if (filterValues.foodType && roommate.foodType !== filterValues.foodType) {
        return false;
      }
      
      if (filterValues.partyPreference && roommate.partyPreference !== filterValues.partyPreference) {
        return false;
      }
      
      if (filterValues.petPreference && roommate.petPreference !== filterValues.petPreference) {
        return false;
      }
      
      return true;
    });
    
    setFilteredRoommates(filtered);
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
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

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          <span className="neon-text">Find Your</span> <span className="neon-text-alt">Roommate</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <GlassmorphismCard className="sticky top-24 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Filters
                </h2>
                <button 
                  onClick={toggleFilters}
                  className="md:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Input
                      id="search"
                      placeholder="Search by name, location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Budget Range 💸</Label>
                  <div className="pt-5 pb-2">
                    <Slider
                      value={budgetRange}
                      onValueChange={setBudgetRange}
                      min={5000}
                      max={30000}
                      step={1000}
                    />
                  </div>
                  <div className="text-white/70 text-sm">
                    ₹{budgetRange[0]} - ₹{budgetRange[1]}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location 📍</Label>
                  <Select 
                    value={filterValues.location} 
                    onValueChange={(value) => handleFilterChange("location", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-locations">All locations</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Greater Noida">Greater Noida</SelectItem>
                      <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender 🚹🚺</Label>
                  <Select 
                    value={filterValues.gender} 
                    onValueChange={(value) => handleFilterChange("gender", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Any gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any-gender">Any gender</SelectItem>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Non-binary">Non-binary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="smoking">Smoking 🚬</Label>
                  <Select 
                    value={filterValues.smoking} 
                    onValueChange={(value) => handleFilterChange("smoking", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Any preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any-smoking">Any preference</SelectItem>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="Occasionally">Occasionally</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="foodType">Food Preference 🍲</Label>
                  <Select 
                    value={filterValues.foodType} 
                    onValueChange={(value) => handleFilterChange("foodType", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Any preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any-food">Any preference</SelectItem>
                      <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="Non-Vegetarian">Non-Vegetarian</SelectItem>
                      <SelectItem value="Vegan">Vegan</SelectItem>
                      <SelectItem value="Eggetarian">Eggetarian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-white/10 hover:bg-white/5"
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                  <Button
                    className="flex-1 neon-button"
                    onClick={applyFilters}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </GlassmorphismCard>
          </div>
          
          <div className="md:w-3/4">
            <div className="md:hidden mb-6">
              <Button
                variant="outline"
                className="w-full border-white/10 flex items-center justify-center gap-2"
                onClick={toggleFilters}
              >
                <Filter className="h-5 w-5" /> 
                Show Filters
              </Button>
            </div>
            
            <div className="space-y-6">
              {filteredRoommates.length > 0 ? (
                filteredRoommates.map((roommate) => (
                  <GlassmorphismCard 
                    key={roommate.id} 
                    className="animate-on-scroll"
                    hoverable
                  >
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
                            onClick={() => {
                              setSelectedRoommate(roommate);
                              setDialogOpen(true);
                            }}
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
                ))
              ) : (
                <div className="text-center py-16">
                  <div className="text-4xl mb-4">😕</div>
                  <h3 className="text-xl font-semibold mb-2">No Matches Found</h3>
                  <p className="text-white/70 mb-6">Try adjusting your filters to see more results</p>
                  <Button onClick={resetFilters} className="neon-button">
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="fixed md:hidden bottom-6 right-6 w-14 h-14 rounded-full bg-neon-gradient-1 flex items-center justify-center shadow-lg animate-glow"
        onClick={toggleFilters}
      >
        <Filter className="h-6 w-6 text-white" />
      </button>
      
      <RoommateProfileDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        roommate={selectedRoommate}
      />
    </div>
  );
};

export default Browse;
