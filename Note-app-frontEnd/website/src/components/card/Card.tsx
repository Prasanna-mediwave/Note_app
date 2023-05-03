import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/AddIcon";
import { useNote } from "../useContext/Context";
import "./card.css";
import { useState } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="outer-card-container"
        >
          <div className=" max_xs:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="button"
              className="add-new-note"
              onClick={() => navigate("/addnote")}
            >
              <span className="addIcon">
                <AddIcon />
              </span>
              <span>Create note</span>
            </motion.button>
          </div>
          <section
            className={`card-container ${state.view ? "grid-cols-1" : null}`}
          >
            {state.cardDetial &&
            state.cardDetial.notes &&
            state.cardDetial.notes.length
              ? state.cardDetial.notes.map((item: any, index: any) => (
                  <div
                    key={`card-id-${index}`}
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
                      style={{
                        background: `${item.noteColour}`,
                      }}
                      className={` card-wapper ${
                        state.view ? "horizontial-card" : null
                      }`}
                    >
                      <div
                        className={`${
                          item.noteColour === "#ffffff28"
                            ? "text-naturalWhite"
                            : "text-primaryBG"
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className=" text-primaryDate">{item.createdOn}</div>
                    </div>
                  </div>
                ))
              : ""}
          </section>
        </motion.div>
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
