// Base de données des produits (Mock Data)
export const products = {
  'tshirt-001': {
    id: 'tshirt-001',
    name: 'T-Shirt Signature MODICA',
    description: 'T-shirt premium en coton biologique, design urbain exclusif. Coupe moderne et confortable pour un style unique.',
    oldPrice: 599,
    price: 399,
    discount: 33,
    inStock: true,
    variants: [
      {
        id: 'var-001',
        color: '#FF6B35',
        colorName: 'Orange Royal',
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800'
        ]
      },
      {
        id: 'var-002',
        color: '#1A1A1A',
        colorName: 'Noir Profond',
        images: [
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800',
          'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
          'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800'
        ]
      },
      {
        id: 'var-003',
        color: '#F5F5F5',
        colorName: 'Blanc Cassé',
        images: [
          'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800',
          'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800',
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800'
        ]
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizesAvailability: {
      'S': true,
      'M': true,
      'L': true,
      'XL': true,
      'XXL': false
    }
  }
};

// Fonctions utilitaires
export const getProductById = (id) => products[id] || null;
export const getAllProducts = () => Object.values(products);

export default products;