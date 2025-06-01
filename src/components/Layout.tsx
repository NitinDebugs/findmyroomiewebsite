
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full pt-14 sm:pt-16 md:pt-20">
        {children}
      </main>
      <footer className="mt-auto border-t border-white/10 py-3 sm:py-4 md:py-6">
        <div className="container mx-auto px-2 sm:px-4 text-center text-contrast-light text-xs sm:text-sm md:text-base">
          <p>© {new Date().getFullYear()} FindMyRoomie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
