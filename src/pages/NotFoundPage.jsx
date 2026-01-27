import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import colors from '../config/colors';
import { SITE_NAME } from '../config/constants';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 
          className="text-9xl font-bold mb-4"
          style={{ color: colors.orangeRoyal }}
        >
          404
        </h1>
        
        <h2 className="text-4xl font-bold mb-4">
          Page non trouvée
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          style={{ 
            background: `linear-gradient(135deg, ${colors.orangeRoyal}, ${colors.orangeLight})`,
            color: 'white'
          }}
        >
          <Home className="w-6 h-6" />
          Retour à l'accueil
        </button>

        <div className="mt-12">
          <p className="text-gray-500">{SITE_NAME} - Wear The Vibe</p>
        </div>
      </div>
    </div>
  );
}