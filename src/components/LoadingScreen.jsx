import { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(onLoadingComplete, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center z-50 overflow-hidden">

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: `${60 + Math.random() * 40}px`,
              height: `${30 + Math.random() * 20}px`,
              left: `${Math.random() * 120 - 20}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-2 tracking-wider">
            Royal Trip
          </h1>
        </div>

        <div className="relative h-32 mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Plane
                className="h-16 w-16 text-yellow-600 transform rotate-45 transition-all duration-1000"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))',
                  animation: 'fly 3s ease-in-out infinite'
                }}
              />

              <div className="absolute top-1/2 right-full w-32 h-px bg-gradient-to-r from-transparent to-blue-300 opacity-60 transform -translate-y-1/2"
                style={{ animation: 'trail 3s ease-in-out infinite' }} />
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-500 rounded-full"
              style={{
                animation: `bounce 1.4s ease-in-out infinite both`,
                animationDelay: `${i * 0.16}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes drift {
          from { transform: translateX(-100px); }
          to { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes fly {
          0%, 100% { 
            transform: rotate(45deg) translateY(0px) scale(1);
          }
          50% { 
            transform: rotate(45deg) translateY(-8px) scale(1.05);
          }
        }
        
        @keyframes trail {
          0%, 100% { 
            opacity: 0.3;
            width: 2rem;
          }
          50% { 
            opacity: 0.6;
            width: 4rem;
          }
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;