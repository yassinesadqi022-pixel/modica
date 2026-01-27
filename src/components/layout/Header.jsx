import { useNavigate, useLocation } from 'react-router-dom';
import { SITE_NAME } from '../../config/constants';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')} 
          className="text-2xl font-bold tracking-tight hover:text-orange-500 transition-colors"
        >
          {SITE_NAME}
        </button>
        
        <nav className="hidden md:flex gap-8">
          <button 
            onClick={() => navigate('/')} 
            className={`transition-colors ${isActive('/') ? 'text-orange-500' : 'hover:text-orange-500'}`}
          >
            Accueil
          </button>
          <button 
            onClick={() => navigate('/about')} 
            className={`transition-colors ${isActive('/about') ? 'text-orange-500' : 'hover:text-orange-500'}`}
          >
            Qui sommes-nous
          </button>
        </nav>

        {/* Menu mobile */}
        <button 
          className="md:hidden text-orange-500"
          onClick={() => navigate('/')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}