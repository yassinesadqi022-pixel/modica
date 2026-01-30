// Base de données des produits (Mock Data)
export const products = {
  'Srwal_over': {
    id: 'Srwal_over',
    name: 'Srwal over',
    description: 'مونطوني بجودة عالية ✨ مناسب للكاجوال و الستريت ستايل✨ سروال أوفر توب مونطوني ✨ ستايل واسع، راحة وأناقة فـ نفس الوقت ? ثوب',
    oldPrice: 199,
    price: 159,
    discount: 20,
    inStock: true,
    variants: [
      {
        id: 'var-002',
        color: '#8E0000',
        colorName: 'Grona',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1757760852_IMG_20250830_000504_838.jpg',
          'https://cdn.media-affs.online/chic/product_photos/1757760852_IMG_20250830_000505_311.jpg',
          'https://cdn.media-affs.online/chic/product_photos/1757760852_1%20(1).png'
        ]
      },
      {
        id: 'var-001',
        color: '#adadad',
        colorName: 'GRIS',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1757760852_3%20(1).png',
        ]
      },
      {
        id: 'var-003',
        color: '#ffffff',
        colorName: 'Blanc ',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1757760852_7%20(1).png',
          
        ]
      }
      ,
      {
        id: 'var-004',
        color: '#144F1C',
        colorName: 'Vert foncé ',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1757760852_6%20(1).png',
          
        ]
      }
      ,
      {
        id: 'var-005',
        color: '#FFFF00',
        colorName: 'Jaune',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1757760852_2%20(1).png',
          
        ]
      }
      ,
      {
        id: 'var-006',
        color: '#4AE1FF',
        colorName: 'Bleu ciel',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1757760852_5%20(1).png',
          
        ]
      }
      ,
      {
        id: 'var-007',
        color: '#0000',
        colorName: 'Noir',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1757760852_4%20(1).png',
          
        ]
      }
    ],
    sizes: ['L', 'XL', '2XL', '3XL', 'M','4XL'],
    sizesAvailability: {
      'L': true,
      'XL': true,
      '2XL': true,
      '3XL': true,
      'M': true,
      '4XL': true,
    }
  },

  'Survet snsla': {
    id: 'Survet snsla',
    name: 'Survet snsla',
    description: 'سورفيت مونطوني تركيا',
    oldPrice: 299,
    price: 249.00 ,
    discount: 1,
    inStock: true,
    variants: [
      {
        id: 'var-004',
        color: '#5B86FF',
        colorName: 'Blue',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1759094887_IMG-20250928-WA0117.jpg',
        ]
      },
       {
        id: 'var-005',
        color: '#8E0000',
        colorName: 'Grona',
        images: [
'https://cdn.media-affs.online/chic/product_photos/1759094887_IMG-20250928-WA0100.jpg'
        ]
      },
      {
        id: 'var-005',
        color: '#0000',
        colorName: 'Noir  ',
        images: [
'https://cdn.media-affs.online/chic/product_photos/1759162701_IMG_20250929_171741_249.jpg'
        ]
      },
      {
        id: 'var-005',
        color: '#ADADAD',
        colorName: 'Gris',
        images: [
'https://cdn.media-affs.online/chic/product_photos/1759094887_IMG-20250928-WA0111.jpg'
        ]
      },
      {
        id: 'var-005',
        color: '#8f4526',
        colorName: 'Marron',
        images: [
'https://cdn.media-affs.online/chic/product_photos/1759094887_IMG-20250928-WA0103.jpg'
        ]
      }
    ],
    sizes: ['L', 'M', 'XL', '2XL','3XL'],
    sizesAvailability: {
      '2xl': true,
      'M': true,
      'L': true,
      'XL': true,
      '3XL': true
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