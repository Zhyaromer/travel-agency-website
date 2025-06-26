import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, ArrowLeft, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ToursPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [duration, setDuration] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const allTours = {
    europe: [
      {
        id: 1,
        title: 'Romantic Paris Adventure',
        location: 'France',
        duration: '7 Days',
        price: 2899,
        priceDisplay: '$2,899',
        image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Montmartre'],
        description: 'Experience the romance and elegance of Paris with visits to iconic landmarks, world-class museums, and charming neighborhoods.'
      },
      {
        id: 2,
        title: 'Swiss Alps Experience',
        location: 'Switzerland',
        duration: '6 Days',
        price: 3299,
        priceDisplay: '$3,299',
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Matterhorn', 'Jungfraujoch', 'Lake Geneva', 'Alpine Villages'],
        description: 'Discover the breathtaking beauty of the Swiss Alps with scenic train rides, mountain peaks, and pristine lakes.'
      },
      {
        id: 3,
        title: 'Italian Renaissance Tour',
        location: 'Italy',
        duration: '10 Days',
        price: 3599,
        priceDisplay: '$3,599',
        image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Colosseum', 'Vatican City', 'Florence Art', 'Venice Canals'],
        description: 'Journey through Italy\'s artistic heritage, from ancient Rome to Renaissance Florence and romantic Venice.'
      },
      {
        id: 4,
        title: 'Greek Island Hopping',
        location: 'Greece',
        duration: '8 Days',
        price: 2499,
        priceDisplay: '$2,499',
        image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Santorini Sunsets', 'Mykonos Beaches', 'Ancient Athens', 'Delphi Oracle'],
        description: 'Explore the stunning Greek islands with their white-washed buildings, crystal-clear waters, and ancient history.'
      }
    ],
    asia: [
      {
        id: 5,
        title: 'Ancient Temples of Japan',
        location: 'Japan',
        duration: '10 Days',
        price: 3499,
        priceDisplay: '$3,499',
        image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Fushimi Inari', 'Mount Fuji', 'Golden Pavilion', 'Tokyo Skytree'],
        description: 'Immerse yourself in Japanese culture with visits to ancient temples, modern cities, and traditional experiences.'
      },
      {
        id: 6,
        title: 'Tropical Paradise Bali',
        location: 'Indonesia',
        duration: '6 Days',
        price: 1799,
        priceDisplay: '$1,799',
        image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Uluwatu Temple', 'Rice Terraces', 'Beach Clubs', 'Cultural Shows'],
        description: 'Discover Bali\'s spiritual side and natural beauty with temple visits, rice terraces, and pristine beaches.'
      },
      {
        id: 7,
        title: 'Thailand Adventure',
        location: 'Thailand',
        duration: '9 Days',
        price: 2199,
        priceDisplay: '$2,199',
        image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Bangkok Temples', 'Phi Phi Islands', 'Elephant Sanctuary', 'Floating Markets'],
        description: 'Experience Thailand\'s vibrant culture, stunning islands, and delicious cuisine on this comprehensive tour.'
      }
    ],
    america: [
      {
        id: 8,
        title: 'Machu Picchu Explorer',
        location: 'Peru',
        duration: '9 Days',
        price: 2699,
        priceDisplay: '$2,699',
        image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Machu Picchu', 'Sacred Valley', 'Lima City', 'Inca Trail'],
        description: 'Discover the mysteries of the ancient Inca civilization with visits to Machu Picchu and the Sacred Valley.'
      },
      {
        id: 9,
        title: 'Canadian Rockies Adventure',
        location: 'Canada',
        duration: '8 Days',
        price: 2399,
        priceDisplay: '$2,399',
        image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Banff National Park', 'Lake Louise', 'Jasper', 'Calgary'],
        description: 'Explore Canada\'s stunning Rocky Mountains with pristine lakes, wildlife, and breathtaking landscapes.'
      }
    ],
    africa: [
      {
        id: 10,
        title: 'Safari Adventure Kenya',
        location: 'Kenya',
        duration: '8 Days',
        price: 3299,
        priceDisplay: '$3,299',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Big Five Safari', 'Maasai Villages', 'Great Migration', 'Balloon Safari'],
        description: 'Experience the ultimate African safari with wildlife viewing, cultural encounters, and luxury accommodations.'
      },
      {
        id: 11,
        title: 'Egyptian Wonders',
        location: 'Egypt',
        duration: '7 Days',
        price: 2199,
        priceDisplay: '$2,199',
        image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        highlights: ['Pyramids of Giza', 'Nile Cruise', 'Valley of Kings', 'Cairo Museum'],
        description: 'Journey through ancient Egypt with visits to iconic pyramids, temples, and a luxurious Nile cruise.'
      }
    ]
  };

  const categoryTours = category && category !== 'all' 
    ? allTours[category] || []
    : Object.values(allTours).flat();

  const filteredTours = categoryTours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && tour.price < 2000) ||
                        (priceRange === 'mid' && tour.price >= 2000 && tour.price < 3000) ||
                        (priceRange === 'high' && tour.price >= 3000);
    
    const matchesDuration = duration === 'all' ||
                           (duration === 'short' && parseInt(tour.duration) <= 7) ||
                           (duration === 'long' && parseInt(tour.duration) > 7);
    
    return matchesSearch && matchesPrice && matchesDuration;
  });

  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
    }
  });

  const getCategoryTitle = () => {
    if (!category || category === 'all') return 'All International Tours';
    return `${category.charAt(0).toUpperCase() + category.slice(1)} Tours`;
  };

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{getCategoryTitle()}</h1>
          <p className="text-gray-600">{sortedTours.length} tours available</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tours..."
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
              <option value="low">Under $2,000</option>
              <option value="mid">$2,000 - $3,000</option>
              <option value="high">Over $3,000</option>
            </select>

            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="all">All Durations</option>
              <option value="short">7 days or less</option>
              <option value="long">More than 7 days</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                  {tour.priceDisplay}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm">
                  <Clock className="inline h-4 w-4 mr-1" />
                  {tour.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {tour.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1 text-red-500" />
                  <span className="text-sm">{tour.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>

                <div className="flex items-center justify-start text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{tour.duration}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/tour/${tour.id}`}
                    className="w-full bg-[#870D13] hover:bg-[#870D13]/80 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedTours.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tours found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setPriceRange('all');
                setDuration('all');
              }}
              className="mt-4 text-yellow-600 hover:text-yellow-700 font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ToursPage;