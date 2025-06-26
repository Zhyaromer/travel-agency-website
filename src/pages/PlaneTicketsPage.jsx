import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, ArrowRight, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const tickets = [
  {
    id: 1,
    airline: 'Emirates',
    from: {
      code: 'Dubai',
      name: 'Dubai International Airport',
      country: 'United Arab Emirates',
      flag: 'https://flagcdn.com/w40/ae.png',
      flagEmoji: '🇦🇪'
    },
    to: {
      code: 'New York',
      name: 'John F. Kennedy International Airport',
      country: 'United States',
      flag: 'https://flagcdn.com/w40/us.png',
      flagEmoji: '🇺🇸',
      image: 'https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2024-08-15',
    price: '$1,850',
    status: 'Available',
    description: 'Direct flight from Dubai to New York with Emirates. Comfortable seating and premium service.'
  },
  {
    id: 2,
    airline: 'Qatar Airways',
    from: {
      code: 'Doha',
      name: 'Hamad International Airport',
      country: 'Qatar',
      flag: 'https://flagcdn.com/w40/qa.png',
      flagEmoji: '🇶🇦'
    },
    to: {
      code: 'London',
      name: 'London Heathrow Airport',
      country: 'United Kingdom',
      flag: 'https://flagcdn.com/w40/gb.png',
      flagEmoji: '🇬🇧',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2024-09-02',
    price: '$650',
    status: 'Available',
    description: 'Non-stop flight from Doha to London with Qatar Airways. Modern aircraft and great value.'
  },
  {
    id: 3,
    airline: 'Singapore Airlines',
    from: {
      code: 'Singapore',
      name: 'Singapore Changi Airport',
      country: 'Singapore',
      flag: 'https://flagcdn.com/w40/sg.png',
      flagEmoji: '🇸🇬'
    },
    to: {
      code: 'London',
      name: 'London Heathrow Airport',
      country: 'United Kingdom',
      flag: 'https://flagcdn.com/w40/gb.png',
      flagEmoji: '🇬🇧',
      image: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2024-10-10',
    price: '$3,200',
    status: 'Available',
    description: 'Singapore Airlines direct to London. Award-winning service and comfort.'
  },
  {
    id: 4,
    airline: 'British Airways',
    from: {
      code: 'London',
      name: 'London Heathrow Airport',
      country: 'United Kingdom',
      flag: 'https://flagcdn.com/w40/gb.png',
      flagEmoji: '🇬🇧'
    },
    to: {
      code: 'Paris',
      name: 'Charles de Gaulle Airport',
      country: 'France',
      flag: 'https://flagcdn.com/w40/fr.png',
      flagEmoji: '🇫🇷',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2024-11-15',
    price: '$450',
    status: 'Available',
    description: 'Short hop from London to Paris with British Airways. Perfect for a weekend getaway.'
  },
  {
    id: 5,
    airline: 'Lufthansa',
    from: {
      code: 'Frankfurt',
      name: 'Frankfurt Airport',
      country: 'Germany',
      flag: 'https://flagcdn.com/w40/de.png',
      flagEmoji: '🇩🇪'
    },
    to: {
      code: 'New York',
      name: 'John F. Kennedy International Airport',
      country: 'United States',
      flag: 'https://flagcdn.com/w40/us.png',
      flagEmoji: '🇺🇸',
      image: 'https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2024-12-20',
    price: '$1,200',
    status: 'Available',
    description: 'Lufthansa premium service from Frankfurt to New York. German efficiency meets comfort.'
  },
  {
    id: 6,
    airline: 'Air France',
    from: {
      code: 'Paris',
      name: 'Charles de Gaulle Airport',
      country: 'France',
      flag: 'https://flagcdn.com/w40/fr.png',
      flagEmoji: '🇫🇷'
    },
    to: {
      code: 'Narita',
      name: 'Narita International Airport',
      country: 'Japan',
      flag: 'https://flagcdn.com/w40/jp.png',
      flagEmoji: '🇯🇵',
      image: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2025-01-05',
    price: '$2,800',
    status: 'Available',
    description: 'Air France luxury service from Paris to Tokyo. Experience French elegance in the sky.'
  }
];

const airlines = Array.from(new Set(tickets.map(t => t.airline)));
const fromAirports = Array.from(new Set(tickets.map(t => t.from.code)));
const toAirports = Array.from(new Set(tickets.map(t => t.to.code)));

const PlaneTicketsPage = () => {
  const [search, setSearch] = useState('');
  const [selectedAirline, setSelectedAirline] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const filtered = tickets.filter(ticket =>
    (selectedAirline === '' || ticket.airline === selectedAirline) &&
    (selectedFrom === '' || ticket.from.code === selectedFrom) &&
    (selectedTo === '' || ticket.to.code === selectedTo) &&
    (selectedDate === '' || ticket.date === selectedDate) &&
    (
      ticket.airline.toLowerCase().includes(search.toLowerCase()) ||
      ticket.from.code.toLowerCase().includes(search.toLowerCase()) ||
      ticket.to.code.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-[#870D13] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Flight</h1>
            <p className="text-xl text-gray-100 mb-8">Discover amazing deals on flights worldwide</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Search className="h-6 w-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Search & Filter</h2>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by airline, from, to..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Airline</label>
              <select
                value={selectedAirline}
                onChange={e => setSelectedAirline(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">All Airlines</option>
                {airlines.map(airline => (
                  <option key={airline} value={airline}>{airline}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
              <select
                value={selectedFrom}
                onChange={e => setSelectedFrom(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">All Departures</option>
                {fromAirports.map(airport => (
                  <option key={airport} value={airport}>{airport}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
              <select
                value={selectedTo}
                onChange={e => setSelectedTo(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">All Destinations</option>
                {toAirports.map(airport => (
                  <option key={airport} value={airport}>{airport}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {filtered.length} flights found
          </h3>
          <button
            onClick={() => {
              setSearch('');
              setSelectedAirline('');
              setSelectedFrom('');
              setSelectedTo('');
              setSelectedDate('');
            }}
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            Clear all filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((ticket) => (
            <div key={ticket.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ticket.to.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    {ticket.status}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold opacity-90">{ticket.to.country}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col items-center">
                      <img
                        src={ticket.from.flag}
                        alt={`${ticket.from.country} flag`}
                        className="w-8 h-6 rounded shadow-sm"
                      />
                      <span className="text-xs text-gray-500 mt-1">{ticket.from.code}</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white" />
                    <div className="flex flex-col items-center">
                      <img
                        src={ticket.to.flag}
                        alt={`${ticket.to.country} flag`}
                        className="w-8 h-6 rounded shadow-sm"
                      />
                      <span className="text-xs text-gray-500 mt-1">{ticket.to.code}</span>
                    </div>
                  </div>
                </div>

                <div className="text-lg font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors duration-300">
                  {ticket.airline}
                </div>

                <div className="text-center mb-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-50 rounded-2xl border border-yellow-100">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-600">
                    {ticket.price}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1"> 
                    One-way
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-yellow-50 transition-colors duration-300">
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                      Date
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      {ticket.date}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-yellow-50 transition-colors duration-300">
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
                  className="w-full bg-[#870D13] hover:bg-[#870D13]/80 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 block text-center"
                >
                  View Details
                </Link>
                 <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-100 rounded-full opacity-20 transform rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-100 to-purple-100 rounded-full opacity-20"></div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Plane className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No flights found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PlaneTicketsPage; 