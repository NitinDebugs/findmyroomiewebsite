
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Search, Home, MoveDown, Users, MessageSquare, Filter } from "lucide-react";

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-dark to-dark"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Perfect <span className="neon-text">Roommate</span> Match
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Connect with like-minded roommates who match your lifestyle and preferences. 
              Start your journey to finding the perfect living companion today.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Input
                type="text"
                placeholder="🏠 Find a Roommate near you..."
                className="pl-4 pr-10 py-6 bg-white/5 border-white/10 text-lg rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-white/10"
              >
                <Search className="h-5 w-5 text-white" />
              </Button>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Link to="/browse">
                <button className="neon-button w-full sm:w-auto">
                  Find Roommates
                </button>
              </Link>
              <Link to="/profile/create">
                <button className="neon-button-alt w-full sm:w-auto">
                  Create Profile
                </button>
              </Link>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <MoveDown className="h-8 w-8 text-white/60" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
            How <span className="neon-text">FindMyRoomie</span> Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassmorphismCard className="animate-on-scroll" hoverable>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Profile 🚹🚺</h3>
                <p className="text-white/70">
                  Complete your profile with details about your lifestyle, preferences, and roommate requirements.
                </p>
              </div>
            </GlassmorphismCard>
            
            <GlassmorphismCard className="animate-on-scroll" hoverable style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-neon-blue/20 flex items-center justify-center mb-4">
                  <Filter className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse Matches 🧠</h3>
                <p className="text-white/70">
                  Our algorithm finds roommates who match your criteria, showing compatibility percentages.
                </p>
              </div>
            </GlassmorphismCard>
            
            <GlassmorphismCard className="animate-on-scroll" hoverable style={{ animationDelay: "0.4s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-neon-pink/20 flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-neon-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect & Chat 🗨️</h3>
                <p className="text-white/70">
                  Message potential roommates and make arrangements to find your perfect match.
                </p>
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center animate-on-scroll">
            <div>
              <h3 className="text-4xl font-bold neon-text mb-2">10,000+</h3>
              <p className="text-white/70">Happy Roommates Matched</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold neon-text-alt mb-2">95%</h3>
              <p className="text-white/70">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold neon-text mb-2">50+</h3>
              <p className="text-white/70">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to Find Your Perfect Roommate?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-on-scroll">
            Join thousands of happy roommates who found their perfect match with FindMyRoomie.
          </p>
          <div className="animate-on-scroll">
            <Link to="/login">
              <button className="neon-button text-lg px-8 py-4">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
