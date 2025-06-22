import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import SkinAnalysis from './pages/SkinAnalysis';
import MoodStyling from './pages/MoodStyling';
import SmartOutfitPairing from './pages/SmartOutfitPairing';
import CulturalMakeover from './pages/CulturalMakeover';
import SelfCareGuide from './pages/SelfCareGuide';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Features />
                </>
              }
            />
            <Route path="/skin-analysis" element={<SkinAnalysis />} />
            <Route path="/mood-styling" element={<MoodStyling />} />
            <Route path="/smart-outfit-pairing" element={<SmartOutfitPairing />} />
            <Route path="/cultural-makeover" element={<CulturalMakeover />} />
            <Route path="/self-care-guide" element={<SelfCareGuide />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
