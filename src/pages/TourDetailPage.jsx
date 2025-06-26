import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Calendar, Check, Share2 , DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TourDetailPage ()  {
  const { id } = useParams();

  const tours = [
    {
      id: 1,
      title: 'Romantic Paris Adventure',
      country: 'France',
      duration: '7 Days',
      price: '$2,899',
      images: [
        'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Montmartre', 'Arc de Triomphe', 'Notre-Dame'],
      hotel: 'The Ritz Carlton Paris',
      transport: 'Luxury Coach',
      description: 'Experience the romance and elegance of Paris with visits to iconic landmarks, world-class museums, and charming neighborhoods. This comprehensive tour combines must-see attractions with hidden gems, offering an authentic Parisian experience.',
      included: [
        '6 nights accommodation in 4-star hotels',
        'Daily breakfast and 3 dinners',
        'Professional English-speaking guide',
        'All entrance fees to attractions',
        'Airport transfers',
        'Seine River cruise',
        'Metro passes for all days'
      ],
      // itinerary: [
      //   {
      //     day: 1,
      //     title: 'Arrival in Paris',
      //     description: 'Arrive at Charles de Gaulle Airport. Transfer to hotel and evening welcome dinner.'
      //   },
      //   {
      //     day: 2,
      //     title: 'Classic Paris',
      //     description: 'Visit Eiffel Tower, Arc de Triomphe, and Champs-Élysées. Evening Seine River cruise.'
      //   },
      //   {
      //     day: 3,
      //     title: 'Art & Culture',
      //     description: 'Full day at the Louvre Museum and walk through Tuileries Garden.'
      //   },
      //   {
      //     day: 4,
      //     title: 'Montmartre & Sacré-Cœur',
      //     description: 'Explore the artistic quarter of Montmartre and visit Sacré-Cœur Basilica.'
      //   },
      //   {
      //     day: 5,
      //     title: 'Versailles Day Trip',
      //     description: 'Full day excursion to the Palace of Versailles and its magnificent gardens.'
      //   },
      //   {
      //     day: 6,
      //     title: 'Latin Quarter & Notre-Dame',
      //     description: 'Discover the Latin Quarter, Panthéon, and Notre-Dame Cathedral area.'
      //   },
      //   {
      //     day: 7,
      //     title: 'Departure',
      //     description: 'Free morning for last-minute shopping. Transfer to airport for departure.'
      //   }
      // ]
    },
  ];
  const tour = tours.find(t => t.id === parseInt(id || '1')) || tours[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/tours"
          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tours
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={tour.images[0]} 
                alt={tour.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {tour.images.slice(1, 4).map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`${tour.title} ${index + 2}`}
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
                  <span className="font-semibold">{tour.rating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{tour.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                <span>{tour.country}</span>
              </div>

              <div className="mb-4 text-gray-700 text-base">
                <strong>Hotel:</strong> {tour.hotel}<br/>
                <strong>Transport:</strong> {tour.transport}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {tour.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">{tour.duration}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-yellow-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">Next Departure</div>
                  <div className="text-gray-600">March 15, 2025</div>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-yellow-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">Price</div>
                  <div className="text-2xl font-bold text-yellow-600">{tour.price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tour.highlights.map((highlight, index) => (
              <div key={index} className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg text-center font-medium">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
            <div className="space-y-3">
              {tour.included.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Day by Day Itinerary</h2>
          <div className="space-y-6">
            {tour.itinerary.map((day, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{day.title}</h3>
                    <p className="text-gray-700">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="bg-yellow-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Paris?</h3>
          <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
            Join us on this unforgettable journey through the City of Light. Limited spots available for our next departure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-yellow-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};