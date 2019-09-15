import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import StarRating from "../StarRating";

import "./styles.css";

// Calculate the tilt based on the cursor position on screen rather than the card

// Apply values to transform property

// Functions that interpolate the values for the flipping animation

export const RatingsCard = ({ image, rating }) => {
  // Hold state for selection and rating
  const [selected, setSelected] = useState(false);
  const { opacity, transform } = useSpring({
    opacity: selected ? 1 : 0,
    transform: `rotateY(${selected ? 180 : 0}deg)`
  });

  const inverseOpacity = o => 1 - o;
  const inverseTransform = t => `${t} rotateY(180deg)`;

  useSpring({
    config: {
      friction: 22,
      tension: 500
    },
    [...]
  });

  // Card tilt

  // Flipping

  return (
    // Card container
    <animated.div className="RatingsCard">
      <animated.div
        className="RatingsCard__front"
        style={{
          backgroundImage: `url(${image})`,
          opacity: opacity.interpolate(inverseOpacity),
          transform
        }}
      />
      <animated.div
        className="RatingsCard__back"
        style={{
          opacity,
          transform: transform.interpolate(inverseTransform)
        }}
      />
    </animated.div>
  );
};

export default RatingsCard;
