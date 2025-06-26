import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tours = [
  {
    id: 1,
    title: 'Romantic Paris Adventure',
    country: 'France',
    duration: '7 Days',
    groupSize: '12-16 people',
    price: '$2,899',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Montmartre'],
    hotel: 'The Ritz Carlton Paris',
    transport: 'Luxury Coach',
    description: 'Experience the romance and elegance of Paris with visits to iconic landmarks, world-class museums, and charming neighborhoods.'
  },
  {
    id: 2,
    title: 'German Castles & Culture',
    country: 'Germany',
    duration: '8 Days',
    groupSize: '10-14 people',
    price: '$2,499',
    image: 'https://www.datocms-assets.com/34574/1631185470-neuschwanstein-castle.jpg',
    highlights: ['Neuschwanstein Castle', 'Berlin', 'Munich', 'Rhine Valley'],
    hotel: 'Hotel Adlon Kempinski',
    transport: 'Private Bus',
    description: 'Tour Germany\'s fairytale castles, vibrant cities, and scenic countryside with expert local guides.'
  },
  {
    id: 3,
    title: 'Spanish Fiesta Tour',
    country: 'Spain',
    duration: '7 Days',
    groupSize: '12-16 people',
    price: '$2,199',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    highlights: ['Barcelona', 'Madrid', 'Seville', 'Flamenco Show'],
    hotel: 'Hotel Arts Barcelona',
    transport: 'Tour Bus',
    description: 'Experience the vibrant culture, cuisine, and history of Spain\'s top cities and regions.'
  },
  {
    id: 4,
    title: 'UK & Scotland Explorer',
    country: 'United Kingdom & Scotland',
    duration: '10 Days',
    groupSize: '14-18 people',
    price: '$3,299',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    highlights: ['London', 'Edinburgh', 'Loch Ness', 'Stonehenge'],
    hotel: 'The Balmoral Edinburgh',
    transport: 'Luxury Coach',
    description: 'Discover the best of England and Scotland, from historic cities to legendary landscapes.'
  },
  {
    id: 5,
    title: 'Magical Malaysia',
    country: 'Malaysia',
    duration: '6 Days',
    groupSize: '10-14 people',
    price: '$1,799',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    highlights: ['Kuala Lumpur', 'Penang', 'Langkawi', 'Cameron Highlands'],
    hotel: 'Mandarin Oriental Kuala Lumpur',
    transport: 'Minivan',
    description: 'Explore Malaysia\'s diverse culture, food, and natural beauty on this immersive tour.'
  },
  {
    id: 6,
    title: 'Japan Discovery',
    country: 'Japan',
    duration: '10 Days',
    groupSize: '8-12 people',
    price: '$3,499',
    image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    highlights: ['Tokyo', 'Kyoto', 'Mount Fuji', 'Osaka'],
    hotel: 'Mandarin Oriental Tokyo',
    transport: 'Bullet Train',
    description: 'Experience the best of Japan, from ancient temples to modern cities and natural wonders.'
  },
  {
    id: 7,
    title: 'Korea Highlights',
    country: 'South Korea',
    duration: '8 Days',
    groupSize: '10-14 people',
    price: '$2,299',
    image: 'https://images.pexels.com/photos/237294/pexels-photo-237294.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    highlights: ['Seoul', 'Busan', 'Gyeongju', 'DMZ'],
    hotel: 'Lotte Hotel Seoul',
    transport: 'Tour Bus',
    description: 'Discover Korea\'s rich history, vibrant cities, and delicious cuisine.'
  },
  {
    id: 8,
    title: 'French Riviera Escape',
    country: 'France',
    duration: '6 Days',
    groupSize: '8-12 people',
    price: '$2,599',
    image: 'https://images.pexels.com/photos/161853/eiffel-tower-france-landmark-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    highlights: ['Nice', 'Cannes', 'Monaco', 'Saint-Tropez'],
    hotel: 'Hotel Negresco Nice',
    transport: 'Private Van',
    description: 'Relax on the sun-soaked beaches and glamorous towns of the French Riviera.'
  }
];

const TourCard = ({ tour }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
        {tour.price}
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
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="h-4 w-4 mr-1 text-red-500" />
        <span className="text-sm">{tour.country}</span>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        <strong>Hotel:</strong> {tour.hotel}<br />
        <strong>Transport:</strong> {tour.transport}
      </div>
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
);

const Tours = () => (
  <section id="tours" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured International Tours
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Let us take you beyond the ordinary. Our travel experts have crafted extraordinary journeys to the world’s most captivating destinations—each tour designed with insider knowledge, seamless service, and moments that turn into lifelong memories. Where will you wander next?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.slice(0, 3).map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/tours" className="flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          Explore More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  </section>
);

export default Tours;