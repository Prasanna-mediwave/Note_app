import React from "react";

interface TickIconProps {
  textValue: any;
}

export const TickIcon: React.FC<TickIconProps> = ({ textValue }) => {
  const handleClick = () => {};
  return (
    <button
      className={`icon-container ${textValue.heading ? "!bg-selected" : ""}`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.117"
        height="15.823"
        viewBox="0 0 22.117 15.823"
      >
        <path
          id="Path_2"
          data-name="Path 2"
          d="M1496.263,77.561l-6.95-8.173,3.047-2.591,4.373,5.142,12.122-10.2,2.575,3.061Z"
          transform="translate(-1489.313 -61.738)"
          fill="#fff"
        />
      </svg>
    </button>
  );
};
