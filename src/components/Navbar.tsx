
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, User, Search, Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-dark/80 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold neon-text">
            FindMy<span className="neon-text-alt">Roomie</span> 🛏️
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/browse" className="text-white/80 hover:text-white transition-colors">
            Browse
          </Link>
          <Link to="/messages" className="text-white/80 hover:text-white transition-colors">
            Messages
          </Link>
          <Link to="/login" className="text-white/80 hover:text-white transition-colors">
            Login
          </Link>
        </div>
        
        <div className="flex md:hidden items-center gap-4">
          <Link to="/" aria-label="Home">
            <Home className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
          </Link>
          <Link to="/browse" aria-label="Browse">
            <Search className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
          </Link>
          <Link to="/messages" aria-label="Messages">
            <MessageSquare className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
          </Link>
          <Link to="/login" aria-label="Profile">
            <User className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
