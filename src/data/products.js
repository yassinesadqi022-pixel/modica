// Base de données des produits (Mock Data)
export const products = {
  'Srwal over': {
    id: 1,
    name: 'Srwal over',
    description: 'مونطوني بجودة عالية ✨ مناسب للكاجوال و الستريت ستايل✨ سروال أوفر توب مونطوني ✨ ستايل واسع، راحة وأناقة فـ نفس الوقت ? ثوب',
    oldPrice: 199,
    price: 159,
    discount: 20,
    inStock: true,
    variants: [
      {
        id: 'var-001',
        color: '#adadad',
        colorName: 'GRIS',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1757760852_IMG_20250830_000504_838.jpg',
          'https://cdn.media-affs.online/chic/product_photos/1757760852_IMG_20250830_000504_838.jpg',
          'https://cdn.media-affs.online/chic/product_photos/1757760852_IMG_20250830_000504_838.jpg'
        ]
      },
      {
        id: 'var-002',
        color: '#FFFF00',
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
  },

  'tshirt-002': {
    id: 'tshirt-002',
    name: 'T-Shirt Urban Style',
    description: 'T-shirt streetwear avec design avant-gardiste. Pour ceux qui osent se démarquer.',
    oldPrice: 499,
    price: 349,
    discount: 30,
    inStock: true,
    variants: [
      {
        id: 'var-004',
        color: '#1A1A1A',
        colorName: 'Noir',
        images: [
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800',
          'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800'
        ]
      },
      {
        id: 'var-005',
        color: '#FF6B35',
        colorName: 'Orange',
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800'
        ]
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    sizesAvailability: {
      'S': true,
      'M': true,
      'L': true,
      'XL': true
    }
  },

  'tshirt-003': {
    id: 'tshirt-003',
    name: 'T-Shirt Minimal Edition',
    description: 'Design minimaliste et élégant. La simplicité au service du style.',
    oldPrice: 449,
    price: 299,
    discount: 33,
    inStock: true,
    variants: [
      {
        id: 'var-006',
        color: '#F5F5F5',
        colorName: 'Blanc',
        images: [
          'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800',
          'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800'
        ]
      },
      {
        id: 'var-007',
        color: '#718096',
        colorName: 'Gris',
        images: [
          'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
          'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800'
        ]
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizesAvailability: {
      'S': true,
      'M': true,
      'L': true,
      'XL': false,
      'XXL': false
    }
  },

  'hoodie-001': {
    id: 'hoodie-001',
    name: 'Hoodie Premium MODICA',
    description: 'Sweat à capuche premium, doux et confortable. Parfait pour toutes les saisons.',
    oldPrice: 899,
    price: 699,
    discount: 22,
    inStock: false,
    variants: [
      {
        id: 'var-008',
        color: '#1A1A1A',
        colorName: 'Noir',
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
          'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800'
        ]
      },
      {
        id: 'var-009',
        color: '#FF6B35',
        colorName: 'Orange',
        images: [
          'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800'
        ]
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizesAvailability: {
      'S': false,
      'M': false,
      'L': false,
      'XL': false,
      'XXL': false
    }
  }
};

// Fonctions utilitaires
export const getProductById = (id) => products[id] || null;
export const getAllProducts = () => Object.values(products);
export const getInStockProducts = () => Object.values(products).filter(p => p.inStock);

export default products;