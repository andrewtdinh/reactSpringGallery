import React from "react";
import { useTrail, animated } from "react-spring";
import Star from "../Star";

export const StarRating = ({ rating, setRating }) => {
  // Make <Star /> component aware of animations
  const AnimatedStar = animated(Star);
  const animatedStars = useTrail(5, {
    config: {
      friction: 22,
      tension: 500
    },
    from: { opacity: 0, transform: "scale(0.8)" },
    opacity: 1,
    transform: "scale(1)"
  });

  // Set stars to animate one after another

  return <div className="StarRating">{/* Display a set of stars */}</div>;
};

export default StarRating;
