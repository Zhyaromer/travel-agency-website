import { Plane, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">Royal Trip</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for unforgettable travel experiences around the world. 
              Creating memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#tours" className="text-gray-400 hover:text-white transition-colors">Tours</a></li>
              <li><a href="#hotels" className="text-gray-400 hover:text-white transition-colors">Hotels</a></li>
              <li><a href="#visa" className="text-gray-400 hover:text-white transition-colors">Visa Services</a></li>
              <li><a href="#plane-tickets" className="text-gray-400 hover:text-white transition-colors">Plane Tickets</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div dir='rtl' className='text-right'>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex justify-start items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex justify-start  items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-400">info@Royal Trip.com</span>
              </div>
              <div className="flex justify-start items-start gap-2">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span className="text-gray-400">
                  123 Travel Street<br />
                  Adventure City, AC 12345<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Royal Trip Travel Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 