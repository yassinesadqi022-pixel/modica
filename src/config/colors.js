// Configuration des couleurs MODICA
export const colors = {
  orangeRoyal: '#FF6B35',
  orangeLight: '#FF8C61',
  orangeDark: '#E85A2A',
  noir: '#1A1A1A',
  blanc: '#F5F5F5',
  grisFonce: '#2A2A2A',
  grisLight: '#4A4A4A',
};

// Fonction helper pour obtenir une couleur
export const getColor = (colorName) => {
  return colors[colorName] || colors.noir;
};

// Fonction pour générer un dégradé
export const generateGradient = (color1, color2, direction = '135deg') => {
  return `linear-gradient(${direction}, ${color1}, ${color2})`;
};

export default colors;