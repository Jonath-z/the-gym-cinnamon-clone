import React from "react";

const DescriptionCard = ({ children }) => {
  return (
    <p className="text-text-primary font-montHavy-extralight font-extrabold text-base">
      {children}
    </p>
  );
};

export default DescriptionCard;
