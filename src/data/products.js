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

  'جلابة سبور': {
    id: 'جلابة سبور',
    name: 'جلابة سبور',
    description: 'جلابة سبور   بحلة جديدة للمحتجبات والغير المحتجبات للخروج والمناسبات متوفرة بعدة ألوان زاهية نوع التوب مونطوني تركيا',
    oldPrice: 300,
    price: 230,
    discount: 23,
    inStock: true,
    variants: [
      {
        id: 'var-006',
        color: '#fd86e2',
        colorName: 'Rose',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1730566736_3.png',
         
        ]
      },
      {
        id: 'var-007',
        color: '#718096',
        colorName: 'Gris',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1730566736_1.png',
         
        ]
      },
      {
        id: 'var-007',
        color: '#b80223',
        colorName: 'Grona',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1734780571_IMG_20241221_122905_457.jpg',
         
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
  'Abaya': {
    id: 'Abaya',
    name: 'Abaya',
    description: 'طقم للصلاة من قطعتين عباية مع فولار مخيط معاها متوفرة بعدة ألوان زاهية توب : كريب روزا 150 في الكراماج',
    oldPrice: 300,
    price: 229,
    discount: 23,
    inStock: true,
    variants: [
      {
        id: 'var-006',
        color: '#fffdf1',
        colorName: 'Blanc cassé',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1767966780_1000535222.jpg',
         
        ]
      },
      {
        id: 'var-007',
        color: '#0000',
        colorName: 'Black',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1767966905_1000535295.jpg',
         
        ]
      },
      {
        id: 'var-007',
        color: '#b80223',
        colorName: 'Grona',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1767966905_1000535241.jpg',
         
        ]
      }
      ,
      {
        id: 'var-007',
        color: '#4236f3',
        colorName: 'Bleu',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1767966904_1000535244.jpg',
         
        ]
      }
      ,
      {
        id: 'var-007',
        color: '#e08319',
        colorName: 'Marron',
        images: [
          'https://cdn.media-affs.online/chic/product_photos/1767966905_1000535296.jpg',
         
        ]
      }
    ],
    sizes: ['L', 'XL', '2XL', '3XL', 'M'],
    sizesAvailability: {
      'L': true,
      'XL': true,
      '2XL': true,
      '3XL': true,
      'M': true
    }
  },

  
};

// Fonctions utilitaires
export const getProductById = (id) => products[id] || null;
export const getAllProducts = () => Object.values(products);
export const getInStockProducts = () => Object.values(products).filter(p => p.inStock);

export default products;