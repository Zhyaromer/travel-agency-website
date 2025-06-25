import { useEffect, useState } from 'react';
import { Plane, Globe, MapPin } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Discovering amazing destinations...",
    "Preparing your travel experience...",
    "Loading premium tours...",
    "Almost ready for takeoff..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="relative mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="relative">
              <Plane className="h-16 w-16 text-yellow-400 animate-bounce" />
              <div className="absolute -top-2 -right-2">
                <Globe className="h-6 w-6 text-white animate-spin" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">Wanderlust</h1>
          <p className="text-blue-200 text-lg">Premium Travel Agency</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          
          <div className="w-80 bg-blue-700 rounded-full h-2 mb-4 mx-auto">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-blue-200 text-sm mb-2">{progress}% Complete</p>
        </div>

        <div className="h-6">
          <p className="text-white text-lg animate-pulse">
            {loadingTexts[currentText]}
          </p>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <MapPin
              key={i}
              className="absolute text-blue-300 opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 