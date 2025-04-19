import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Search, MoveDown, Users, MessageSquare, Filter, Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Earth3D from "@/components/Earth3D";

// Define testimonials data with Indian context
const testimonials = [
  {
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "FindMyRoomie mein ek hafte mein roommate mil gaya! Compatibility matching ekdum perfect thi, aur 6 mahine se hum saath reh rahe hain."
  },
  {
    name: "Arjun Patel",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    location: "Bengaluru, Karnataka",
    rating: 5,
    text: "Naye sheher mein shift hone ke baad, FindMyRoomie ne mere jaise study habits aur lifestyle wale roommate se connect karne mein madad ki."
  },
  {
    name: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    location: "Delhi, NCR",
    rating: 4,
    text: "Filter options itne detailed hain ki mujhe cooking aur morning workout dono pasand karne wala roommate mil gaya!"
  },
  {
    name: "Rahul Verma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "Do bure experiences ke baad, FindMyRoomie ka personality matching system sach mein kaam karta hai. Mera naya roommate ekdum perfect hai!"
  }
];

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-dark to-dark"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect <span className="neon-text">Roommate</span> Match
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Connect with like-minded roommates across India who match your lifestyle and preferences. 
              Starting from just ₹999/month.
            </p>
            
            {/* Earth 3D */}
            <div className="mb-8">
              <Earth3D />
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Input
                type="text"
                placeholder="🏠 Find a Roommate in your city..."
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <MoveDown className="h-8 w-8 text-white/60" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-dark-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How <span className="neon-text">FindMyRoomie</span> Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassmorphismCard hoverable>
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
            
            <GlassmorphismCard hoverable>
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
            
            <GlassmorphismCard hoverable>
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
      
      {/* Testimonials Section - Already has Indian testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Success <span className="neon-text">Stories</span>
          </h2>
          <p className="text-xl text-white/80 text-center mb-12 max-w-2xl mx-auto">
            Hear from people who found their perfect roommates using our platform
          </p>
          
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <GlassmorphismCard className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-neon-purple"
                        />
                        <div>
                          <h3 className="font-medium">{testimonial.name}</h3>
                          <p className="text-white/60 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="mb-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-neon-purple' : 'text-white/20'}`} 
                            fill={i < testimonial.rating ? '#9b87f5' : 'none'} 
                          />
                        ))}
                      </div>
                      <div className="flex-grow flex items-start mb-4">
                        <Quote className="h-6 w-6 text-neon-purple/50 mr-2 flex-shrink-0 mt-1" />
                        <p className="text-white/80 italic">{testimonial.text}</p>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
              <CarouselNext className="relative inset-0 translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Statistics Section - Update pricing to INR */}
      <section className="py-20 bg-dark-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold neon-text mb-2">₹999/mo</h3>
              <p className="text-white/70">Starting Price</p>
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Roommate?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of happy roommates who found their perfect match with FindMyRoomie.
          </p>
          <div>
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
