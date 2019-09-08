import React from "react";
import { useTrail, animated } from "react-spring";
import Star from "../Star";

export const StarRating = ({ rating, setRating }) => {
  // Make <Star /> component aware of animations
  const AnimatedStar = animated(Star);

  // Set stars to animate one after another

  return <div className="StarRating">{/* Display a set of stars */}</div>;
};

export default StarRating;
