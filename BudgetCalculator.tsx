import React, { useState, useEffect } from 'react';
import { Calculator, IndianRupee, Plane, Hotel, Utensils, Car, Camera, ShoppingBag } from 'lucide-react';

interface BudgetItem {
  category: string;
  icon: React.ReactNode;
  amount: number;
  description: string;
}

const BudgetCalculator = () => {
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [budgetType, setBudgetType] = useState<'budget' | 'mid-range' | 'luxury'>('mid-range');
  const [totalBudget, setTotalBudget] = useState(0);
  const [budgetBreakdown, setBudgetBreakdown] = useState<BudgetItem[]>([]);

  const budgetRates = {
    budget: {
      accommodation: 800,
      food: 600,
      transport: 400,
      activities: 300,
      shopping: 200,
      miscellaneous: 200
    },
    'mid-range': {
      accommodation: 2000,
      food: 1200,
      transport: 800,
      activities: 600,
      shopping: 500,
      miscellaneous: 400
    },
    luxury: {
      accommodation: 5000,
      food: 2500,
      transport: 2000,
      activities: 1500,
      shopping: 1000,
      miscellaneous: 1000
    }
  };

  useEffect(() => {
    const rates = budgetRates[budgetType];
    const breakdown: BudgetItem[] = [
      {
        category: 'Accommodation',
        icon: <Hotel className="h-5 w-5" />,
        amount: rates.accommodation * days,
        description: `₹${rates.accommodation}/night × ${days} nights`
      },
      {
        category: 'Food & Dining',
        icon: <Utensils className="h-5 w-5" />,
        amount: rates.food * days,
        description: `₹${rates.food}/day × ${days} days`
      },
      {
        category: 'Transportation',
        icon: <Car className="h-5 w-5" />,
        amount: rates.transport * days,
        description: `Local transport & intercity travel`
      },
      {
        category: 'Activities & Sightseeing',
        icon: <Camera className="h-5 w-5" />,
        amount: rates.activities * days,
        description: `Entry fees, tours, experiences`
      },
      {
        category: 'Shopping',
        icon: <ShoppingBag className="h-5 w-5" />,
        amount: rates.shopping * days,
        description: `Souvenirs and local products`
      },
      {
        category: 'Miscellaneous',
        icon: <IndianRupee className="h-5 w-5" />,
        amount: rates.miscellaneous * days,
        description: `Tips, emergency fund, extras`
      }
    ];

    setBudgetBreakdown(breakdown);
    const total = breakdown.reduce((sum, item) => sum + item.amount, 0) * travelers;
    setTotalBudget(total);
  }, [days, travelers, budgetType]);

  const getBudgetTypeColor = (type: string) => {
    switch (type) {
      case 'budget':
        return 'bg-green-500 text-white';
      case 'mid-range':
        return 'bg-blue-500 text-white';
      case 'luxury':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trip Budget Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your perfect Indian adventure with our detailed budget breakdown. Get accurate cost estimates for your entire trip.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white">
              <div className="flex items-center justify-center mb-6">
                <Calculator className="h-12 w-12 mr-4" />
                <h3 className="text-3xl font-bold">Budget Planner</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-green-100 text-sm font-medium mb-2">Trip Duration</label>
                  <select
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-green-300"
                  >
                    {[3, 5, 7, 10, 14, 21].map(day => (
                      <option key={day} value={day}>{day} Days</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-green-100 text-sm font-medium mb-2">Number of Travelers</label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-green-300"
                  >
                    {[1, 2, 3, 4, 5, 6].map(count => (
                      <option key={count} value={count}>{count} {count === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-green-100 text-sm font-medium mb-2">Budget Type</label>
                  <select
                    value={budgetType}
                    onChange={(e) => setBudgetType(e.target.value as 'budget' | 'mid-range' | 'luxury')}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-green-300"
                  >
                    <option value="budget">Budget Travel</option>
                    <option value="mid-range">Mid-Range</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <IndianRupee className="h-8 w-8 text-green-500" />
                  <span className="text-4xl font-bold text-gray-900">
                    {totalBudget.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-gray-600">
                  Total estimated cost for {travelers} {travelers === 1 ? 'person' : 'people'} × {days} days
                </p>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mt-2 ${getBudgetTypeColor(budgetType)}`}>
                  {budgetType.charAt(0).toUpperCase() + budgetType.slice(1)} Travel
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {budgetBreakdown.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-green-500">{item.icon}</div>
                        <h4 className="font-semibold text-gray-900">{item.category}</h4>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        ₹{(item.amount * travelers).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="mt-2 bg-green-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(item.amount * travelers / totalBudget) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Budget Tips for India Travel</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Book accommodations in advance for better rates</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Try local street food for authentic & budget meals</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Use public transport and shared rides</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Bargain at local markets for souvenirs</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold">
                  Save Budget Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetCalculator;