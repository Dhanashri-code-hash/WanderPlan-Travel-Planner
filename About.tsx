import React from 'react';
import { MapPin, Users, Award, Globe, Heart, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-sky-500" />,
      title: 'Comprehensive Coverage',
      description: 'Explore 500+ destinations across India with detailed information about each location.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'Community Driven',
      description: 'Real reviews and recommendations from fellow travelers who have experienced these destinations.'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Expert Curation',
      description: 'Our travel experts carefully curate each destination to ensure authentic experiences.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Real-time Updates',
      description: 'Live weather data, crowd levels, and local conditions to help you plan better.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Personalized Experience',
      description: 'Tailored recommendations based on your preferences and travel style.'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: 'Safe & Secure',
      description: 'Your data is protected with enterprise-grade security and privacy measures.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Destinations' },
    { number: '50K+', label: 'Happy Travelers' },
    { number: '10K+', label: 'Reviews' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About WanderPlan India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted companion for exploring the incredible diversity of India. From the snow-capped Himalayas to the tropical beaches of Kerala, we help you discover the best of Incredible India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-500 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl text-sky-100 max-w-4xl mx-auto leading-relaxed">
            To make travel planning effortless and inspiring by providing comprehensive, real-time information about India's most beautiful destinations. We believe every journey should be memorable, safe, and perfectly planned.
          </p>
          <div className="mt-8">
            <button className="bg-white text-sky-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Journey
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose WanderPlan India?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Local Expertise</h4>
              <p className="text-gray-600">Deep knowledge of Indian culture, traditions, and hidden gems that only locals know.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Budget Friendly</h4>
              <p className="text-gray-600">Detailed budget breakdowns and cost-effective travel options for every type of traveler.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">24/7 Support</h4>
              <p className="text-gray-600">Round-the-clock assistance to help you with any travel-related queries or emergencies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;