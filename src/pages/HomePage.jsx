import { useEffect, useState } from 'react';
import GlowEffect from '../components/ui/GlowEffect';
import { SITE_NAME, SITE_SLOGAN } from '../config/constants';
import colors from '../config/colors';

export default function HomePage({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden relative">
      <GlowEffect />
      
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white tracking-tight animate-slideUp">
          {SITE_NAME}
        </h1>
        
        <p 
          className="text-2xl md:text-4xl mb-8 font-light animate-slideUp delay-200" 
          style={{ color: colors.orangeRoyal }}
        >
          {SITE_SLOGAN}
        </p>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 animate-slideUp delay-400">
          Bientôt disponible
        </p>
        
        <button 
          onClick={() => onNavigate('product')}
          className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideUp delay-600"
          style={{ 
            background: `linear-gradient(135deg, ${colors.orangeRoyal}, ${colors.orangeLight})`,
            boxShadow: `0 10px 30px rgba(255, 107, 53, 0.3)`
          }}
        >
          Découvrir la collection
        </button>
      </div>
    </div>
  );
}