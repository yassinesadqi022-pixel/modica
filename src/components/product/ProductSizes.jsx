import colors from '../../config/colors';

export default function ProductSizes({ sizes, selectedSize, onSizeChange, availability = {} }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">
        Taille : <span style={{ color: colors.orangeRoyal }}>{selectedSize}</span>
      </h3>
      
      <div className="flex gap-3 flex-wrap">
        {sizes.map(size => {
          const isAvailable = availability[size] !== false;
          const isSelected = selectedSize === size;
          
          return (
            <button
              key={size}
              onClick={() => isAvailable && onSizeChange(size)}
              disabled={!isAvailable}
              className="px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                borderColor: isSelected ? colors.orangeRoyal : '#333',
                backgroundColor: isSelected ? colors.orangeRoyal : 'transparent',
                color: isSelected ? 'white' : isAvailable ? '#999' : '#555'
              }}
              aria-label={`Taille ${size}`}
            >
              {size}
            </button>
          );
        })}
      </div>

      {/* Guide des tailles */}
      <button 
        className="mt-4 text-sm underline hover:text-orange-500 transition-colors"
        style={{ color: colors.grisLight }}
      >
        Guide des tailles
      </button>
    </div>
  );
}