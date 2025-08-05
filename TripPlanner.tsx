import React, { useState } from 'react';
import { Plus, Calendar, MapPin, Clock, Trash2, GripVertical } from 'lucide-react';

interface TripDay {
  id: number;
  date: string;
  activities: Activity[];
}

interface Activity {
  id: number;
  time: string;
  title: string;
  location: string;
  duration: string;
  type: 'attraction' | 'restaurant' | 'hotel' | 'transport';
}

const TripPlanner = () => {
  const [tripDays, setTripDays] = useState<TripDay[]>([
    {
      id: 1,
      date: '2024-03-15',
      activities: [
        {
          id: 1,
          time: '09:00',
          title: 'Visit Acropolis Museum',
          location: 'Athens, Greece',
          duration: '2 hours',
          type: 'attraction'
        },
        {
          id: 2,
          time: '12:00',
          title: 'Lunch at Thanasis',
          location: 'Monastiraki, Athens',
          duration: '1 hour',
          type: 'restaurant'
        }
      ]
    },
    {
      id: 2,
      date: '2024-03-16',
      activities: [
        {
          id: 3,
          time: '08:00',
          title: 'Ferry to Santorini',
          location: 'Piraeus Port',
          duration: '5 hours',
          type: 'transport'
        }
      ]
    }
  ]);

  const [newActivity, setNewActivity] = useState({
    time: '',
    title: '',
    location: '',
    duration: '',
    type: 'attraction' as Activity['type']
  });

  const addActivity = (dayId: number) => {
    if (!newActivity.title || !newActivity.time) return;

    setTripDays(days =>
      days.map(day =>
        day.id === dayId
          ? {
              ...day,
              activities: [
                ...day.activities,
                {
                  id: Date.now(),
                  ...newActivity
                }
              ]
            }
          : day
      )
    );

    setNewActivity({
      time: '',
      title: '',
      location: '',
      duration: '',
      type: 'attraction'
    });
  };

  const removeActivity = (dayId: number, activityId: number) => {
    setTripDays(days =>
      days.map(day =>
        day.id === dayId
          ? {
              ...day,
              activities: day.activities.filter(activity => activity.id !== activityId)
            }
          : day
      )
    );
  };

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'attraction':
        return '🏛️';
      case 'restaurant':
        return '🍽️';
      case 'hotel':
        return '🏨';
      case 'transport':
        return '🚗';
      default:
        return '📍';
    }
  };

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'attraction':
        return 'border-l-blue-500 bg-blue-50';
      case 'restaurant':
        return 'border-l-orange-500 bg-orange-50';
      case 'hotel':
        return 'border-l-purple-500 bg-purple-50';
      case 'transport':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <section id="planner" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trip Planner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create detailed itineraries with drag-and-drop functionality and real-time updates
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {tripDays.map((day, dayIndex) => (
            <div key={day.id} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {dayIndex + 1}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Day {dayIndex + 1}</h3>
                  <p className="text-gray-600">{new Date(day.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {day.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`${getActivityColor(activity.type)} border-l-4 p-4 rounded-r-lg shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex items-center space-x-2">
                          <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                          <span className="text-2xl">{getActivityIcon(activity.type)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                              {activity.time}
                            </span>
                            <span className="text-gray-500 text-sm">
                              <Clock className="inline h-4 w-4 mr-1" />
                              {activity.duration}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{activity.title}</h4>
                          <p className="text-gray-600 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {activity.location}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeActivity(day.id, activity.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Add New Activity</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <input
                    type="time"
                    value={newActivity.time}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, time: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Activity title"
                    value={newActivity.title}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, title: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={newActivity.location}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, location: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={newActivity.duration}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, duration: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                  <select
                    value={newActivity.type}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, type: e.target.value as Activity['type'] }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="attraction">Attraction</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                    <option value="transport">Transport</option>
                  </select>
                </div>
                <button
                  onClick={() => addActivity(day.id)}
                  className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Activity</span>
                </button>
              </div>
            </div>
          ))}

          <div className="text-center">
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 font-semibold">
              Save Itinerary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanner;