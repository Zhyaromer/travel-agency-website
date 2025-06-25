import { Globe, FileText, Users, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SvgFlag = ({ country, size = 48 }) => {
  switch (country) {
    case 'United States':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24"><rect width="36" height="24" fill="#b22234" /><g fill="#fff"><rect y="2" width="36" height="2" /><rect y="6" width="36" height="2" /><rect y="10" width="36" height="2" /><rect y="14" width="36" height="2" /><rect y="18" width="36" height="2" /></g><rect width="10" height="7" fill="#3c3b6e" /><g fill="#fff"><circle cx="1.5" cy="1.5" r="0.5" /><circle cx="3.5" cy="1.5" r="0.5" /><circle cx="5.5" cy="1.5" r="0.5" /><circle cx="7.5" cy="1.5" r="0.5" /><circle cx="9" cy="2.5" r="0.5" /><circle cx="2.5" cy="2.5" r="0.5" /><circle cx="4.5" cy="2.5" r="0.5" /><circle cx="6.5" cy="2.5" r="0.5" /></g></svg>
      );
    case 'United Kingdom':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24"><rect width="36" height="24" fill="#00247d" /><path d="M0 0l36 24M36 0L0 24" stroke="#fff" strokeWidth="4" /><path d="M0 0l36 24M36 0L0 24" stroke="#cf142b" strokeWidth="2" /><rect x="15" width="6" height="24" fill="#fff" /><rect y="9" width="36" height="6" fill="#fff" /><rect x="16" width="4" height="24" fill="#cf142b" /><rect y="10" width="36" height="4" fill="#cf142b" /></svg>
      );
    case 'Japan':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24"><rect width="36" height="24" fill="#fff" /><circle cx="18" cy="12" r="6" fill="#bc002d" /></svg>
      );
    case 'India':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24"><rect width="36" height="24" fill="#ff9933" /><rect y="8" width="36" height="8" fill="#fff" /><rect y="16" width="36" height="8" fill="#138808" /><circle cx="18" cy="12" r="3" fill="#008" /></svg>
      );
    default:
      return <span className="text-4xl">🏳️</span>;
  }
};

const VisaServices = () => {
  const visaTypes = [
    {
      id: 1,
      country: 'United States',
      type: 'Tourist Visa (B1/B2)',
      processingTime: '3-5 weeks',
      validity: '10 years',
      price: '$185',
      requirements: ['Valid Passport', 'DS-160 Form', 'Photo', 'Interview'],
      flag: '🇺🇸'
    },
    {
      id: 2,
      country: 'United Kingdom',
      type: 'Standard Visitor Visa',
      processingTime: '3-4 weeks',
      validity: '6 months',
      price: '$120',
      requirements: ['Valid Passport', 'Application Form', 'Financial Proof', 'Biometrics'],
      flag: '🇬🇧'
    },
    {
      id: 4,
      country: 'Japan',
      type: 'Tourist Visa',
      processingTime: '1-2 weeks',
      validity: '90 days',
      price: '$75',
      requirements: ['Valid Passport', 'Application Form', 'Photo', 'Itinerary'],
      flag: '🇯🇵'
    }
  ];

  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: 'Document Preparation',
      description: 'We help prepare all required documents and forms for your visa application.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Expert Consultation',
      description: 'Get personalized advice from our visa experts with years of experience.'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: 'Application Support',
      description: 'Complete support throughout the entire visa application process.'
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: 'Worldwide Coverage',
      description: 'Visa services for over 50 countries worldwide with high success rates.'
    }
  ];

  return (
    <section id="visa" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visa Services & Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplify your travel planning with our comprehensive visa services.
            We handle the paperwork so you can focus on your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Popular Visa Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most requested visa applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaTypes.map((visa) => (
              <div key={visa.id} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-200 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <SvgFlag country={visa.country} size={56} className="rounded-lg shadow-sm" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
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

                  <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      {visa.price}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">
                      Government + Processing Fee
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-blue-50 transition-colors duration-300">
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                        Processing Time
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {visa.processingTime}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-blue-50 transition-colors duration-300">
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
          <div className="flex justify-center mt-8">
            <Link to="/visa-services" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Show More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need Help with Your Visa Application?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our visa experts are here to guide you through the process. Contact us for personalized assistance
            and ensure your application is submitted correctly the first time.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Speak with a Visa Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisaServices; 