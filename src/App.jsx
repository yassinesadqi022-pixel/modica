import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProductId, setCurrentProductId] = useState(null);
  
  const navigate = (page, productId = null) => {
    setCurrentPage(page);
    setCurrentProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {currentPage === 'home' && <HomePage onNavigate={navigate} />}
      {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
      {currentPage === 'product' && <ProductPage onNavigate={navigate} productId={currentProductId} />}
    </div>
  );
}

export default App;