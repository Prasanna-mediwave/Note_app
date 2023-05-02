import React from "react";
import { useNote } from "../useContext/Context";

const ColorPalette = () => {
  const { state, dispatch } = useNote();
  const colorHandler = () => {
    dispatch({
      type: "INPUT_HANDLER",
      field: "colorPalette",
      payload: !state.colorPalette,
    });
  };
  return (
    <button type="button" onClick={colorHandler} className="icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.054"
        height="25.612"
        viewBox="0 0 26.054 25.612"
      >
        <path
          id="Path_433"
          data-name="Path 433"
          d="M92.221,37.149a2.33,2.33,0,1,0,2.33,2.33A2.328,2.328,0,0,0,92.221,37.149Zm-4.332-4.962a2.33,2.33,0,1,0,2.33,2.33A2.328,2.328,0,0,0,87.889,32.186ZM106.395,27.5a2.33,2.33,0,1,0,2.33,2.33A2.328,2.328,0,0,0,106.395,27.5ZM88.3,25.606a2.33,2.33,0,1,0,2.33,2.33A2.328,2.328,0,0,0,88.3,25.606Zm5.1-4.523a2.33,2.33,0,1,0,2.33,2.33A2.294,2.294,0,0,0,93.4,21.083ZM99.9,19.9a2.33,2.33,0,1,0,2.33,2.33A2.294,2.294,0,0,0,99.9,19.9Zm-1.7-1.426c.521,0,1.069,0,1.645.027a11.056,11.056,0,0,1,9.65,7.622c2.166,9.568-2.495,8.691-5.182,7.484-7.512-1.563,1.782,10.774-12.09,10.473-8.334-.823-9.349-10.445-7.347-16.7,1.371-4.3,5.4-8.8,13.324-8.91Z"
          transform="translate(-83.996 -18.479)"
          fill="#fff"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ColorPalette;
