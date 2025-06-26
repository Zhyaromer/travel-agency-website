import { ArrowLeft, ArrowRight, Calendar, AlertCircle, Plane, Clock, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const tickets = [
  {
    id: 1,
    airline: 'Emirates',
    from: {
      name: 'Dubai International Airport',
      country: 'United Arab Emirates',
      city: 'Dubai',
      flag: (
        <svg className="w-8 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="5.33" fill="#00732F" />
          <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
          <rect y="10.67" width="24" height="5.33" fill="#000000" />
          <rect width="8" height="16" fill="#FF0000" />
        </svg>
      )
    },
    to: {
      name: 'John F. Kennedy International Airport',
      country: 'United States',
      city: 'New York',
      flag: (
        <svg className="w-8 h-6" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#B22234" />
          <rect y="1.23" width="24" height="1.23" fill="white" />
          <rect y="3.69" width="24" height="1.23" fill="white" />
          <rect y="6.15" width="24" height="1.23" fill="white" />
          <rect y="8.62" width="24" height="1.23" fill="white" />
          <rect y="11.08" width="24" height="1.23" fill="white" />
          <rect y="13.54" width="24" height="1.23" fill="white" />
          <rect width="9.6" height="8.62" fill="#3C3B6E" />
        </svg>
      ),
      image: 'https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2024-08-15',
    price: '$1,850',
    originalPrice: '$2,150',
    status: 'Available',
    description: 'Experience luxury travel with Emirates premium service. Direct flight from Dubai to New York with world-class amenities, award-winning entertainment system, and exceptional comfort.'
  }
];

const PlaneTicketDetailPage = () => {
  const ticket = tickets[0];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-yellow-50">
          <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to={'/'} className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Flight Search
            </Link>
          </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative bg-[#870D13] rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-48 -translate-y-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-32 translate-y-32"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Plane className="w-32 h-32 text-white opacity-20" />
              </div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">

                  <div className="mb-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{ticket.airline}</h1>
                    <div className="flex flex-wrap items-center text-yellow-100 mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span className="font-semibold">{ticket.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center md:justify-start items-center gap-6 mt-10">
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="flex-shrink-0">
                        {ticket.from.flag}
                      </div>
                      <div className="text-white">
                        <div className="text-yellow-100 text-sm">{ticket.from.city}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-white">
                      <div className="hidden sm:block w-16 h-0.5 bg-white/40"></div>
                      <ArrowRight className="h-8 w-8 flex-shrink-0" />
                      <div className="hidden sm:block w-16 h-0.5 bg-white/40"></div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="flex-shrink-0">
                        {ticket.to.flag}
                      </div>
                      <div className="text-white">
                        <div className="text-yellow-100 text-sm">{ticket.to.city}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 min-w-[250px]">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2">{ticket.price}</div>
                    <div className="text-yellow-200 font-medium">One-way</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Flight Details</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{ticket.description}</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-yellow-600 to-yellow-600 rounded-3xl p-8 text-white mt-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Fly?</h3>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto text-lg">
              Secure your seat today and enjoy premium travel experience with {ticket.airline}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Concat Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaneTicketDetailPage;