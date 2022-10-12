import React from "react";

const Button = ({ label, onClick, variant }) => {
  return (
    <button className={`btn-${variant} btn my-3 px-5 py-1 rounded`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
