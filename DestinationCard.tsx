import React from 'react';
import { Star, Users, Clock, Thermometer, Eye, Cloud } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  crowdLevel: string;
  bestTime: string;
  price: string;
  activities: string[];
  realTimeData: {
    currentTemp: string;
    crowdStatus: string;
    weatherCondition: string;
  };
  nativeSpots: {
    name: string;
    distance: string;
    type: string;
  }[];
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const [showNativeSpots, setShowNativeSpots] = React.useState(false);

  const getCrowdColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'quiet':
      case 'peaceful':
        return 'text-green-600 bg-green-100';
      case 'moderate':
        return 'text-yellow-600 bg-yellow-100';
      case 'busy':
      case 'very busy':
        return 'text-orange-600 bg-orange-100';
      case 'extremely busy':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
            from {destination.price}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCrowdColor(destination.realTimeData.crowdStatus)}`}>
              <Eye className="inline h-3 w-3 mr-1" />
              {destination.realTimeData.crowdStatus}
            </span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
              <Thermometer className="inline h-3 w-3 mr-1" />
              {destination.realTimeData.currentTemp}
            </span>
            <span className="bg-sky-100 text-sky-600 px-2 py-1 rounded-full text-xs font-medium">
              <Cloud className="inline h-3 w-3 mr-1" />
              {destination.realTimeData.weatherCondition}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-700">{destination.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({destination.reviews.toLocaleString()} reviews)</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span>Best time: {destination.bestTime}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.activities.map((activity, index) => (
            <span
              key={index}
              className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {activity}
            </span>
          ))}
        </div>
        
        <div className="space-y-3">
          <button 
            onClick={() => setShowNativeSpots(!showNativeSpots)}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 font-semibold"
          >
            {showNativeSpots ? 'Hide Native Spots' : 'Show Native Spots'}
          </button>
          
          {showNativeSpots && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Nearby Attractions</h4>
              <div className="space-y-2">
                {destination.nativeSpots.map((spot, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <div>
                      <p className="font-medium text-gray-800">{spot.name}</p>
                      <p className="text-gray-600">{spot.type}</p>
                    </div>
                    <span className="text-sky-600 font-medium">{spot.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button className="w-full bg-white border-2 border-sky-500 text-sky-500 py-2 px-4 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300 font-semibold">
            Plan Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;