import React from "react";

const Button = ({ text, changeValueSpan = () => {}, type = "button" }) => {
  return (
    <>
      <button onClick={changeValueSpan} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;
