import { useState } from "react";
import { useNote } from "../components/useContext/Context";

const SearchIcon = () => {
  const [text, setText] = useState("");
  const { state, dispatch } = useNote();
  const searchHandle = (e: any) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    dispatch({ type: "SEARCH_FILTER", payload: text });
  };
  return (
    <div>
      <input
        name="search"
        type="search"
        placeholder="search"
        onChange={searchHandle}
        value={text}
      />
      <button onClick={handleOnClick} className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.561"
          height="24.561"
          viewBox="0 0 24.561 24.561"
        >
          <path
            id="Union_1"
            data-name="Union 1"
            d="M16.788,18.909a10.5,10.5,0,1,1,2.121-2.121l5.652,5.652L22.44,24.561ZM3,10.5A7.5,7.5,0,1,0,10.5,3,7.509,7.509,0,0,0,3,10.5Z"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchIcon;
