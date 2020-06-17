import React from "react";

const Button3 = ({ name, clickButton, type = "button" }) => {
  const onClick = () => clickButton(name);

  return (
    <button onClick={onClick} type={type}>
      {name}
    </button>
  );
};

export default Button3;
