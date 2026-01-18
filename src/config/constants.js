// Constantes globales de l'application
export const SITE_NAME = 'MODICA';
export const SITE_SLOGAN = 'Wear The Vibe';
export const CURRENCY = 'DH';

// Expressions régulières pour validation
export const PHONE_REGEX = /^(06|07)[0-9]{8}$/; // Format marocain
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;

// Configuration des réseaux sociaux
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/modica',
  facebook: 'https://facebook.com/modica',
  twitter: 'https://twitter.com/modica',
  tiktok: 'https://tiktok.com/@modica'
};

// Messages de notification
export const MESSAGES = {
  orderSuccess: '✅ Commande confirmée ! Nous vous contacterons bientôt.',
  orderError: '❌ Erreur lors de la commande. Veuillez réessayer.',
  invalidPhone: 'Numéro de téléphone invalide (format: 06XXXXXXXX)',
  invalidEmail: 'Adresse email invalide',
  invalidName: 'Nom invalide (minimum 3 caractères)',
  requiredField: 'Ce champ est obligatoire',
  comingSoon: 'Bientôt disponible...'
};

export default {
  SITE_NAME,
  SITE_SLOGAN,
  CURRENCY,
  PHONE_REGEX,
  EMAIL_REGEX,
  SOCIAL_LINKS,
  MESSAGES
};