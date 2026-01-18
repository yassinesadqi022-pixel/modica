import { SITE_NAME } from '../../config/constants';

export default function Header({ onNavigate }) {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')} 
         className="text-2xl font-bold tracking-tight text-orange-500 hover:text-white transition-colors"
        >
          {SITE_NAME}
        </button>
        
        <nav className="hidden md:flex gap-8">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-orange-500 transition-colors"
          >
            Accueil
          </button>
          <button 
            onClick={() => onNavigate('about')} 
            className="hover:text-orange-500 transition-colors"
          >
            Qui sommes-nous
          </button>
        </nav>

        {/* Menu mobile */}
        <button 
          className="md:hidden text-orange-500"
          onClick={() => onNavigate('home')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}