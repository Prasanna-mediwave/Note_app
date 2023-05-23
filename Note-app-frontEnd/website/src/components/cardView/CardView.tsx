import { useNote } from "../useContext/Context";
import { motion } from "framer-motion";

const CardView = () => {
  const { state, dispatch } = useNote();
  const viewHandler = () => {
    dispatch({
      type: "INPUT_HANDLER",
      field: "view",
      payload: !state.view,
    });
  };
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      type="button"
      onClick={viewHandler}
      className={`icon-container ${
        state.cardDetial.length === 0 ? "hidden" : "block"
      }`}
    >
      {!state.view ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g id="Group_4" data-name="Group 4" transform="translate(-219 -61)">
            <g
              id="Rectangle_43"
              data-name="Rectangle 43"
              transform="translate(219 61)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            >
              <rect width="8" height="8" stroke="none" />
              <rect x="1" y="1" width="6" height="6" fill="none" />
            </g>
            <g
              id="Rectangle_45"
              data-name="Rectangle 45"
              transform="translate(231 61)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            >
              <rect width="8" height="8" stroke="none" />
              <rect x="1" y="1" width="6" height="6" fill="none" />
            </g>
            <g
              id="Rectangle_44"
              data-name="Rectangle 44"
              transform="translate(219 73)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            >
              <rect width="8" height="8" stroke="none" />
              <rect x="1" y="1" width="6" height="6" fill="none" />
            </g>
            <g
              id="Rectangle_46"
              data-name="Rectangle 46"
              transform="translate(231 73)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            >
              <rect width="8" height="8" stroke="none" />
              <rect x="1" y="1" width="6" height="6" fill="none" />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="20"
          viewBox="0 0 25 20"
        >
          <g id="Group_5" data-name="Group 5" transform="translate(-291 -61)">
            <g
              id="Rectangle_40"
              data-name="Rectangle 40"
              transform="translate(291 61)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            >
              <rect width="25" height="8" stroke="none" />
              <rect x="1" y="1" width="23" height="6" fill="none" />
            </g>
            <g
              id="Rectangle_42"
              data-name="Rectangle 42"
              transform="translate(291 73)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            >
              <rect width="25" height="8" stroke="none" />
              <rect x="1" y="1" width="23" height="6" fill="none" />
            </g>
          </g>
        </svg>
      )}
    </motion.button>
  );
};

export default CardView;
