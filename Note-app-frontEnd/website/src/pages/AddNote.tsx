import { useState } from "react";
import { Header } from "../components/header/Header";

import ColorPalette from "../components/colorPalette/ColorPalette";
import { PinIcon } from "../assets/PinIcon";
import { TickIcon } from "../assets/TickIcon";
import "./styles/addNote.css";
import { BackIcon } from "../assets/BackIcon";
import { useNavigate } from "react-router-dom";
import { useNote } from "../components/useContext/Context";

const AddNote = () => {
  const [inputValue, setInputValue] = useState({
    heading: "",
    contant: "",
  });
  const { state } = useNote();
  const navigate = useNavigate();
  return (
    <>
      <Header
        leftside={<BackIcon onClick={() => navigate(-1)} />}
        rigthOption2={<ColorPalette />}
        rigthOption3={<TickIcon textValue={inputValue} />}
        rigthOption1={<PinIcon />}
      />
      <div className="input-text-container">
        {state.colorPalette ? (
          <div className="color-palette-container">
            {state.cardColor.map((item: any, index: any) => (
              <div
                className="color-select"
                style={{
                  background: `${item.bg}`,
                  color: `${item.color}`,
                  opacity: `${item.opacity}`,
                }}
                key={`color-id-${index}`}
                onClick={() => {
                  console.log(index, "<<<<<<<<tesg>>>>>>");
                  console.log(item, "<<<<<<<<item>>>>>>>>>>>>>></item>");
                }}
              ></div>
            ))}
          </div>
        ) : (
          ""
        )}

        <div className="form-container">
          <input
            autoComplete="off"
            type="text"
            placeholder="Title"
            aria-label="Enter the Title"
            name="heading"
            value={inputValue.heading}
            onChange={(e) => {
              setInputValue({ ...inputValue, heading: e.target.value });
            }}
          />
          <textarea
            name="contant"
            placeholder="Type your notes here."
            value={inputValue.contant}
            onChange={(e) => {
              setInputValue({ ...inputValue, contant: e.target.value });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AddNote;
