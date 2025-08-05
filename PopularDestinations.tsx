import React from 'react';
import { Star, Users, Clock, TrendingUp } from 'lucide-react';
import DestinationCard from './DestinationCard';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Taj Mahal, Agra',
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
      rating: 4.8,
      reviews: 15847,
      crowdLevel: 'Moderate',
      bestTime: 'October - March',
      price: '₹2,500',
      activities: ['Heritage', 'Architecture', 'Photography'],
      realTimeData: {
        currentTemp: '28°C',
        crowdStatus: 'Busy',
        weatherCondition: 'Sunny'
      },
      nativeSpots: [
        { name: 'Agra Fort', distance: '2.5 km', type: 'Heritage' },
        { name: 'Mehtab Bagh', distance: '1.8 km', type: 'Garden' },
        { name: 'Itmad-ud-Daulah', distance: '6 km', type: 'Tomb' },
        { name: 'Fatehpur Sikri', distance: '40 km', type: 'Historical City' }
      ]
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      rating: 4.9,
      reviews: 8924,
      crowdLevel: 'Low',
      bestTime: 'October - February',
      price: '₹4,200',
      activities: ['Houseboat', 'Nature', 'Ayurveda'],
      realTimeData: {
        currentTemp: '26°C',
        crowdStatus: 'Peaceful',
        weatherCondition: 'Partly Cloudy'
      },
      nativeSpots: [
        { name: 'Kumarakom Bird Sanctuary', distance: '15 km', type: 'Wildlife' },
        { name: 'Vembanad Lake', distance: '5 km', type: 'Lake' },
        { name: 'Pathiramanal Island', distance: '12 km', type: 'Island' },
        { name: 'Aruvikkuzhi Waterfall', distance: '25 km', type: 'Waterfall' }
      ]
    },
    {
      id: 3,
      name: 'Goa Beaches',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
      rating: 4.7,
      reviews: 12456,
      crowdLevel: 'Low',
      bestTime: 'November - February',
      price: '₹3,800',
      activities: ['Beach', 'Water Sports', 'Nightlife'],
      realTimeData: {
        currentTemp: '30°C',
        crowdStatus: 'Moderate',
        weatherCondition: 'Sunny'
      },
      nativeSpots: [
        { name: 'Baga Beach', distance: '2 km', type: 'Beach' },
        { name: 'Fort Aguada', distance: '8 km', type: 'Fort' },
        { name: 'Dudhsagar Falls', distance: '60 km', type: 'Waterfall' },
        { name: 'Old Goa Churches', distance: '15 km', type: 'Heritage' }
      ]
    },
    {
      id: 4,
      name: 'Rajasthan Palaces',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 4.9,
      reviews: 9876,
      crowdLevel: 'Very High',
      bestTime: 'October - March',
      price: '₹5,500',
      activities: ['Palaces', 'Desert', 'Culture'],
      realTimeData: {
        currentTemp: '25°C',
        crowdStatus: 'Very Busy',
        weatherCondition: 'Clear'
      },
      nativeSpots: [
        { name: 'City Palace', distance: '1 km', type: 'Palace' },
        { name: 'Hawa Mahal', distance: '2 km', type: 'Architecture' },
        { name: 'Amber Fort', distance: '11 km', type: 'Fort' },
        { name: 'Jal Mahal', distance: '6 km', type: 'Palace' }
      ]
    },
    {
      id: 5,
      name: 'Himachal Pradesh',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      rating: 4.8,
      reviews: 7234,
      crowdLevel: 'Low',
      bestTime: 'March - June',
      price: '₹4,800',
      activities: ['Mountains', 'Trekking', 'Adventure'],
      realTimeData: {
        currentTemp: '15°C',
        crowdStatus: 'Peaceful',
        weatherCondition: 'Clear'
      },
      nativeSpots: [
        { name: 'Rohtang Pass', distance: '51 km', type: 'Mountain Pass' },
        { name: 'Solang Valley', distance: '13 km', type: 'Valley' },
        { name: 'Hadimba Temple', distance: '2.5 km', type: 'Temple' },
        { name: 'Vashisht Hot Springs', distance: '3 km', type: 'Hot Springs' }
      ]
    },
    {
      id: 6,
      name: 'Ladakh Valley',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      rating: 4.6,
      reviews: 5689,
      crowdLevel: 'Moderate',
      bestTime: 'May - September',
      price: '₹6,200',
      activities: ['High Altitude', 'Monasteries', 'Adventure'],
      realTimeData: {
        currentTemp: '10°C',
        crowdStatus: 'Moderate',
        weatherCondition: 'Clear'
      },
      nativeSpots: [
        { name: 'Pangong Lake', distance: '160 km', type: 'Lake' },
        { name: 'Nubra Valley', distance: '120 km', type: 'Valley' },
        { name: 'Thiksey Monastery', distance: '19 km', type: 'Monastery' },
        { name: 'Khardung La Pass', distance: '39 km', type: 'Mountain Pass' }
      ]
    }
  ];

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore trending destinations with real-time data on weather, crowd levels, and local conditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-sky-500 border-2 border-sky-500 px-8 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300 font-semibold">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;