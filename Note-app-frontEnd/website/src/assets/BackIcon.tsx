import React from "react";

interface BackIconProps {
  onClick: any;
}

export const BackIcon: React.FC<BackIconProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.607"
        height="20.814"
        viewBox="0 0 20.607 20.814"
      >
        <path
          id="Union_2"
          data-name="Union 2"
          d="M-918,10.407-907.593,0l1.981,1.98L-912.631,9h15.238v2.819h-15.238l7.018,7.018-1.981,1.98Z"
          transform="translate(918)"
          fill="#fff"
        />
      </svg>
    </button>
  );
};
