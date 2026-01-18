import { SITE_NAME, SITE_SLOGAN, MESSAGES } from '../config/constants';
import colors from '../config/colors';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-3xl text-center animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Notre Histoire
        </h1>
        
        <div className="space-y-6 text-xl text-gray-400 leading-relaxed mb-8">
          <p>
            <strong style={{ color: colors.orangeRoyal }}>{SITE_NAME}</strong> est née d'une passion 
            pour la mode urbaine et l'authenticité. Nous créons des pièces qui racontent votre histoire 
            et reflètent votre personnalité unique.
          </p>
          
          <p>
            Notre mission est de vous offrir des vêtements de qualité premium, au design moderne et 
            audacieux, pour que vous puissiez exprimer votre style avec confiance.
          </p>
          
          <p>
            Chaque création {SITE_NAME} est pensée pour ceux qui osent se démarquer, qui vivent leur vie 
            à fond et qui ne font jamais de compromis sur leur style.
          </p>
        </div>
        
        <p className="text-lg mb-12" style={{ color: colors.orangeRoyal }}>
          {MESSAGES.comingSoon}
        </p>
        
        <button 
          onClick={() => onNavigate('home')}
          className="inline-block px-6 py-3 text-white border-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          style={{ borderColor: colors.orangeRoyal }}
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}