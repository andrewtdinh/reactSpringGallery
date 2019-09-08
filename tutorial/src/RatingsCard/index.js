import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import StarRating from "../StarRating";

import "./styles.css";

// Calculate the tilt based on the cursor position on screen rather than the card

// Apply values to transform property

// Functions that interpolate the values for the flipping animation

export const RatingsCard = ({ image, rating }) => {
  // Hold state for selection and rating

  // Card tilt

  // Flipping

  return (
    // Card container
    <div className="RatingsCard">
      <div
        className="RatingsCard__front"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="RatingsCard__back" />
    </div>
  );
};

export default RatingsCard;
