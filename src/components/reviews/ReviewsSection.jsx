import ReviewCard from './ReviewCard';
import { getAverageRating } from '../../data/reviews';
import colors from '../../config/colors';

export default function ReviewsSection({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const averageRating = getAverageRating('tshirt-001');

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Ce que disent nos clients
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl font-bold" style={{ color: colors.orangeRoyal }}>
            {averageRating}
          </span>
          <span className="text-gray-400">/ 5</span>
          <span className="text-gray-500">({reviews.length} avis)</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}