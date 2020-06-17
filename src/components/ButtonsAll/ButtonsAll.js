import React from "react";
import Button3 from "../Button3/Button3";

const ButtonsAll = ({ nameButtons, clickButton }) => {
  // console.log("RENDER --- Buttons");
  return (
    <>
      {nameButtons.map((nameBtn) => (
        <Button3 key={nameBtn} name={nameBtn} clickButton={clickButton} />
      ))}
    </>

    // <>
    //   {nameButtons.map((nameBtn) => (
    //     <button
    //       key={nameBtn}
    //       onClick={() => clickButton(nameBtn)}
    //       name={nameBtn}
    //       type="button"
    //     >
    //       {nameBtn}
    //     </button>
    //   ))}
    // </>
  );
};

export default ButtonsAll;
