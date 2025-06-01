
import React from "react";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, X } from "lucide-react";

interface FilterSectionProps {
  showFilters: boolean;
  toggleFilters: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  budgetRange: number[];
  setBudgetRange: (range: number[]) => void;
  filterValues: {
    location: string;
    gender: string;
    smoking: string;
    foodType: string;
    partyPreference: string;
    petPreference: string;
  };
  handleFilterChange: (name: string, value: string) => void;
  resetFilters: () => void;
  resultsCount: number;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  showFilters,
  toggleFilters,
  searchQuery,
  setSearchQuery,
  budgetRange,
  setBudgetRange,
  filterValues,
  handleFilterChange,
  resetFilters,
  resultsCount
}) => {
  return (
    <>
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
                value={filterValues.location || "all-locations"} 
                onValueChange={(value) => handleFilterChange("location", value)}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="All locations" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
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
                value={filterValues.gender || "any-gender"} 
                onValueChange={(value) => handleFilterChange("gender", value)}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Any gender" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
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
                value={filterValues.smoking || "any-smoking"} 
                onValueChange={(value) => handleFilterChange("smoking", value)}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Any preference" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
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
                value={filterValues.foodType || "any-food"} 
                onValueChange={(value) => handleFilterChange("foodType", value)}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Any preference" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  <SelectItem value="any-food">Any preference</SelectItem>
                  <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="Non-Vegetarian">Non-Vegetarian</SelectItem>
                  <SelectItem value="Vegan">Vegan</SelectItem>
                  <SelectItem value="Eggetarian">Eggetarian</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="partyPreference">Party Preference 🎉</Label>
              <Select 
                value={filterValues.partyPreference || "any-party"} 
                onValueChange={(value) => handleFilterChange("partyPreference", value)}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Any preference" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  <SelectItem value="any-party">Any preference</SelectItem>
                  <SelectItem value="Party Animal">Party Animal</SelectItem>
                  <SelectItem value="Chill">Chill</SelectItem>
                  <SelectItem value="Quiet">Quiet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="petPreference">Pet Preference 🐶</Label>
              <Select 
                value={filterValues.petPreference || "any-pet"} 
                onValueChange={(value) => handleFilterChange("petPreference", value)}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Any preference" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  <SelectItem value="any-pet">Any preference</SelectItem>
                  <SelectItem value="Love them">Love them</SelectItem>
                  <SelectItem value="Okay">Okay</SelectItem>
                  <SelectItem value="Allergic">Allergic</SelectItem>
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
            </div>
          </div>
        </GlassmorphismCard>
      </div>

      <div className="md:hidden mb-6">
        <Button
          variant="outline"
          className="w-full border-white/10 flex items-center justify-center gap-2"
          onClick={toggleFilters}
        >
          <Filter className="h-5 w-5" /> 
          Show Filters ({resultsCount} results)
        </Button>
      </div>

      <button 
        className="fixed md:hidden bottom-6 right-6 w-14 h-14 rounded-full bg-neon-gradient-1 flex items-center justify-center shadow-lg animate-glow"
        onClick={toggleFilters}
      >
        <Filter className="h-6 w-6 text-white" />
      </button>
    </>
  );
};

export default FilterSection;
