import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCarousel from '../components/product/ProductCarousel';
import ProductInfo from '../components/product/ProductInfo';
import ProductVariants from '../components/product/ProductVariants';
import ProductSizes from '../components/product/ProductSizes';
import ProductForm from '../components/product/ProductForm';
import ReviewsSection from '../components/reviews/ReviewsSection';
import { getProductById } from '../data/products';
import { getReviewsByProductId } from '../data/reviews';
import colors from '../config/colors';

export default function ProductPage({ onNavigate, productId }) {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  
  // Utiliser l'ID du produit passé en prop, sinon utiliser 'tshirt-001' par défaut
  const product = getProductById(productId || 'tshirt-001');
  const reviews = getReviewsByProductId(productId || 'tshirt-001');

  useEffect(() => {
    // Réinitialiser la variante et la taille quand le produit change
    setCurrentVariant(0);
    setSelectedSize('M');
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Produit non trouvé</h2>
        <button
          onClick={() => onNavigate('home')}
          className="px-6 py-3 rounded-full transition-all duration-300"
          style={{ backgroundColor: colors.orangeRoyal }}
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={onNavigate} />
      
      <main className="container mx-auto px-6 py-12">
        {/* Bouton retour */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 mb-8 text-gray-400 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour aux produits
        </button>

        {/* Section Produit */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Gauche: Images */}
          <ProductCarousel 
            images={product.variants[currentVariant].images}
          />
          
          {/* Droite: Infos + Formulaire */}
          <div className="space-y-8">
            <ProductInfo 
              name={product.name}
              description={product.description}
              price={product.price}
              oldPrice={product.oldPrice}
            />
            
            <ProductVariants 
              variants={product.variants}
              currentVariant={currentVariant}
              onVariantChange={setCurrentVariant}
            />
            
            <ProductSizes 
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
              availability={product.sizesAvailability}
            />
            
            <ProductForm 
              product={product}
              selectedSize={selectedSize}
              selectedVariant={product.variants[currentVariant]}
            />
          </div>
        </div>
        
        {/* Section Avis */}
        <ReviewsSection reviews={reviews} />
      </main>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}