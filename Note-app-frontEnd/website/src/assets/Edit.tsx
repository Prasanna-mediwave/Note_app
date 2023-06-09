import React from "react";
import { motion } from "framer-motion";

interface EditProps {
  onClick: any;
}

export const Edit: React.FC<EditProps> = ({ onClick }) => {
  return (
    <motion.button
      className="icon-container"
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.5"
        height="22.5"
        viewBox="0 0 22.5 22.5"
      >
        <g
          id="Group_3"
          data-name="Group 3"
          transform="translate(-362.09 -55.59)"
        >
          <path
            id="Rectangle_23"
            data-name="Rectangle 23"
            d="M0-1.5H17A1.5,1.5,0,0,1,18.5,0V17A1.5,1.5,0,0,1,17,18.5H0A1.5,1.5,0,0,1-1.5,17V0A1.5,1.5,0,0,1,0-1.5Zm15.5,3H1.5v14h14Z"
            transform="translate(363.59 59.59)"
            fill="#fff"
          />
          <rect
            id="Rectangle_24"
            data-name="Rectangle 24"
            width="12"
            height="12"
            transform="translate(372.59 55.59)"
            fill="#444"
          />
          <path
            id="Line_3"
            data-name="Line 3"
            d="M1.061,9.94-1.061,7.818,7.818-1.061,9.94,1.061Z"
            transform="translate(372.475 58.422)"
            fill="#fff"
          />
        </g>
      </svg>
    </motion.button>
  );
};
