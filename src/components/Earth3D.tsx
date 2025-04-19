
import React, { useEffect, useState } from 'react';

const Earth3D = () => {
  const [text, setText] = useState("");
  const fullText = "Roommate dhundna hua ab easy";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        index = 0;
        setTimeout(() => {
          // Reset after showing the full text for a moment
          setText("");
        }, 1000);
      }
    }, 150);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg">
      <h1 className="text-4xl md:text-5xl font-bold neon-text text-center animate-pulse">
        {text}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};

export default Earth3D;
