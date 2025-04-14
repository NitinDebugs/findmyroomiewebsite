
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <GlassmorphismCard className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to FindMyRoomie</h1>
        <p className="text-xl text-white/80 mb-6">
          Find your perfect roommate match and start your journey to comfortable living!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="neon-button w-full sm:w-auto">
              Back to Home
            </Button>
          </Link>
        </div>
      </GlassmorphismCard>
    </div>
  );
};

export default Index;
