import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularDestinations from './components/PopularDestinations';
import TripPlanner from './components/TripPlanner';
import WeatherWidget from './components/WeatherWidget';
import About from './components/About';
import BudgetCalculator from './components/BudgetCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <Header />
      <Hero />
      <PopularDestinations />
      <TripPlanner />
      <BudgetCalculator />
      <WeatherWidget />
      <About />
      <Footer />
    </div>
  );
}

export default App;