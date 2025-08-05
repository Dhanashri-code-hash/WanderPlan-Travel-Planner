import React, { useState } from 'react';
import { Menu, X, MapPin, User, Bell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-sky-500" />
            <span className="text-2xl font-bold text-gray-900">WanderPlan</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              Destinations
            </a>
            <a href="#planner" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              Trip Planner
            </a>
            <a href="#budget" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              Budget
            </a>
            <a href="#weather" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              Weather
            </a>
            <a href="#about" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              About
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-sky-500 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#destinations" className="text-gray-700 hover:text-sky-500 transition-colors">
                Destinations
              </a>
              <a href="#planner" className="text-gray-700 hover:text-sky-500 transition-colors">
                Trip Planner
              </a>
              <a href="#budget" className="text-gray-700 hover:text-sky-500 transition-colors">
                Budget
              </a>
              <a href="#weather" className="text-gray-700 hover:text-sky-500 transition-colors">
                Weather
              </a>
              <a href="#about" className="text-gray-700 hover:text-sky-500 transition-colors">
                About
              </a>
              <button className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors w-fit">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;