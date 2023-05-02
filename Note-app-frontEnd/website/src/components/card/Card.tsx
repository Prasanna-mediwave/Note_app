import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/AddIcon";
import { useNote } from "../useContext/Context";
import "./card.css";
import { useState } from "react";

import React from "react";

interface CardProps {
  singleCard: any;
  setSingleCard: any;
}

export const Card: React.FC<CardProps> = ({ singleCard, setSingleCard }) => {
  const { state, dispatch } = useNote();
  const navigate = useNavigate();
  return (
    <>
      {!state.viewDetial ? (
        <div className="outer-card-container">
          <div className=" max_xs:hidden">
            <button
              type="button"
              className="add-new-note"
              onClick={() => navigate("/addnote")}
            >
              <span className="addIcon">
                <AddIcon />
              </span>
              <span>Create note</span>
            </button>
          </div>
          <section
            className={`card-container ${state.view ? "grid-cols-1" : null}`}
          >
            {(state.filter ? state.filter : state.cardDetial).map(
              (item: any) => (
                <div
                  key={`card-id-${item.id}`}
                  onClick={() => {
                    setSingleCard(item);
                    dispatch({
                      type: "INPUT_HANDLER",
                      field: "viewDetial",
                      payload: !state.viewDetial,
                    });
                  }}
                >
                  <div
                    className={` bg-naturalWhite card-wapper ${
                      state.view ? "horizontial-card" : null
                    }`}
                  >
                    <div className=" text-primaryBG">{item.title}</div>
                    <div className=" text-primaryDate">{item.createdOn}</div>
                  </div>
                </div>
              )
            )}
          </section>
        </div>
      ) : (
        <div>
          <div className="card-header">{singleCard.title}</div>
          <div className="card-date">{singleCard.createdOn}</div>
          <div className="card-detials">{singleCard.content}</div>
        </div>
      )}
    </>
  );
};
