import  { useState } from 'react';
import { Menu, X, Plane, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div onClick={() => window.location.href = '/'} className="flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl font-bold text-gray-900">Royal Trip</span>
            <Plane className="h-8 w-8 text-blue-600" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/tours" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tours</a>
            <a href="/hotels" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Hotels</a>
            <a href="/visa-services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Visa</a>
            <a href="/plane-tickets" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Plane Tickets</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/tours" className="text-gray-700 hover:text-blue-600 font-medium">Tours</a>
              <a href="/hotels" className="text-gray-700 hover:text-blue-600 font-medium">Hotels</a>
              <a href="/visa-services" className="text-gray-700 hover:text-blue-600 font-medium">Visa</a>
              <a href="/plane-tickets" className="text-gray-700 hover:text-blue-600 font-medium">Plane Tickets</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 