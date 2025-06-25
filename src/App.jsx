import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Hotels from './components/Hotels';
import VisaServices from './components/VisaServices';
import Footer from './components/Footer';
import ToursPage from './pages/ToursPage';
import TourDetailPage from './pages/TourDetailPage';
import VisaServicesPage from './pages/VisaServicesPage';
import VisaDetailPage from './pages/VisaDetailPage';
import HotelsPage from './pages/HotelsPage';
import HotelDetailPage from './pages/HotelDetailPage';
import PlaneTicketsPage from './pages/PlaneTicketsPage';
import PlaneTicketDetailPage from './pages/PlaneTicketDetailPage';
import PlaneTicketsPreview from './components/PlaneTicketsPreview';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Tours />
      <Hotels />
      <VisaServices />
      <PlaneTicketsPreview/>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/tours/:category" element={<ToursPage />} />
        <Route path="/tour/:id" element={<TourDetailPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotel/:id" element={<HotelDetailPage />} />
        <Route path="/visa-services" element={<VisaServicesPage />} />
        <Route path="/visa/:id" element={<VisaDetailPage />} />
        <Route path="/plane-tickets" element={<PlaneTicketsPage />} />
        <Route path="/plane-ticket/:id" element={<PlaneTicketDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App; 