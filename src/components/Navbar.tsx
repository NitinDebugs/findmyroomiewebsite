
import { Link } from "react-router-dom";
import { MessageSquare, User, Search, Home } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg transition-all duration-300 ${
      scrolled ? 'bg-white/30 shadow-lg' : 'bg-white/20'
    } border-b border-white/30`}>
      <div className="container mx-auto px-3 sm:px-4 py-3 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
          <span className="text-lg sm:text-xl md:text-2xl font-bold neon-text whitespace-nowrap truncate">
            FindMy<span className="neon-text-alt">Roomie</span> 🛏️
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          <Link to="/" className="text-gray-700 hover:text-coral transition-colors text-sm lg:text-base whitespace-nowrap px-2 font-medium">
            Home
          </Link>
          <Link to="/browse" className="text-gray-700 hover:text-teal transition-colors text-sm lg:text-base whitespace-nowrap px-2 font-medium">
            Browse
          </Link>
          <Link to="/messages" className="text-gray-700 hover:text-sky transition-colors text-sm lg:text-base whitespace-nowrap px-2 font-medium">
            Messages
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-mint transition-colors text-sm lg:text-base whitespace-nowrap px-2 font-medium">
            Login
          </Link>
        </div>
        
        <div className="flex md:hidden items-center gap-3 sm:gap-4">
          <Link to="/" aria-label="Home" className="p-2 rounded-lg hover:bg-white/20 transition-colors">
            <Home className="w-5 h-5 text-gray-700 hover:text-coral transition-colors" />
          </Link>
          <Link to="/browse" aria-label="Browse" className="p-2 rounded-lg hover:bg-white/20 transition-colors">
            <Search className="w-5 h-5 text-gray-700 hover:text-teal transition-colors" />
          </Link>
          <Link to="/messages" aria-label="Messages" className="p-2 rounded-lg hover:bg-white/20 transition-colors">
            <MessageSquare className="w-5 h-5 text-gray-700 hover:text-sky transition-colors" />
          </Link>
          <Link to="/login" aria-label="Profile" className="p-2 rounded-lg hover:bg-white/20 transition-colors">
            <User className="w-5 h-5 text-gray-700 hover:text-mint transition-colors" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
