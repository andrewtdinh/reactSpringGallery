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
  const [currentRating, setRating] = useState(rating);
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
  });

  const [props, set] = useSpring(() => ({state: [0, 0, 1]}));
  const transformCard = (x, y, scale) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`;
  const calculateValues = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.1];

  return (
    // Card container
    <animated.div
      className="RatingsCard"
      onClick={() => setSelected(!selected)}
      style={{
        transform: !selected && props.state.interpolate(transformCard)
      }}
      onMouseLeave={() => set({state: [0, 0, 1]})}
      onMouseMove={({ clientX: x, clientY: y }) => set({state: calculateValues(x, y)})}
    >
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
      >
        {selected && (<StarRating rating={currentRating} setRating={setRating} />)}
      </animated.div>
    </animated.div>
  );
};

export default RatingsCard;
