import { useNavigate } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import colors from '../config/colors';
import { SITE_NAME } from '../config/constants';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Illustration 404 */}
        <div className="mb-8">
          <Search 
            className="w-32 h-32 mx-auto mb-4 opacity-20" 
            style={{ color: colors.orangeRoyal }}
          />
        </div>

        {/* Titre 404 */}
        <h1 
          className="text-8xl md:text-9xl font-bold mb-4 animate-pulse"
          style={{ color: colors.orangeRoyal }}
        >
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Page Introuvable
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Oups ! La page que vous recherchez n'existe pas ou a été déplacée. 
          Peut-être qu'elle est partie faire du shopping ?
        </p>
        
        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.orangeRoyal}, ${colors.orangeLight})`,
              color: 'white'
            }}
          >
            <Home className="w-6 h-6" />
            Retour à l'accueil
          </button>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{ 
              borderColor: colors.orangeRoyal,
              color: colors.orangeRoyal,
              backgroundColor: 'transparent'
            }}
          >
            Page précédente
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            {SITE_NAME} - Wear The Vibe
          </p>
        </div>
      </div>
    </div>
  );
}