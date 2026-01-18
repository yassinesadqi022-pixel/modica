// Base de données des avis clients (Mock Data)
export const reviews = {
  'tshirt-001': [
    { 
      id: 'rev-001',
      name: 'Karim A.', 
      rating: 5,
      verified: true,
      date: '2024-01-15',
      comment: 'Qualité exceptionnelle ! Le tissu est doux et la coupe est parfaite. Je recommande vivement.',
      helpful: 12
    },
    { 
      id: 'rev-002',
      name: 'Yasmine M.', 
      rating: 5,
      verified: true,
      date: '2024-01-10',
      comment: 'J\'adore le style urbain et moderne. Le design est unique et la qualité est au rendez-vous.',
      helpful: 8
    },
    { 
      id: 'rev-003',
      name: 'Omar B.', 
      rating: 4,
      verified: true,
      date: '2024-01-05',
      comment: 'Très bon rapport qualité-prix. Le t-shirt est confortable. Livraison rapide.',
      helpful: 15
    }
  ]
};

export const getReviewsByProductId = (productId) => reviews[productId] || [];
export const getAverageRating = (productId) => {
  const productReviews = reviews[productId] || [];
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / productReviews.length).toFixed(1);
};

export default reviews;