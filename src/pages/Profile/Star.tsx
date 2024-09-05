/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Star = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState<any>(null);
  return (
    <div className="flex flex-row justify-normal">
      {[...Array(5)].map((_, index: any) => {
        const currentRating = index + 1;
        return (
          <label htmlFor="">
            <input
              type="radio"
              name="rating"
              value={currentRating}
              className="hidden"
              // onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="cursor-pointer"
              size={18}
              color={currentRating <= (hover || rating) ? "#007f00" : "grey"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(currentRating)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Star;
