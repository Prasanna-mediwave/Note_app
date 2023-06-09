import React from "react";
import { motion } from "framer-motion";

interface PinIconProps {
  onClick: any;
  pinValue: any;
}

export const PinIcon: React.FC<PinIconProps> = ({ onClick, pinValue }) => {
  return (
    <motion.button
      className={`icon-container ${pinValue === true ? "!bg-selected" : ""}`}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31.248"
        height="31.248"
        viewBox="0 0 31.248 31.248"
      >
        <path
          id="Path_432"
          data-name="Path 432"
          d="M252.657,110.938l-2.939-5.052v-7.9l.646-1.263a1.171,1.171,0,0,0-.981-1.813h-9.124a1.171,1.171,0,0,0-.983,1.807l.635,1.231v7.933l-2.939,5.052a1.2,1.2,0,0,0,1.035,1.8h6.31V120.6a.5.5,0,0,0,1,0v-7.859h6.31a1.2,1.2,0,0,0,1.035-1.8Zm-.859.7a.2.2,0,0,1-.176.1H238.007a.2.2,0,0,1-.175-.3l3.007-5.168a.5.5,0,0,0,.067-.25V97.832a.5.5,0,0,0-.056-.228l-.7-1.356h0a.5.5,0,0,0-.036-.06.176.176,0,0,1,.144-.278h9.124a.176.176,0,0,1,.146.276.436.436,0,0,0-.034.057l-.717,1.4a.506.506,0,0,0-.055.227v8.151a.5.5,0,0,0,.067.25l3.007,5.168a.2.2,0,0,1,0,.2Z"
          transform="translate(-81.116 -233.856) rotate(45)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        />
      </svg>
    </motion.button>
  );
};
