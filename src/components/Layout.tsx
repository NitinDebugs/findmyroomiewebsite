
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <footer className="mt-auto border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>© {new Date().getFullYear()} FindMyRoomie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
