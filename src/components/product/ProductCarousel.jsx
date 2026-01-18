import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div 
        className="relative overflow-hidden rounded-2xl group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img 
          src={images[currentImage]} 
          alt="Product"
          className="w-full h-[600px] object-cover transition-transform duration-500 ease-out"
          style={{ transform: isHovering ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {/* Boutons navigation */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: i === currentImage ? '#FF6B35' : 'rgba(255,255,255,0.3)',
                width: i === currentImage ? '24px' : '8px'
              }}
              aria-label={`Aller à l'image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className="rounded-lg overflow-hidden border-2 transition-all duration-300"
            style={{ 
              borderColor: i === currentImage ? '#FF6B35' : 'transparent',
              opacity: i === currentImage ? 1 : 0.6
            }}
          >
            <img 
              src={img} 
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300" 
            />
          </button>
        ))}
      </div>
    </div>
  );
}