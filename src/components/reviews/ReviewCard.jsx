import { Star } from 'lucide-react';
import colors from '../../config/colors';

export default function ReviewCard({ review }) {
  const { name, rating, comment, verified, date } = review;

  return (
    <div 
      className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ 
        backgroundColor: colors.grisFonce,
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        {/* Avatar */}
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" 
          style={{ backgroundColor: colors.orangeRoyal }}
        >
          {name.charAt(0)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-semibold truncate">{name}</p>
            {verified && (
              <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                ✓ Vérifié
              </span>
            )}
          </div>
          
          {/* Étoiles */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, j) => (
              <Star 
                key={j} 
                className="w-4 h-4" 
                style={{ 
                  color: j < rating ? colors.orangeRoyal : '#4A4A4A',
                  fill: j < rating ? colors.orangeRoyal : 'none'
                }} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 leading-relaxed mb-3">{comment}</p>
      
      {date && (
        <p className="text-xs text-gray-500">
          {new Date(date).toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      )}
    </div>
  );
}