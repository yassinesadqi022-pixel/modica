import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Input from '../ui/Input';
import { CURRENCY, MESSAGES } from '../../config/constants';
import colors from '../../config/colors';

export default function ProductForm({ product, selectedSize, selectedVariant }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    address: '', 
    phone: '' 
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim() || formData.name.length < 3) {
      newErrors.name = MESSAGES.invalidName;
    }
    
    if (!formData.address.trim() || formData.address.length < 10) {
      newErrors.address = 'Adresse invalide (minimum 10 caractères)';
    }
    
    if (!formData.phone.match(/^(06|07)[0-9]{8}$/)) {
      newErrors.phone = MESSAGES.invalidPhone;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      alert(`${MESSAGES.orderSuccess}

📦 Détails de la commande:
━━━━━━━━━━━━━━━━━━━━━━━━
🎨 Produit: ${product.name}
🌈 Couleur: ${selectedVariant.colorName}
📏 Taille: ${selectedSize}
💰 Prix: ${product.price} ${CURRENCY}

👤 Vos informations:
━━━━━━━━━━━━━━━━━━━━━━━━
📝 Nom: ${formData.name}
📍 Adresse: ${formData.address}
📱 Téléphone: ${formData.phone}

Nous vous contacterons bientôt pour confirmer votre commande !`);
      
      setFormData({ name: '', address: '', phone: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div 
      className="space-y-4 p-6 rounded-2xl" 
      style={{ backgroundColor: colors.grisFonce }}
    >
      <h3 className="text-2xl font-bold mb-6">Commander maintenant</h3>
      
      <Input
        type="text"
        placeholder="Nom complet *"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        error={errors.name}
      />
      
      <Input
        type="text"
        placeholder="Adresse de livraison *"
        value={formData.address}
        onChange={(e) => setFormData({...formData, address: e.target.value})}
        error={errors.address}
      />
      
      <Input
        type="tel"
        placeholder="Téléphone (06XXXXXXXX) *"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        error={errors.phone}
      />
      
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ 
          background: `linear-gradient(135deg, ${colors.orangeRoyal}, ${colors.orangeLight})`,
          boxShadow: `0 10px 30px rgba(255, 107, 53, 0.4)`
        }}
      >
        <ShoppingCart className="w-6 h-6" />
        {isSubmitting ? 'Envoi en cours...' : `Commander - ${product.price} ${CURRENCY}`}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        * Champs obligatoires. Vos données sont sécurisées.
      </p>
    </div>
  );
}