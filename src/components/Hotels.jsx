import { Wifi, Car, Coffee, ArrowRight, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: 'The Ritz Carlton Paris',
      location: 'Paris, France',
      rating: 5,
      reviews: 1247,
      price: '$650',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Luxury hotel in the heart of Paris with stunning city views'
    },
    {
      id: 2,
      name: 'Mandarin Oriental Tokyo',
      location: 'Tokyo, Japan',
      rating: 5,
      reviews: 892,
      price: '$580',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Contemporary luxury with traditional Japanese hospitality'
    },
    {
      id: 3,
      name: 'Four Seasons Bali',
      location: 'Bali, Indonesia',
      rating: 5,
      reviews: 1089,
      price: '$420',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Tropical paradise with private beach and luxury amenities'
    },
    {
      id: 4,
      name: 'Safari Lodge Kenya',
      location: 'Masai Mara, Kenya',
      rating: 4,
      reviews: 456,
      price: '$350',
      image: 'https://images.pexels.com/photos/6138086/pexels-photo-6138086.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Authentic safari experience with luxury tented accommodation'
    },
    {
      id: 5,
      name: 'Belmond Hotel Machu Picchu',
      location: 'Aguas Calientes, Peru',
      rating: 4,
      reviews: 623,
      price: '$480',
      image: 'https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Historic hotel with direct access to Machu Picchu'
    },
    {
      id: 6,
      name: 'Hotel Rangá Iceland',
      location: 'Hella, Iceland',
      rating: 4,
      reviews: 387,
      price: '$320',
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

  return (
    <section id="hotels" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Hotel Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Indulge in the finest stays, handpicked for their unparalleled luxury and impeccable service. From iconic city retreats to secluded paradise resorts, each property promises extraordinary comfort and unforgettable moments—because where you stay should be just as remarkable as your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.slice(0, 3).map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200">
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-base font-bold text-gray-900 shadow">
                  {hotel.price}/night
                </div>
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {hotel.name}
                </h3>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-base">{hotel.location}</span>
                </div>
                <p className="text-gray-600 text-base mb-4 line-clamp-2">
                  {hotel.description}
                </p>
                <Link to={`/hotel/${hotel.id}`} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center">
                  Explore More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/hotels" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Show More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hotels; 