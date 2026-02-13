import { useState } from 'react';
import { ShoppingCart, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import ReactPixel from 'react-facebook-pixel'; // ← AJOUTER
import Input from '../ui/Input';
import { CURRENCY, MESSAGES } from '../../config/constants';
import { processOrder } from '../../orderService';
import colors from '../../config/colors';

export default function ProductForm({ product, selectedSize, selectedVariant }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    address: '', 
    phone: '' 
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('🔵 Bouton Commander cliqué');
    
    // ✅ PIXEL: Track InitiateCheckout (début de commande)
    ReactPixel.track('InitiateCheckout', {
      content_name: product.name,
      content_category: 'Produit',
      content_ids: [product.id],
      contents: [{
        id: product.id,
        quantity: 1,
        item_price: product.price
      }],
      currency: 'MAD',
      value: product.price
    });
    
    // Validation du formulaire
    if (!validateForm()) {
      alert('❌ Veuillez corriger les erreurs dans le formulaire');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      console.log('📤 Préparation de la commande...');
      
      // Préparer les détails de la commande
      const orderDetails = {
        product: {
          id: product.id,
          name: product.name,
          price: product.price
        },
        selectedVariant: {
          colorName: selectedVariant.colorName
        },
        selectedSize: selectedSize,
        formData: {
          name: formData.name,
          address: formData.address,
          phone: formData.phone
        }
      };

      console.log('📦 Détails de la commande:', orderDetails);

      // Appeler le service de traitement de commande
      console.log('🚀 Appel de processOrder...');
      const result = await processOrder(orderDetails);

      console.log('📨 Résultat de processOrder:', result);

      if (result.success) {
        // ✅ PIXEL: Track Purchase (conversion réussie)
        ReactPixel.track('Purchase', {
          content_name: product.name,
          content_type: 'product',
          content_ids: [product.id],
          contents: [{
            id: product.id,
            quantity: 1,
            item_price: product.price
          }],
          currency: 'MAD',
          value: product.price,
          // Informations additionnelles
          order_id: result.orderCode,
          delivery_category: 'home_delivery'
        });

        // ✅ PIXEL: Track Lead (prospect qualifié)
        ReactPixel.track('Lead', {
          content_name: product.name,
          content_category: 'Commande validée',
          value: product.price,
          currency: 'MAD'
        });
        
        // Succès
        setSubmitStatus('success');
        
        alert(`✅ ${MESSAGES.orderSuccess}

📦 Détails de votre commande:
━━━━━━━━━━━━━━━━━━━━━━━━
🔖 Code: ${result.orderCode}
🎨 Produit: ${product.name}
🌈 Couleur: ${selectedVariant.colorName}
📏 Taille: ${selectedSize}
💰 Prix: ${product.price} ${CURRENCY}

👤 Vos informations:
━━━━━━━━━━━━━━━━━━━━━━━━
📝 Nom: ${formData.name}
📍 Adresse: ${formData.address}
📱 Téléphone: ${formData.phone}

✉️ Un email de confirmation a été envoyé.
📊 Votre commande a été enregistrée.
Nous vous contacterons bientôt !`);
        
        // Réinitialiser le formulaire
        setFormData({ name: '', address: '', phone: '' });
        setErrors({});
        
      } else {
        // Erreur
        setSubmitStatus('error');
        console.error('❌ Erreur lors du traitement:', result);
        
        let errorMessage = result.message || 'Erreur inconnue';
        
        if (result.errors) {
          errorMessage += '\n\nDétails:';
          if (result.errors.email) {
            errorMessage += `\n📧 Email: ${result.errors.email}`;
          }
          if (result.errors.sheet) {
            errorMessage += `\n📊 Google Sheet: ${result.errors.sheet}`;
          }
        }
        
        alert(`❌ Erreur lors de l'enregistrement de la commande\n\n${errorMessage}\n\nVeuillez réessayer ou nous contacter directement.`);
      }
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('❌ Erreur inattendue:', error);
      alert(`❌ ${MESSAGES.orderError}\n\nErreur: ${error.message}\n\nVeuillez vérifier votre connexion internet et réessayer.`);
    } finally {
      setIsSubmitting(false);
      
      // Réinitialiser le statut après 3 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }
  };

  // ✅ BONUS: Tracker quand l'utilisateur commence à remplir le formulaire
  const handleInputChange = (field, value) => {
    // Si c'est la première interaction avec le formulaire
    if (!formData.name && !formData.address && !formData.phone) {
      ReactPixel.track('AddToCart', {
        content_name: product.name,
        content_ids: [product.id],
        content_type: 'product',
        value: product.price,
        currency: 'MAD'
      });
    }
    
    setFormData({...formData, [field]: value});
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
        onChange={(e) => handleInputChange('name', e.target.value)} 
        error={errors.name}
        disabled={isSubmitting}
      />
      
      <Input
        type="text"
        placeholder="Adresse de livraison *"
        value={formData.address}
        onChange={(e) => handleInputChange('address', e.target.value)} 
        error={errors.address}
        disabled={isSubmitting}
      />
      
      <Input
        type="tel"
        placeholder="Téléphone (06XXXXXXXX) *"
        value={formData.phone}
        onChange={(e) => handleInputChange('phone', e.target.value)} 
        error={errors.phone}
        disabled={isSubmitting}
      />
      
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ 
          background: submitStatus === 'success' 
            ? 'linear-gradient(135deg, #10B981, #059669)' 
            : submitStatus === 'error'
              ? 'linear-gradient(135deg, #EF4444, #DC2626)'
              : `linear-gradient(135deg, ${colors.orangeRoyal}, ${colors.orangeLight})`,
          boxShadow: `0 10px 30px rgba(255, 107, 53, 0.4)`
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            Envoi en cours...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <CheckCircle className="w-6 h-6" />
            Commande envoyée !
          </>
        ) : submitStatus === 'error' ? (
          <>
            <AlertCircle className="w-6 h-6" />
            Erreur - Réessayer
          </>
        ) : (
          <>
            <ShoppingCart className="w-6 h-6" />
            Commander - {product.price} {CURRENCY}
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        * Champs obligatoires. Vos données sont sécurisées.
      </p>
    </div>
  );
}