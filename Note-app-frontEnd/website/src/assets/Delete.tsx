import React from "react";
import { motion } from "framer-motion";

interface DeleteProps {
  onClick: any;
}

export const Delete: React.FC<DeleteProps> = ({ onClick }) => {
  return (
    <motion.button
      className="icon-container"
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.556"
        height="22"
        viewBox="0 0 19.556 22"
      >
        <path
          id="delete_FILL0_wght400_GRAD0_opsz48"
          d="M11.086,28a1.826,1.826,0,0,1-1.833-1.833V8.75H8V6.917h5.744V6h8.067v.917h5.744V8.75H26.3V26.167A1.88,1.88,0,0,1,24.469,28ZM24.469,8.75H11.086V26.167H24.469ZM14.325,23.539h1.833V11.347H14.325Zm5.072,0h1.833V11.347H19.4ZM11.086,8.75v0Z"
          transform="translate(-8 -6)"
          fill="#fff"
        />
      </svg>
    </motion.button>
  );
};
