import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Car, Coffee, Star, MapPin, Users, Search, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const hotels = [
  {
    id: 1,
    name: 'The Ritz Carlton Paris',
    location: 'Paris, France',
    rating: 5,
    price: 650,
    priceDisplay: '$650',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Luxury hotel in the heart of Paris with stunning city views'
  },
  {
    id: 2,
    name: 'Mandarin Oriental Tokyo',
    location: 'Tokyo, Japan',
    rating: 5,
    price: 580,
    priceDisplay: '$580',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Contemporary luxury with traditional Japanese hospitality'
  },
  {
    id: 3,
    name: 'Four Seasons Bali',
    location: 'Bali, Indonesia',
    rating: 5,
    price: 420,
    priceDisplay: '$420',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Tropical paradise with private beach and luxury amenities'
  },
  {
    id: 4,
    name: 'Safari Lodge Kenya',
    location: 'Masai Mara, Kenya',
    rating: 4,
    price: 350,
    priceDisplay: '$350',
    image: 'https://images.pexels.com/photos/6138086/pexels-photo-6138086.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Authentic safari experience with luxury tented accommodation'
  },
  {
    id: 5,
    name: 'Belmond Hotel Machu Picchu',
    location: 'Aguas Calientes, Peru',
    rating: 4,
    price: 480,
    priceDisplay: '$480',
    image: 'https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Historic hotel with direct access to Machu Picchu'
  },
  {
    id: 6,
    name: 'Hotel Rangá Iceland',
    location: 'Hella, Iceland',
    rating: 4,
    price: 320,
    priceDisplay: '$320',
    image: 'https://images.pexels.com/photos/2166473/pexels-photo-2166473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Perfect for Northern Lights viewing with luxury comfort'
  }
];

const getAmenityIcon = (amenity) => {
  switch (amenity.toLowerCase()) {
    case 'free wifi':
      return <Wifi className="h-4 w-4" />;
    case 'parking':
      return <Car className="h-4 w-4" />;
    case 'restaurant':
      return <Coffee className="h-4 w-4" />;
    default:
      return <Users className="h-4 w-4" />;
  }
};

const HotelsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' ||
      (priceRange === 'low' && hotel.price < 400) ||
      (priceRange === 'mid' && hotel.price >= 400 && hotel.price < 600) ||
      (priceRange === 'high' && hotel.price >= 600);
    const matchesRating = rating === 'all' || hotel.rating === parseInt(rating);
    return matchesSearch && matchesPrice && matchesRating;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Hotels</h1>
          <p className="text-gray-600">{sortedHotels.length} hotels available</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search hotels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $400</option>
              <option value="mid">$400 - $599</option>
              <option value="high">$600 and above</option>
            </select>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200">
              <div className="relative overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                  {hotel.priceDisplay}/night
                </div>
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center text-yellow-500 text-sm mb-2">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current mr-1" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {hotel.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {hotel.description}
                </p>
                <Link 
                  to={`/hotel/${hotel.id}`}
                  className="w-full bg-[#870D13] hover:bg-[#870D13]/80 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 block text-center mt-3"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelsPage; 