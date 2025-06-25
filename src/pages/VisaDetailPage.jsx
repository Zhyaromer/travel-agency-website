import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Globe, CheckCircle, FileText, AlertCircle, Phone, Shield } from 'lucide-react';
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
    type: 'Tourist Visa (B1/B2)',
    processingTime: '3-5 weeks',
    validity: '10 years',
    price: '$185',
    flag: '🇺🇸',
    description: 'The B1/B2 visa is a temporary, non-immigrant visa that allows the holder to travel to the United States for either business or tourism purposes.',
    overview: 'This visa allows you to visit the United States for tourism, business meetings, medical treatment, or visiting friends and family. It\'s one of the most common visa types for temporary visitors.',
    documents: [
      'Valid passport with at least 6 months validity beyond intended stay',
      'Completed DS-160 online application form',
      'One passport-style photograph (2x2 inches)',
      'Proof of financial support (bank statements, employment letter)',
      'Travel itinerary and accommodation details',
      'Employment letter or business registration documents',
      'Proof of ties to home country (property, family, job)',
      'Previous travel history (if applicable)'
    ],
    requirements: [
      'Must have a valid passport',
      'Complete DS-160 form online',
      'Schedule and attend visa interview',
      'Pay visa application fee',
      'Provide biometric information',
      'Demonstrate non-immigrant intent'
    ],
    process: [
      {
        step: 1,
        title: 'Complete DS-160 Form',
        description: 'Fill out the online DS-160 application form and print the confirmation page.',
        duration: '30-60 minutes'
      },
      {
        step: 2,
        title: 'Pay Visa Fee',
        description: 'Pay the non-refundable visa application fee of $185.',
        duration: '5 minutes'
      },
      {
        step: 3,
        title: 'Schedule Interview',
        description: 'Schedule your visa interview appointment at the US Embassy or Consulate.',
        duration: '10 minutes'
      },
      {
        step: 4,
        title: 'Prepare Documents',
        description: 'Gather all required documents and prepare for your interview.',
        duration: '1-2 days'
      },
      {
        step: 5,
        title: 'Attend Interview',
        description: 'Attend your scheduled interview at the embassy or consulate.',
        duration: '30-60 minutes'
      },
      {
        step: 6,
        title: 'Receive Decision',
        description: 'Wait for visa processing and receive your passport with visa (if approved).',
        duration: '3-5 business days'
      }
    ],
    tips: [
      'Apply at least 2-3 months before your intended travel date',
      'Be honest and consistent in all your answers',
      'Bring original documents and photocopies',
      'Dress professionally for your interview',
      'Practice common interview questions',
      'Show strong ties to your home country'
    ],
    faqs: [
      {
        question: 'How long can I stay in the US with a B1/B2 visa?',
        answer: 'The visa allows multiple entries for up to 10 years, but each stay is typically limited to 6 months as determined by the immigration officer at entry.'
      },
      {
        question: 'Can I work with a B1/B2 visa?',
        answer: 'No, the B1/B2 visa does not allow you to work in the United States. It is strictly for tourism and business activities.'
      },
      {
        question: 'What if my visa application is denied?',
        answer: 'If denied, you can reapply, but you must address the reasons for denial and provide additional supporting documentation.'
      }
    ]
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
                  <p className="text-blue-200 text-lg leading-relaxed max-w-2xl">{visa.description}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 min-w-[250px]">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{visa.price}</div>
                  <div className="text-blue-200 font-medium">Government + Processing Fee</div>
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
            <FileText className="h-10 w-10 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Documents</h3>
            <p className="text-gray-600 font-semibold">{visa.documents.length} required</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{visa.overview}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visa.documents.map((doc, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Process</h2>
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 to-blue-400"></div>

                <div className="space-y-8">
                  {visa.process.map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0 shadow-lg relative z-10">
                        {step.step}
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{step.duration}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {visa.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="font-bold text-yellow-800 text-lg">Pro Tips for Success</h3>
              </div>
              <ul className="space-y-3">
                {visa.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-600 mr-3 font-bold">•</span>
                    <span className="text-yellow-800 font-medium text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
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

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center shadow-sm">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-green-800 mb-2">Money-Back Guarantee</h4>
              <p className="text-green-700 text-sm">If your application is rejected due to our error, we'll refund your service fee.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VisaDetailPage;