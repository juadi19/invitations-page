import React from "react";

export const Step = ({ title, image, description }) => {
  return (
    <div className="s-step-container">
      <div className="step-img">
        <img src={image} alt={title} />
      </div>
      <div className="step-title">{title}</div>
      <div className="step-description">{description}</div>
    </div>
  );
};
