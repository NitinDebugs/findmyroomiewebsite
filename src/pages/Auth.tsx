
import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login with:", formData.email, formData.password);
      // Handle login logic
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log("Signup with:", formData);
      // Handle signup logic
      // Redirect to profile creation page
      window.location.href = "/profile/create";
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Reset form data when toggling
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-dark to-dark"></div>
      
      <GlassmorphismCard className="w-full max-w-md animate-scale-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold neon-text">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-white/70 mt-2">
            {isLogin 
              ? "Sign in to find your perfect roommate" 
              : "Join our community and find your perfect roommate"}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 bg-white/5 border-white/10"
                  required={!isLogin}
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 bg-white/5 border-white/10"
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                className="pl-10 pr-10 bg-white/5 border-white/10"
                required
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="pl-10 bg-white/5 border-white/10"
                  required={!isLogin}
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
              </div>
            </div>
          )}
          
          <Button
            type="submit"
            className={isLogin ? "neon-button w-full" : "neon-button-alt w-full"}
          >
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-white/70">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleAuthMode}
              className="ml-2 neon-text hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </GlassmorphismCard>
    </div>
  );
};

export default Auth;
