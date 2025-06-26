import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Globe, Phone, Plane } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SvgFlag = ({ country, size = 48 }) => {
  switch (country) {
    case 'United States':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24" className="rounded-lg shadow-lg border-2 border-white"><rect width="36" height="24" fill="#b22234" /><g fill="#fff"><rect y="2" width="36" height="2" /><rect y="6" width="36" height="2" /><rect y="10" width="36" height="2" /><rect y="14" width="36" height="2" /><rect y="18" width="36" height="2" /></g><rect width="10" height="7" fill="#3c3b6e" /><g fill="#fff"><circle cx="1.5" cy="1.5" r="0.5" /><circle cx="3.5" cy="1.5" r="0.5" /><circle cx="5.5" cy="1.5" r="0.5" /><circle cx="7.5" cy="1.5" r="0.5" /><circle cx="9" cy="2.5" r="0.5" /><circle cx="2.5" cy="2.5" r="0.5" /><circle cx="4.5" cy="2.5" r="0.5" /><circle cx="6.5" cy="2.5" r="0.5" /></g></svg>
      );
    case 'United Kingdom':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24" className="rounded-lg shadow-lg border-2 border-white"><rect width="36" height="24" fill="#00247d" /><path d="M0 0l36 24M36 0L0 24" stroke="#fff" strokeWidth="4" /><path d="M0 0l36 24M36 0L0 24" stroke="#cf142b" strokeWidth="2" /><rect x="15" width="6" height="24" fill="#fff" /><rect y="9" width="36" height="6" fill="#fff" /><rect x="16" width="4" height="24" fill="#cf142b" /><rect y="10" width="36" height="4" fill="#cf142b" /></svg>
      );
    case 'Japan':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24" className="rounded-lg shadow-lg border-2 border-white"><rect width="36" height="24" fill="#fff" /><circle cx="18" cy="12" r="6" fill="#bc002d" /></svg>
      );
    case 'India':
      return (
        <svg width={size} height={size * 2 / 3} viewBox="0 0 36 24" className="rounded-lg shadow-lg border-2 border-white"><rect width="36" height="24" fill="#ff9933" /><rect y="8" width="36" height="8" fill="#fff" /><rect y="16" width="36" height="8" fill="#138808" /><circle cx="18" cy="12" r="3" fill="#008" /></svg>
      );
    default:
      return <span className="text-4xl">🏳️</span>;
  }
};

const VisaDetailPage = () => {
  const { id } = useParams();

  const visa = {
    id: parseInt(id || '1'),
    country: 'United States',
    destination: 'New York',
    type: 'Tourist Visa (B1/B2)',
    processingTime: '3-5 weeks',
    validity: '10 years',
    price: '$185',
    flag: '🇺🇸',
    overview: 'This visa allows you to visit the United States for tourism, business meetings, medical treatment, or visiting friends and family. It\'s one of the most common visa types for temporary visitors.'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/visa-services"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Visa Services
        </Link>

        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 md:p-12 text-white mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex items-start gap-8">
                <div className="relative">
                  <div className="bg-white p-3 rounded-2xl shadow-2xl">
                    <SvgFlag country={visa.country} size={80} />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold shadow-lg">
                    ✓
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl md:text-5xl font-black">{visa.country}</h1>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      Available
                    </div>
                  </div>
                  <p className="text-blue-100 text-xl md:text-2xl font-semibold mb-3">{visa.type}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 min-w-[250px]">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{visa.price}</div>
                  <div className="text-blue-200 font-medium">Processing Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-200">
            <Clock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Processing Time</h3>
            <p className="text-gray-600 font-semibold">{visa.processingTime}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-200">
            <Globe className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Validity Period</h3>
            <p className="text-gray-600 font-semibold">{visa.validity}</p>
          </div>
           <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-200">
            <Plane className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">destination</h3>
            <p className="text-gray-600 font-semibold">{visa.destination}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{visa.overview}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-3">Need Expert Help?</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Our visa specialists are ready to guide you through the entire process.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Expert Now
                </button>
              </div>
            </div>

          <div className="space-y-6">
            {/* <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center shadow-sm">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Money-Back Guarantee</h4>
              <p className="text-green-700 text-sm">If your application is rejected due to our error, we'll refund your service fee.</p>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VisaDetailPage;