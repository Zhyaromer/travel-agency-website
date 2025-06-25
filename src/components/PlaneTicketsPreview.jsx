import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const tickets = [
  {
    id: 1,
    airline: 'Emirates',
    from: {
      code: 'DXB',
      name: 'Dubai International Airport',
      country: 'United Arab Emirates',
      flag: 'https://flagcdn.com/w40/ae.png',
      flagEmoji: '🇦🇪'
    },
    to: {
      code: 'JFK',
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
      code: 'DOH',
      name: 'Hamad International Airport',
      country: 'Qatar',
      flag: 'https://flagcdn.com/w40/qa.png',
      flagEmoji: '🇶🇦'
    },
    to: {
      code: 'LHR',
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
      code: 'SIN',
      name: 'Singapore Changi Airport',
      country: 'Singapore',
      flag: 'https://flagcdn.com/w40/sg.png',
      flagEmoji: '🇸🇬'
    },
    to: {
      code: 'LHR',
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
  }
];

const PlaneTicketsPreview = () => {
  return (
    <div className="my-12 max-w-7xl flex flex-col justify-center items-center mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Plane Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tickets.slice(0, 3).map((ticket) => (
          <div key={ticket.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src={ticket.to.image}
                alt={`${ticket.to.name}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                  {ticket.status}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-2xl font-bold">{ticket.to.name}</div>
                <div className="text-sm opacity-90">{ticket.to.country}</div>
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
                  <ArrowRight className="h-5 w-5 text-blue-600" />
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

              <div className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {ticket.airline}
              </div>

              <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {ticket.price}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-1">
                  One-way
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 block text-center"
              >
                Explore More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/plane-tickets" className="mt-6 flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
        Show More
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  );
};

export default PlaneTicketsPreview; 