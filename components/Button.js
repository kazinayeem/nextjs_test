import React from "react";

const Button = ({ title }) => {
  return (
    <div >
      Button
      <button
        className="btn btn-danger"
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
