import { Check } from 'lucide-react';
import colors from '../../config/colors';

export default function ProductVariants({ variants, currentVariant, onVariantChange }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">
        Couleur : <span style={{ color: colors.orangeRoyal }}>{variants[currentVariant].colorName}</span>
      </h3>
      
      <div className="flex gap-3 flex-wrap">
        {variants.map((variant, i) => (
          <button
            key={variant.id}
            onClick={() => onVariantChange(i)}
            className="relative w-14 h-14 rounded-full border-2 transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: variant.color,
              borderColor: i === currentVariant ? colors.orangeRoyal : 'transparent',
              boxShadow: i === currentVariant ? `0 0 20px ${colors.orangeRoyal}` : 'none'
            }}
            aria-label={`Sélectionner ${variant.colorName}`}
          >
            {i === currentVariant && (
              <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white drop-shadow-lg" />
            )}
          </button>
        ))}
      </div>

      {/* Nom des couleurs en dessous */}
      <div className="flex gap-3 mt-2 flex-wrap">
        {variants.map((variant, i) => (
          <span
            key={variant.id}
            className="text-xs text-gray-400 w-14 text-center"
            style={{ 
              color: i === currentVariant ? colors.orangeRoyal : undefined,
              fontWeight: i === currentVariant ? 'bold' : 'normal'
            }}
          >
            {variant.colorName.split(' ')[0]}
          </span>
        ))}
      </div>
    </div>
  );
}