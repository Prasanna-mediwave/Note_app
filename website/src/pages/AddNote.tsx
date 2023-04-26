import { useState } from "react";
import { Header } from "../components/header/Header";
import BackIcon from "../assets/BackIcon";
import ColorPalette from "../components/colorPalette/ColorPalette";
import { PinIcon } from "../assets/PinIcon";
import { TickIcon } from "../assets/TickIcon";
import "./styles/addNote.css";

const AddNote = () => {
  const [inputValue, setInputValue] = useState({
    heading: "",
    contant: "",
  });

  return (
    <>
      <Header
        leftside={<BackIcon />}
        rigthOption2={<ColorPalette />}
        rigthOption3={<TickIcon textValue={inputValue} />}
        rigthOption1={<PinIcon />}
      />
      <div className="input-text-container">
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
