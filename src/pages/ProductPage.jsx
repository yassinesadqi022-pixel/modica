import { useState } from 'react';
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

export default function ProductPage({ onNavigate }) {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  
  const product = getProductById('tshirt-001');
  const reviews = getReviewsByProductId('tshirt-001');

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-2xl">Produit non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={onNavigate} />
      
      <main className="container mx-auto px-6 py-12">
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