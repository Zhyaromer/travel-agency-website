import { ArrowRight, Globe, Users, Award } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: <Globe className="h-6 w-6" />, value: "50+", label: "Countries" },
    { icon: <Users className="h-6 w-6" />, value: "10K+", label: "Happy Travelers" },
    { icon: <Award className="h-6 w-6" />, value: "15+", label: "Years Experience" }
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Discover the World's Most
              <span className="block text-yellow-400 mt-2">Amazing Destinations</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience unforgettable journeys with our curated international tours, 
              premium hotels, and comprehensive visa services. Your adventure starts here.
            </p>
            
            <div className="mb-16">
              <a 
                href="/tours"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105"
              >
                <Globe className="mr-3 h-6 w-6" />
                Explore International Tours
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-yellow-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 