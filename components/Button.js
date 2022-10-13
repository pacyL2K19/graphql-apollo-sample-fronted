import React from "react";

const Button = ({ label, onClick, variant, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`btn-${variant} btn my-3 px-5 py-1 rounded`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
