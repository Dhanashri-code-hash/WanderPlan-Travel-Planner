import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets, Eye, Compass } from 'lucide-react';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  uvIndex: number;
  forecast: {
    day: string;
    high: number;
    low: number;
    condition: string;
    icon: string;
  }[];
}

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    city: 'New Delhi',
    temperature: 32,
    condition: 'Sunny',
    humidity: 45,
    windSpeed: 8,
    visibility: 10,
    uvIndex: 8,
    forecast: [
      { day: 'Today', high: 32, low: 24, condition: 'Sunny', icon: '☀️' },
      { day: 'Tomorrow', high: 34, low: 26, condition: 'Partly Cloudy', icon: '⛅' },
      { day: 'Wednesday', high: 31, low: 23, condition: 'Cloudy', icon: '☁️' },
      { day: 'Thursday', high: 29, low: 22, condition: 'Light Rain', icon: '🌦️' },
      { day: 'Friday', high: 33, low: 25, condition: 'Sunny', icon: '☀️' }
    ]
  });

  const [selectedCity, setSelectedCity] = useState('New Delhi');

  const cities = [
    'New Delhi',
    'Mumbai',
    'Goa',
    'Jaipur',
    'Manali',
    'Leh, Ladakh'
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rainy':
      case 'light rain':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  const simulateWeatherUpdate = (city: string) => {
    // Simulate different weather data for different cities
    const weatherVariants = {
      'New Delhi': {
        temperature: 32,
        condition: 'Sunny',
        humidity: 45,
        windSpeed: 8,
        visibility: 10,
        uvIndex: 8
      },
      'Mumbai': {
        temperature: 28,
        condition: 'Partly Cloudy',
        humidity: 78,
        windSpeed: 12,
        visibility: 8,
        uvIndex: 7
      },
      'Goa': {
        temperature: 30,
        condition: 'Sunny',
        humidity: 68,
        windSpeed: 10,
        visibility: 15,
        uvIndex: 9
      },
      'Jaipur': {
        temperature: 35,
        condition: 'Sunny',
        humidity: 35,
        windSpeed: 6,
        visibility: 12,
        uvIndex: 9
      },
      'Manali': {
        temperature: 15,
        condition: 'Clear',
        humidity: 55,
        windSpeed: 5,
        visibility: 20,
        uvIndex: 6
      },
      'Leh, Ladakh': {
        temperature: 10,
        condition: 'Clear',
        humidity: 25,
        windSpeed: 15,
        visibility: 25,
        uvIndex: 8
      }
    };

    const cityWeather = weatherVariants[city as keyof typeof weatherVariants];
    
    setWeatherData(prev => ({
      ...prev,
      city,
      ...cityWeather
    }));
  };

  useEffect(() => {
    simulateWeatherUpdate(selectedCity);
  }, [selectedCity]);

  return (
    <section id="weather" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Weather Forecast
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time weather data and 5-day forecasts for your travel destinations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{weatherData.city}</h3>
                  <p className="text-sky-100 text-lg">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="text-center">
                  {getWeatherIcon(weatherData.condition)}
                  <p className="text-sky-100 mt-2">{weatherData.condition}</p>
                </div>
              </div>
              
              <div className="mt-8 flex items-center">
                <span className="text-6xl font-bold">{weatherData.temperature}°</span>
                <span className="text-3xl text-sky-200 ml-2">C</span>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <Droplets className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Humidity</p>
                  <p className="text-xl font-bold text-gray-900">{weatherData.humidity}%</p>
                </div>
                <div className="text-center">
                  <Wind className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Wind Speed</p>
                  <p className="text-xl font-bold text-gray-900">{weatherData.windSpeed} km/h</p>
                </div>
                <div className="text-center">
                  <Eye className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Visibility</p>
                  <p className="text-xl font-bold text-gray-900">{weatherData.visibility} km</p>
                </div>
                <div className="text-center">
                  <Sun className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">UV Index</p>
                  <p className="text-xl font-bold text-gray-900">{weatherData.uvIndex}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">5-Day Forecast</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="text-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <p className="text-sm font-medium text-gray-600 mb-2">{day.day}</p>
                      <div className="text-3xl mb-2">{day.icon}</div>
                      <p className="text-xs text-gray-500 mb-2">{day.condition}</p>
                      <div className="flex justify-center items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">{day.high}°</span>
                        <span className="text-sm text-gray-500">{day.low}°</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;