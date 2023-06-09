import { useEffect, useState } from "react";
import { Header } from "../components/header/Header";

import ColorPalette from "../components/colorPalette/ColorPalette";
import { PinIcon } from "../assets/PinIcon";
import { TickIcon } from "../assets/TickIcon";
import "./styles/addNote.css";
import { BackIcon } from "../assets/BackIcon";
import { useNavigate } from "react-router-dom";
import { useNote } from "../components/useContext/Context";
import { motion } from "framer-motion";

const AddNote = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
    noteColour: "#ffffff28 ",
    index: 0,
    id: "",
    pinnedNote: false,
  });
  const { state } = useNote();
  const navigate = useNavigate();
  useEffect(() => {
    if (state.singleCard._id) {
      setInputValue(state.singleCard);
    }
  }, []);
  const handlleChange = (e: any) => {
    setInputValue({ ...inputValue, content: e.target.value });
  };
  return (
    <>
      <Header
        leftside={<BackIcon onClick={() => navigate(-1)} />}
        rigthOption2={<ColorPalette />}
        rigthOption3={<TickIcon textValue={inputValue} />}
        rigthOption1={
          <PinIcon
            pinValue={inputValue.pinnedNote}
            onClick={() => {
              setInputValue({
                ...inputValue,
                pinnedNote: !inputValue.pinnedNote,
              });
            }}
          />
        }
      />
      <div className="input-text-container">
        {state.colorPalette ? (
          <motion.div
            animate={{ y: -10 }}
            initial={{ y: -100 }}
            className="color-palette-container"
          >
            {state.cardColor.map((item: any, index: any) => (
              <motion.div
                whileHover={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["50%", "20%", "50%", "50%", "50%"],
                }}
                className="color-select"
                style={{
                  background: `${item.bg}`,
                }}
                key={`color-id-${index}`}
                onClick={() =>
                  setInputValue({
                    ...inputValue,
                    noteColour: item.bg,
                    index: index,
                  })
                }
              >
                {inputValue.index === index ? (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.706"
                      height="9.091"
                      viewBox="0 0 12.706 9.091"
                    >
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M1493.306,70.828l-3.993-4.7,1.751-1.489,2.512,2.954,6.964-5.86,1.48,1.758Z"
                        transform="translate(-1489.313 -61.738)"
                        fill="#212121"
                      />
                    </svg>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          ""
        )}

        <div className="form-container">
          <input
            style={{
              caretColor: `${
                state.singleCard.noteColour ? state.singleCard.noteColour : ""
              }`,
            }}
            autoFocus
            autoComplete="off"
            type="text"
            placeholder="Title"
            aria-label="Enter the Title"
            name="heading"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({ ...inputValue, title: e.target.value });
            }}
          />
          <textarea
            name="contant"
            placeholder="Type your notes here."
            value={inputValue.content}
            onChange={handlleChange}
          />
        </div>
      </div>
    </>
  );
};

export default AddNote;
