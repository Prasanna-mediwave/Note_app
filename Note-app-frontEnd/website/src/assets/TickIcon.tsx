import axios from "axios";
import React from "react";
import { useNote } from "../components/useContext/Context";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface TickIconProps {
  textValue: any;
}

export const TickIcon: React.FC<TickIconProps> = ({ textValue }) => {
  const { dispatch } = useNote();
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .post("http://localhost:3001/notes/create", {
        title: textValue.title,
        content: textValue.content,
        noteColour: textValue.noteColour,
      })
      .then((res) => {
        dispatch({
          type: "INPUT_HANDLER",
          field: "cardDetial",
          payload: res.data,
        });
      });
    navigate("/");
  };
  return (
    <motion.button
      className={`icon-container ${textValue.title ? "!bg-selected" : ""}`}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
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
    </motion.button>
  );
};
