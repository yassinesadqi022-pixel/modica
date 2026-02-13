import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import ReactPixel from 'react-facebook-pixel';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    ReactPixel.init('1665437894426265');
    ReactPixel.pageView();
  }, []);
  return (
    <div className="app">
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<HomePage />} />
        
        {/* Page À propos */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/qui-sommes-nous" element={<AboutPage />} />
        
        {/* Page produit avec ID dynamique */}
        <Route path="/products/:productId" element={<ProductPage />} />
        
        {/* Redirection ancienne route */}
        <Route path="/product/:productId" element={<Navigate to="/products/:productId" replace />} />
        
        {/* Page 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;