import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tickets = [
  {
    id: 1,
    airline: 'Emirates',
    from: { code: 'DXB', name: 'Dubai International Airport', country: 'United Arab Emirates', flag: '🇦🇪' },
    to: { code: 'JFK', name: 'John F. Kennedy International Airport', country: 'United States', flag: '🇺🇸', image: 'https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=800' },
    date: '2024-08-15',
    price: '$1,850',
    status: 'Available',
    description: 'Direct flight from Dubai to New York with Emirates. Comfortable seating and premium service.'
  },
  {
    id: 2,
    airline: 'Qatar Airways',
    from: { code: 'DOH', name: 'Hamad International Airport', country: 'Qatar', flag: '🇶🇦' },
    to: { code: 'LHR', name: 'London Heathrow Airport', country: 'United Kingdom', flag: '🇬🇧', image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800' },
    date: '2024-09-02',
    price: '$650',
    status: 'Available',
    description: 'Non-stop flight from Doha to London with Qatar Airways. Modern aircraft and great value.'
  },
  {
    id: 3,
    airline: 'Singapore Airlines',
    from: { code: 'SIN', name: 'Singapore Changi Airport', country: 'Singapore', flag: '🇸🇬' },
    to: { code: 'LHR', name: 'London Heathrow Airport', country: 'United Kingdom', flag: '🇬🇧', image: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=800' },
    date: '2024-10-10',
    price: '$3,200',
    status: 'Available',
    description: 'Singapore Airlines direct to London. Award-winning service and comfort.'
  }
];

const PlaneTickets = () => (
  <section id="plane-tickets" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Plane Tickets & Booking</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Book your next flight with the best airlines. Enjoy exclusive deals, flexible dates, and 24/7 support.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Popular Plane Tickets</h3>
            <p className="text-gray-600">Most booked flight routes</p>
          </div>
          <Link
            to="/plane-tickets"
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Show All Tickets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.slice(0, 3).map((ticket) => (
            <div key={ticket.id} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-200 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl">{ticket.from.flag}</span>
                      <span className="text-xs text-gray-500 mt-1">{ticket.from.code}</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                    <div className="flex flex-col items-center">
                      <span className="text-3xl">{ticket.to.flag}</span>
                      <span className="text-xs text-gray-500 mt-1">{ticket.to.code}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{ticket.airline}</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {ticket.status}
                  </div>
                </div>
                <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {ticket.price}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">
                    One-way, taxes included
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-blue-50 transition-colors duration-300">
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                      Date
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      {ticket.date}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-blue-50 transition-colors duration-300">
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                      Airline
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      {ticket.airline}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/plane-ticket/${ticket.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 block text-center"
                >
                  Explore More
                </Link>
              </div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 transform rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PlaneTickets; 