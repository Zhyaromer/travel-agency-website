import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Wifi, Car, Coffee, Users, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const hotels = [
  {
    id: 1,
    name: 'The Ritz Carlton Paris',
    location: 'Paris, France',
    price: '$650',
    priceValue: 650,
    images: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    description: 'Luxury hotel in the heart of Paris with stunning city views. Enjoy world-class amenities and Michelin-starred dining.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mandarin Oriental Tokyo',
    location: 'Tokyo, Japan',
    price: '$580',
    priceValue: 580,
    images: [
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    description: 'Contemporary luxury with traditional Japanese hospitality. Award-winning spa and gourmet dining.',
    rating: 5
  },
  {
    id: 3,
    name: 'Four Seasons Bali',
    location: 'Bali, Indonesia',
    price: '$420',
    priceValue: 420,
    images: [
      'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    description: 'Tropical paradise with private beach and luxury amenities. Perfect for a relaxing getaway.',
    rating: 5
  },
  {
    id: 4,
    name: 'Safari Lodge Kenya',
    location: 'Masai Mara, Kenya',
    price: '$350',
    priceValue: 350,
    images: [
      'https://images.pexels.com/photos/6138086/pexels-photo-6138086.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    description: 'Authentic safari experience with luxury tented accommodation. See the Big Five up close.',
    rating: 4
  },
  {
    id: 5,
    name: 'Belmond Hotel Machu Picchu',
    location: 'Aguas Calientes, Peru',
    price: '$480',
    priceValue: 480,
    images: [
      'https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    description: 'Historic hotel with direct access to Machu Picchu. Enjoy mountain views and gourmet cuisine.',
    rating: 4
  },
  {
    id: 6,
    name: 'Hotel Rangá Iceland',
    location: 'Hella, Iceland',
    price: '$320',
    priceValue: 320,
    images: [
      'https://images.pexels.com/photos/2166473/pexels-photo-2166473.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    description: 'Perfect for Northern Lights viewing with luxury comfort. Stargazing and hot tubs included.',
    rating: 4
  }
];

const getAmenityIcon = (amenity) => {
  switch (amenity.toLowerCase()) {
    case 'free wifi':
      return <Wifi className="h-4 w-4 mr-1" />;
    case 'parking':
      return <Car className="h-4 w-4 mr-1" />;
    case 'restaurant':
      return <Coffee className="h-4 w-4 mr-1" />;
    default:
      return <Users className="h-4 w-4 mr-1" />;
  }
};

const HotelDetailPage = () => {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === parseInt(id));
  if (!hotel) return <div>Hotel not found</div>;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <Link to="/hotels" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Hotels
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={hotel.images[0]} 
                alt={hotel.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {hotel.images.slice(1, 4).map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`${hotel.name} ${index + 2}`}
                    className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-yellow-500 text-sm">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current mr-1" />
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{hotel.name}</h1>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                <span>{hotel.location}</span>
              </div>
              <div className="mb-4 text-gray-700 text-base">
                <strong>Price:</strong> {hotel.price} <span className="text-gray-500">/night</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {hotel.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center">
               <Star className="h-5 w-5 text-yellow-500 mr-3" fill="currentColor" stroke="currentColor" />
                <div>
                  <div className="font-semibold text-gray-900">Rating</div>
                  <div className="text-gray-600">{hotel.rating} Stars</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready for a Luxurious Stay at {hotel.name}?</h3>
          <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
            Experience luxury and comfort at {hotel.name}. Contact us for exclusive offers and packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default HotelDetailPage; 