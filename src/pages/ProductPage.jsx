import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
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

export default function ProductPage() {
  const { productId } = useParams(); // Récupérer l'ID depuis l'URL
  const navigate = useNavigate();
  
  const [currentVariant, setCurrentVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  
  const product = getProductById(productId);
  const reviews = getReviewsByProductId(productId);

  // Mettre à jour le titre de la page
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - MODICA`;
    }
  }, [product]);

  useEffect(() => {
    // Réinitialiser la variante et la taille quand le produit change
    setCurrentVariant(0);
    setSelectedSize('M');
  }, [productId]);

  // Fonction pour copier le lien
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert(`✅ Lien copié !\n\n${url}\n\nPartagez ce lien avec vos amis !`);
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">😢 Produit non trouvé</h2>
        <p className="text-gray-400 mb-8">Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
        <button
          onClick={() => navigate('/')}
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
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Navigation & Partage */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux produits
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{ borderColor: colors.orangeRoyal, color: colors.orangeRoyal }}
          >
            <Share2 className="w-5 h-5" />
            Partager
          </button>
        </div>

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <span 
            className="hover:text-orange-500 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Accueil
          </span>
          <span className="mx-2">/</span>
          <span 
            className="hover:text-orange-500 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Produits
          </span>
          <span className="mx-2">/</span>
          <span style={{ color: colors.orangeRoyal }}>{product.name}</span>
        </nav>

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
      
      <Footer />
    </div>
  );
}