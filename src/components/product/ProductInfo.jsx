import { CURRENCY } from '../../config/constants';
import colors from '../../config/colors';

export default function ProductInfo({ name, description, price, oldPrice }) {
  const discount = Math.round(((oldPrice - price) / oldPrice) * 100);

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        {name}
      </h1>
      
      {description && (
        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          {description}
        </p>
      )}
      
      {/* Prix */}
      <div className="flex items-center gap-4 mb-2">
        <span 
          className="text-4xl font-bold" 
          style={{ color: colors.orangeRoyal }}
        >
          {price} {CURRENCY}
        </span>
        <span className="text-2xl text-gray-500 line-through">
          {oldPrice} {CURRENCY}
        </span>
      </div>

      {/* Badge promo */}
      <div className="inline-block">
        <span 
          className="px-3 py-1 rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: colors.orangeRoyal }}
        >
          -{discount}% de réduction
        </span>
      </div>
    </div>
  );
}