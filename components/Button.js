import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      Button
      <button
        onClick={() => {
          localStorage.setItem("auth", true);
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
