import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-button-blue text-white font-montHavy-extralight text-base font-extrabold px-7 py-3 w-fit">
      {title}
    </button>
  );
};

export default Button;
