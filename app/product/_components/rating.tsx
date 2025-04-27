import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingProps {
  rating: {
    rate: number;
    count: number;
  };
}

export function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {Array.from({ length: 5 }, (_, i) => {
        const starNumber = i + 1;
        if (rating.rate >= starNumber) {
          return <FaStar key={i} className="text-black" />;
        } else if (rating.rate >= starNumber - 0.5) {
          return <FaStarHalfAlt key={i} className="text-black" />;
        } else {
          return <FaRegStar key={i} className="text-black" />;
        }
      })}
      ({rating.count})
    </div>
  );
}
