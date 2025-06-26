import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SvgFlag = ({ country, size = 48 }) => {
  switch (country) {
    case 'United States':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24"><rect width="36" height="24" fill="#b22234"/><g fill="#fff"><rect y="2" width="36" height="2"/><rect y="6" width="36" height="2"/><rect y="10" width="36" height="2"/><rect y="14" width="36" height="2"/><rect y="18" width="36" height="2"/></g><rect width="10" height="7" fill="#3c3b6e"/><g fill="#fff"><circle cx="1.5" cy="1.5" r="0.5"/><circle cx="3.5" cy="1.5" r="0.5"/><circle cx="5.5" cy="1.5" r="0.5"/><circle cx="7.5" cy="1.5" r="0.5"/><circle cx="9" cy="2.5" r="0.5"/><circle cx="2.5" cy="2.5" r="0.5"/><circle cx="4.5" cy="2.5" r="0.5"/><circle cx="6.5" cy="2.5" r="0.5"/></g></svg>
      );
    case 'United Kingdom':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24"><rect width="36" height="24" fill="#00247d"/><path d="M0 0l36 24M36 0L0 24" stroke="#fff" strokeWidth="4"/><path d="M0 0l36 24M36 0L0 24" stroke="#cf142b" strokeWidth="2"/><rect x="15" width="6" height="24" fill="#fff"/><rect y="9" width="36" height="6" fill="#fff"/><rect x="16" width="4" height="24" fill="#cf142b"/><rect y="10" width="36" height="4" fill="#cf142b"/></svg>
      );
    case 'Japan':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff"/><circle cx="18" cy="12" r="6" fill="#bc002d"/></svg>
      );
    case 'India':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24"><rect width="36" height="24" fill="#ff9933"/><rect y="8" width="36" height="8" fill="#fff"/><rect y="16" width="36" height="8" fill="#138808"/><circle cx="18" cy="12" r="3" fill="#008"/></svg>
      );
    default:
      return <span className="text-4xl">🏳️</span>;
  }
};

const VisaServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [processingTime, setProcessingTime] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const allVisaServices = [
    {
      id: 1,
      country: 'United States',
      type: 'Tourist Visa (B1/B2)',
      processingTime: '3-5 weeks',
      validity: '10 years',
      price: '$185',
      requirements: ['Valid Passport (6+ months)', 'DS-160 Form', 'Passport Photo', 'Interview Appointment', 'Financial Documents', 'Travel Itinerary'],
      flag: '🇺🇸',
      region: 'north-america',
      description: 'Visit the United States for tourism, business, or medical treatment.',
      documents: [
        'Valid passport with at least 6 months validity',
        'Completed DS-160 online application form',
        'One passport-style photograph',
        'Proof of financial support',
        'Travel itinerary and accommodation details',
        'Employment letter or business registration'
      ]
    },
    {
      id: 2,
      country: 'United Kingdom',
      type: 'Standard Visitor Visa',
      processingTime: '3-4 weeks',
      validity: '6 months',
      price: '$120',
      requirements: ['Valid Passport', 'Application Form', 'Financial Proof', 'Biometrics'],
      flag: '🇬🇧',
      region: 'europe',
      description: 'Visit the UK for tourism, business, or to see family and friends.',
      documents: [
        'Valid passport or travel document',
        'Completed online application form',
        'Biometric information (fingerprints and photo)',
        'Bank statements for last 6 months',
        'Employment letter and payslips',
        'Travel itinerary and accommodation bookings'
      ]
    },
    {
      id: 3,
      country: 'Schengen Area',
      type: 'Tourist Visa',
      processingTime: '2-3 weeks',
      validity: '90 days',
      price: '$95',
      requirements: ['Valid Passport', 'Application Form', 'Travel Insurance', 'Itinerary'],
      flag: '🇪🇺',
      region: 'europe',
      description: 'Visit 26 European countries with a single visa.',
      documents: [
        'Valid passport with 2 blank pages',
        'Completed application form',
        'Travel insurance (minimum €30,000 coverage)',
        'Flight reservations',
        'Hotel bookings or invitation letter',
        'Bank statements for last 3 months'
      ]
    },
    {
      id: 4,
      country: 'Japan',
      type: 'Tourist Visa',
      processingTime: '1-2 weeks',
      validity: '90 days',
      price: '$75',
      requirements: ['Valid Passport', 'Application Form', 'Photo', 'Itinerary'],
      flag: '🇯🇵',
      region: 'asia',
      description: 'Explore Japan\'s rich culture, history, and modern attractions.',
      documents: [
        'Valid passport with at least 6 months validity',
        'Completed visa application form',
        'Recent passport-size photograph',
        'Detailed travel itinerary',
        'Proof of financial means',
        'Return flight tickets'
      ]
    },
    {
      id: 5,
      country: 'Australia',
      type: 'Visitor Visa (600)',
      processingTime: '2-4 weeks',
      validity: '12 months',
      price: '$150',
      requirements: ['Valid Passport', 'Online Application', 'Financial Proof', 'Health Insurance'],
      flag: '🇦🇺',
      region: 'oceania',
      description: 'Visit Australia for tourism or business purposes.',
      documents: [
        'Valid passport',
        'Online application (ImmiAccount)',
        'Proof of financial capacity',
        'Health insurance',
        'Character documents if required',
        'Travel itinerary'
      ]
    },
    {
      id: 6,
      country: 'Canada',
      type: 'Visitor Visa',
      processingTime: '3-6 weeks',
      validity: '10 years',
      price: '$135',
      requirements: ['Valid Passport', 'Application Form', 'Financial Proof', 'Biometrics'],
      flag: '🇨🇦',
      region: 'north-america',
      description: 'Visit Canada for tourism, business, or family visits.',
      documents: [
        'Valid passport or travel document',
        'Completed application forms',
        'Biometrics (fingerprints and photo)',
        'Proof of financial support',
        'Letter of invitation (if applicable)',
        'Travel history documents'
      ]
    },
    {
      id: 7,
      country: 'China',
      type: 'Tourist Visa (L)',
      processingTime: '1-2 weeks',
      validity: '30 days',
      price: '$140',
      requirements: ['Valid Passport', 'Application Form', 'Photo', 'Itinerary', 'Hotel Bookings'],
      flag: '🇨🇳',
      region: 'asia',
      description: 'Discover China\'s ancient culture and modern cities.',
      documents: [
        'Valid passport with at least 6 months validity',
        'Completed application form',
        'Recent passport photograph',
        'Round-trip flight tickets',
        'Hotel reservations',
        'Travel itinerary'
      ]
    },
    {
      id: 8,
      country: 'India',
      type: 'e-Tourist Visa',
      processingTime: '3-5 days',
      validity: '60 days',
      price: '$80',
      requirements: ['Valid Passport', 'Online Application', 'Photo', 'Return Tickets'],
      flag: '🇮🇳',
      region: 'asia',
      description: 'Experience India\'s diverse culture, history, and landscapes.',
      documents: [
        'Valid passport with at least 6 months validity',
        'Online e-visa application',
        'Digital passport photograph',
        'Return flight tickets',
        'Proof of accommodation',
        'Sufficient funds proof'
      ]
    }
  ];

  const visaTypes = Array.from(new Set(allVisaServices.map(v => v.type.split(' ')[0])));

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'north-america', name: 'North America' },
    { id: 'oceania', name: 'Oceania' }
  ];

  const filteredVisas = allVisaServices.filter(visa => {
    const matchesSearch = visa.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         visa.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || visa.region === selectedRegion;
    const matchesProcessingTime = processingTime === 'all' ||
                                 (processingTime === 'fast' && visa.processingTime.includes('1-2')) ||
                                 (processingTime === 'standard' && (visa.processingTime.includes('2-3') || visa.processingTime.includes('3-4'))) ||
                                 (processingTime === 'slow' && (visa.processingTime.includes('3-5') || visa.processingTime.includes('3-6')));
    const matchesType = selectedType === 'all' || visa.type.toLowerCase().includes(selectedType.toLowerCase());
    return matchesSearch && matchesRegion && matchesProcessingTime && matchesType;
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Visa Services</h1>
          <p className="text-gray-600">{filteredVisas.length} countries available</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {regions.map(region => (
                <option key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select>

            <select
              value={processingTime}
              onChange={(e) => setProcessingTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="all">All Processing Times</option>
              <option value="fast">Fast (1-2 weeks)</option>
              <option value="standard">Standard (2-4 weeks)</option>
              <option value="slow">Extended (3+ weeks)</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              {visaTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVisas.map((visa) => (
              <div key={visa.id} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-yellow-200 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <SvgFlag country={visa.country} size={56} className="rounded-lg shadow-sm" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                          {visa.country}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                          {visa.type}
                        </p>
                      </div>
                    </div>

                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Available
                    </div>
                  </div>

                  <div className="text-center mb-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-50 rounded-2xl border border-yellow-100">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-600">
                      {visa.price}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">
                     Processing Fee
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-yellow-50 transition-colors duration-300">
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                        Processing Time
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {visa.processingTime}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-yellow-50 transition-colors duration-300">
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                        Validity Period
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {visa.validity}
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={`/visa/${visa.id}`}
                    className="w-full bg-[#870D13] hover:bg-[#870D13]/80 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 block text-center"
                  >
                     View Details
                  </Link>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-100 rounded-full opacity-20 transform rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-100 to-purple-100 rounded-full opacity-20"></div>
              </div>
          ))}
        </div>

        {filteredVisas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No visa services found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('all');
                setProcessingTime('all');
                setSelectedType('all');
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

export default VisaServicesPage;