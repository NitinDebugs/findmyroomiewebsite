
import { Link } from "react-router-dom";
import { MessageSquare, User, Search, Home } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      scrolled ? 'bg-dark/90 shadow-md' : 'bg-dark/80'
    } border-b border-white/10`}>
      <div className="container mx-auto px-2 sm:px-4 py-3 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
          <span className="text-lg sm:text-xl md:text-2xl font-bold neon-text whitespace-nowrap truncate">
            FindMy<span className="neon-text-alt">Roomie</span> 🛏️
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap px-2">
            Home
          </Link>
          <Link to="/browse" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap px-2">
            Browse
          </Link>
          <Link to="/messages" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap px-2">
            Messages
          </Link>
          <Link to="/login" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base whitespace-nowrap px-2">
            Login
          </Link>
        </div>
        
        <div className="flex md:hidden items-center gap-3">
          <Link to="/" aria-label="Home">
            <Home className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
          </Link>
          <Link to="/browse" aria-label="Browse">
            <Search className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
          </Link>
          <Link to="/messages" aria-label="Messages">
            <MessageSquare className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
          </Link>
          <Link to="/login" aria-label="Profile">
            <User className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
