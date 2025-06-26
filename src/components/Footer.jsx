import { Plane, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden shadow-2xl shadow-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://ihmnotessite.com/wp-content/uploads/2022/01/top-travel-agencies-.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                Royal Trip
              </span>
              <div className="p-2 rounded-lg">
                <Plane className="h-12 w-12 text-yellow-500" />
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
              Your trusted partner for unforgettable travel experiences around the world.
              Creating memories that last a lifetime.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <div
                onClick={() => window.open('https://www.facebook.com/royaltrip2021', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <div
                onClick={() => window.open('https://www.instagram.com/royal.trip.travel/', '_blank')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <div
                onClick={() => window.open('https://www.linkedin.com/company/royal-trip-travel/', '_blank')}
                className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              <a href="#tours" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-1 hover:pl-2">
                Tours
              </a>
              <a href="#hotels" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-1 hover:pl-2">
                Hotels
              </a>
              <a href="#visa" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-1 hover:pl-2">
                Visa Services
              </a>
              <a href="#plane-tickets" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-1 hover:pl-2">
                Plane Tickets
              </a>
              <a href="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-1 hover:pl-2">
                About Us
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-1 hover:pl-2">
                Contact
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contact Info</h3>
            <div className="space-y-4">

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2">
                  <div className="flex items-center">
                    <span className="text-gray-300 font-medium">0773 519 9595</span>
                    <div className="p-1.5">
                      <Phone className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2">
                  <div className="flex items-center">
                    <span className="text-gray-300 font-medium">0773 507 9797</span>
                    <div className="p-1.5 rounded-full">
                      <Phone className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2">
                  <div className="flex items-center">
                    <span className="text-gray-300 font-medium">0773 222 4000</span>
                    <div className="p-1.5 rounded-full">
                      <Phone className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2">
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">royal.trip21@gmail.com</span>
                  <div className="p-1.5">
                    <Mail className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center md:justify-end items-start gap-2">
                <div className="flex items-center ml-8 md:ml-0">
                  <div className="text-gray-300 font-medium text-center md:text-right">
                    <span>Slemani Ashti Infront of Blnd School</span>
                  </div>
                  <div className=" p-1.5 mt-0.5">
                    <MapPin className="h-4 w-4 text-red-500" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 Royal Trip Travel Agency. All rights reserved.
            </p>
            <div className="flex flex-row text-center gap-2">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;