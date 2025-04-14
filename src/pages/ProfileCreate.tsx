
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProfileCreate = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    bio: "",
    budget: [500], // Default starting budget
    location: "",
    flatType: "",
    smoking: "",
    foodType: "",
    partyPreference: "",
    petPreference: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({
      ...prev,
      budget: value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile data:", formData);
    // Handle profile creation
    navigate("/browse"); // Redirect to browse page after completion
  };

  const formatBudget = (value: number) => {
    return `$${value}`;
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="neon-text">Create Your</span> <span className="neon-text-alt">Profile</span>
          </h1>
          <p className="text-white/70">
            Tell us about yourself so we can find you the perfect roommate
          </p>
          
          {/* Step indicators */}
          <div className="flex justify-center items-center mt-6 mb-10">
            <div className={`h-3 w-3 rounded-full ${currentStep === 1 ? 'bg-neon-purple' : 'bg-white/30'}`}></div>
            <div className={`h-0.5 w-8 ${currentStep >= 2 ? 'bg-neon-purple' : 'bg-white/30'}`}></div>
            <div className={`h-3 w-3 rounded-full ${currentStep === 2 ? 'bg-neon-purple' : 'bg-white/30'}`}></div>
            <div className={`h-0.5 w-8 ${currentStep >= 3 ? 'bg-neon-purple' : 'bg-white/30'}`}></div>
            <div className={`h-3 w-3 rounded-full ${currentStep === 3 ? 'bg-neon-purple' : 'bg-white/30'}`}></div>
          </div>
        </div>
        
        <GlassmorphismCard className="animate-scale-in">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4 neon-text">Basic Information 📝</h2>
                
                <div className="space-y-3">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/10"
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Your age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/10"
                    required
                    min="18"
                    max="100"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>Gender 🚹🚺</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleSelectChange("gender", value)}
                    className="flex flex-wrap gap-4"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="non-binary" id="non-binary" />
                      <Label htmlFor="non-binary">Non-binary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prefer-not-to-say" id="prefer-not-to-say" />
                      <Label htmlFor="prefer-not-to-say">Prefer not to say</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="occupation">College/Company 🎓</Label>
                  <Input
                    id="occupation"
                    name="occupation"
                    placeholder="Your college or company"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/10"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="bio">Bio (About You)</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell potential roommates about yourself..."
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/10 min-h-[120px]"
                    required
                  />
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button 
                    type="button" 
                    onClick={handleNext}
                    className="neon-button"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 2: Housing Preferences */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4 neon-text">Housing Preferences 🏘️</h2>
                
                <div className="space-y-3">
                  <Label htmlFor="budget">Monthly Budget 💸</Label>
                  <div className="pt-5 pb-2">
                    <Slider
                      value={formData.budget}
                      onValueChange={handleSliderChange}
                      min={300}
                      max={3000}
                      step={50}
                    />
                  </div>
                  <div className="text-right text-white/70">
                    Budget: {formatBudget(formData.budget[0])}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="location">Preferred Location 📍</Label>
                  <Select 
                    value={formData.location} 
                    onValueChange={(value) => handleSelectChange("location", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown</SelectItem>
                      <SelectItem value="midtown">Midtown</SelectItem>
                      <SelectItem value="uptown">Uptown</SelectItem>
                      <SelectItem value="west-end">West End</SelectItem>
                      <SelectItem value="east-end">East End</SelectItem>
                      <SelectItem value="suburbs">Suburbs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="flatType">Type of Flat 🏢</Label>
                  <Select 
                    value={formData.flatType} 
                    onValueChange={(value) => handleSelectChange("flatType", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select flat type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1bhk">1 BHK</SelectItem>
                      <SelectItem value="2bhk">2 BHK</SelectItem>
                      <SelectItem value="3bhk">3 BHK</SelectItem>
                      <SelectItem value="4bhk">4+ BHK</SelectItem>
                      <SelectItem value="studio">Studio Apartment</SelectItem>
                      <SelectItem value="shared-room">Shared Room</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    type="button" 
                    onClick={handlePrevious}
                    variant="outline"
                    className="border-white/10 hover:bg-white/5"
                  >
                    Previous
                  </Button>
                  <Button 
                    type="button" 
                    onClick={handleNext}
                    className="neon-button"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Lifestyle Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4 neon-text">Lifestyle Preferences 🧠</h2>
                
                <div className="space-y-3">
                  <Label htmlFor="smoking">Smoking Preference 🚬</Label>
                  <Select 
                    value={formData.smoking} 
                    onValueChange={(value) => handleSelectChange("smoking", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Your smoking preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, I smoke</SelectItem>
                      <SelectItem value="occasionally">Occasionally</SelectItem>
                      <SelectItem value="no">No, I don't smoke</SelectItem>
                      <SelectItem value="outdoors-only">Outdoors only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="foodType">Food Preference 🍲</Label>
                  <Select 
                    value={formData.foodType} 
                    onValueChange={(value) => handleSelectChange("foodType", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Your food preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="eggetarian">Eggetarian</SelectItem>
                      <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                      <SelectItem value="no-preference">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="partyPreference">Party Preference 🎉</Label>
                  <Select 
                    value={formData.partyPreference} 
                    onValueChange={(value) => handleSelectChange("partyPreference", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Your party preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quiet">Quiet (Rarely or Never)</SelectItem>
                      <SelectItem value="chill">Chill (Occasionally)</SelectItem>
                      <SelectItem value="party-animal">Party Animal (Frequently)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="petPreference">Pet Preference 🐶🐱</Label>
                  <Select 
                    value={formData.petPreference} 
                    onValueChange={(value) => handleSelectChange("petPreference", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Your pet preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="love-them">Love them (Have or want pets)</SelectItem>
                      <SelectItem value="okay">Okay with pets</SelectItem>
                      <SelectItem value="allergic">Allergic/No pets please</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    type="button" 
                    onClick={handlePrevious}
                    variant="outline"
                    className="border-white/10 hover:bg-white/5"
                  >
                    Previous
                  </Button>
                  <Button 
                    type="submit"
                    className="neon-button-alt"
                  >
                    Complete Profile
                  </Button>
                </div>
              </div>
            )}
          </form>
        </GlassmorphismCard>
      </div>
    </div>
  );
};

export default ProfileCreate;
