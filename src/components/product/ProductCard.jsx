import { Eye } from 'lucide-react';
import colors from '../../config/colors';
import { CURRENCY } from '../../config/constants';

export default function ProductCard({ product, onViewDetails }) {
  const firstVariant = product.variants[0];
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  // Fonction pour gérer le clic sur la carte
  const handleCardClick = () => {
    onViewDetails(product.id);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
    >
      {/* Badge promo */}
      {discount > 0 && (
        <div 
          className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: colors.orangeRoyal }}
        >
          -{discount}%
        </div>
      )}

      {/* Badge stock */}
      {!product.inStock && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-sm font-bold bg-gray-700 text-white">
          Rupture de stock
        </div>
      )}

      {/* Image produit */}
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={firstVariant.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {/* Bouton Voir détails */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Empêcher la propagation du clic
              onViewDetails(product.id);
            }}
            className="p-3 bg-white rounded-full transition-all duration-300 hover:scale-110"
            style={{ color: colors.noir }}
            aria-label="Voir les détails"
          >
            <Eye className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Infos produit */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 truncate group-hover:text-orange-500 transition-colors">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Couleurs disponibles */}
        <div className="flex gap-2 mb-4">
          {product.variants.slice(0, 4).map((variant, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 border-gray-700"
              style={{ backgroundColor: variant.color }}
              title={variant.colorName}
            />
          ))}
          {product.variants.length > 4 && (
            <div className="w-6 h-6 rounded-full border-2 border-gray-700 bg-gray-800 flex items-center justify-center text-xs">
              +{product.variants.length - 4}
            </div>
          )}
        </div>

        {/* Prix */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span 
              className="text-2xl font-bold" 
              style={{ color: colors.orangeRoyal }}
            >
              {product.price} {CURRENCY}
            </span>
            {product.oldPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {product.oldPrice} {CURRENCY}
              </span>
            )}
          </div>
        </div>

        {/* Bouton Voir détails (toujours visible) */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Empêcher la propagation du clic
            onViewDetails(product.id);
          }}
          className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white flex items-center justify-center gap-2"
          style={{ backgroundColor: colors.orangeRoyal }}
        >
          <Eye className="w-5 h-5" />
          Voir les détails
        </button>
      </div>
    </div>
  );
}