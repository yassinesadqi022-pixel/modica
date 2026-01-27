import { useNavigate } from 'react-router-dom';
import SocialIcons from '../ui/SocialIcons';
import { SITE_NAME, SITE_SLOGAN } from '../../config/constants';
import colors from '../../config/colors';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-gray-800 pt-12 pb-8 text-center bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">{SITE_NAME}</h2>
        <p className="text-xl mb-8" style={{ color: colors.orangeRoyal }}>
          {SITE_SLOGAN}
        </p>
        
        <SocialIcons />
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4">
            © 2026 {SITE_NAME}. Tous droits réservés.
          </p>
          
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <button 
              onClick={() => navigate('/about')}
              className="hover:text-orange-500 transition-colors"
            >
              À propos
            </button>
            <button className="hover:text-orange-500 transition-colors">
              Conditions d'utilisation
            </button>
            <button className="hover:text-orange-500 transition-colors">
              Politique de confidentialité
            </button>
            <button className="hover:text-orange-500 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}