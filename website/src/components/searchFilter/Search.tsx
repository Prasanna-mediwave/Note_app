import React, { useState } from "react";
import { useNote } from "../useContext/Context";
import "./search.css";

const Search = () => {
  const [text, setText] = useState("");
  const [searchOpen, setSearchopen] = useState(false);
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useNote();
  const searchHandle = (e: any) => {
    setText(e.target.value);
    dispatch({ type: "SEARCH_FILTER", payload: text });
  };
  const closeHandler = () => {
    dispatch({ type: "SEARCH_FILTER", payload: "" });
    setSearchopen(false);
    setOpen(true);
  };
  return (
    <div className={`search-container ${open === true ? "test" : null}`}>
      {searchOpen ? (
        <div className="open-search">
          <div className="icon-container cursor-pointer !bg-transparent">
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
          </div>
          <input
            name="search"
            type="text"
            autoComplete="off"
            placeholder="search"
            onChange={searchHandle}
            value={text}
          />
          <button className="icon-container" onClick={closeHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.098"
              height="20.063"
              viewBox="0 0 20.098 20.063"
            >
              <path
                id="noun-cancel-4172821"
                d="M83.134,11.7l7.144-7.144a1.786,1.786,0,0,0,0-2.429,1.786,1.786,0,0,0-2.429,0L80.7,9.268,73.561,2.124a1.786,1.786,0,0,0-2.429-.071,1.786,1.786,0,0,0,0,2.429l7.144,7.144-7.144,7.144A1.718,1.718,0,0,0,73.561,21.2L80.7,14.054,87.848,21.2a1.786,1.786,0,0,0,2.429-2.429Z"
                transform="translate(-70.656 -1.611)"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      ) : (
        <button
          className="icon-container !bg-transparent"
          onClick={() => {
            setSearchopen(true);
            setOpen(false);
          }}
        >
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
      )}
    </div>
  );
};

export default Search;
