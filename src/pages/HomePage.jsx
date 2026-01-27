import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import GlowEffect from '../components/ui/GlowEffect';
import ProductCard from '../components/product/ProductCard';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { SITE_NAME, SITE_SLOGAN } from '../config/constants';
import { getAllProducts } from '../data/products';
import colors from '../config/colors';

export default function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    setProducts(getAllProducts());
  }, []);

  const handleViewDetails = (productId) => {
    // Navigation vers /products/tshirt-001
    navigate(`/products/${productId}`);
  };

  const handleAddToCart = (product) => {
    alert(`✅ "${product.name}" ajouté au panier !\n\n🛍️ Continuez vos achats ou consultez les détails du produit.`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
        <GlowEffect />
        
        <div className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white tracking-tight animate-slideUp">
            {SITE_NAME} 
          </h1>
          
          <p 
            className="text-2xl md:text-4xl mb-8 font-light animate-slideUp delay-200" 
            style={{ color: colors.orangeRoyal }}
          >
            {SITE_SLOGAN}
          </p>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 animate-slideUp delay-400">
            Collection Premium 2026
          </p>
          
          <button 
            onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideUp delay-600"
            style={{ 
              background: `linear-gradient(135deg, ${colors.orangeRoyal}, ${colors.orangeLight})`,
              boxShadow: `0 10px 30px rgba(255, 107, 53, 0.3)`
            }}
          >
            <ShoppingBag className="w-6 h-6" />
            Découvrir la collection
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="container mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Nos Produits
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez notre collection exclusive de vêtements urbains, 
            conçus pour ceux qui osent se démarquer.
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard 
                  product={product}
                  onViewDetails={handleViewDetails}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">Aucun produit disponible pour le moment</p>
          </div>
        )}

        {/* CTA Section */}
        <div 
          className="mt-20 p-12 rounded-3xl text-center"
          style={{ 
            background: `linear-gradient(135deg, ${colors.grisFonce}, ${colors.noir})`,
            border: `2px solid ${colors.orangeRoyal}`
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la communauté MODICA
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Soyez les premiers informés des nouvelles collections, 
            des promotions exclusives et des événements spéciaux.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            style={{ 
              background: `linear-gradient(135deg, ${colors.orangeRoyal}, ${colors.orangeLight})`,
              color: 'white'
            }}
          >
            S'inscrire à la newsletter
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}