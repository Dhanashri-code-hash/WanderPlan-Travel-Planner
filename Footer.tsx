import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold">WanderPlan</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your ultimate travel companion for planning perfect journeys with real-time data and personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Europe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Asia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Americas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Africa</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Oceania</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Trip Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Weather Forecasts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Real-time Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-400" />
                <span className="text-gray-300">hello@wanderplan.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Subscribe to our newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white text-sm"
                />
                <button className="bg-sky-500 text-white px-4 py-2 rounded-r-lg hover:bg-sky-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 WanderPlan. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;