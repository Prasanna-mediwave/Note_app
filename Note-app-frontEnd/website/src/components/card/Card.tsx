import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/AddIcon";
import { useNote } from "../useContext/Context";
import "./card.css";
import { motion } from "framer-motion";
import axios from "axios";
import moment from "moment";

export const Card = () => {
  const { state, dispatch } = useNote();
  const navigate = useNavigate();
  const update = state.cardDetial.sort(
    (a: any, b: any) => b.pinnedNote - a.pinnedNote
  );

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
            {update && update.length
              ? update.map((item: any, index: any) => (
                  <div
                    key={`card-id-${index}`}
                    onClick={() => {
                      axios
                        .get(`http://localhost:3001/notes/${item._id}`)
                        .then((res) => {
                          dispatch({
                            type: "INPUT_HANDLER",
                            field: "singleCard",
                            payload: res.data,
                          });
                        });
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
                        className={`flex justify-between ${
                          item.noteColour === "#ffffff28"
                            ? "text-naturalWhite"
                            : "text-primaryBG"
                        }`}
                      >
                        <div>{item.title}</div>
                        <div
                          className={
                            item.pinnedNote === true ? "block" : "hidden"
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25.314"
                            height="26.556"
                            viewBox="0 0 25.314 26.556"
                          >
                            <path
                              id="Path_432"
                              data-name="Path 432"
                              d="M249.91,108.161l-2.43-4.176V97.457l.534-1.044a.968.968,0,0,0-.811-1.5h-7.543a.968.968,0,0,0-.813,1.494l.525,1.018v6.558l-2.43,4.176a.989.989,0,0,0,.856,1.487h5.216v6.5a.411.411,0,0,0,.823,0v-6.5h5.216a.99.99,0,0,0,.855-1.487Zm-.71.581a.162.162,0,0,1-.145.084H237.8a.167.167,0,0,1-.145-.251l2.485-4.272a.411.411,0,0,0,.056-.207V97.327a.41.41,0,0,0-.046-.188l-.578-1.121h0a.413.413,0,0,0-.03-.049.146.146,0,0,1,.119-.23H247.2a.146.146,0,0,1,.121.228.357.357,0,0,0-.028.047L246.7,97.17a.418.418,0,0,0-.045.188V104.1a.411.411,0,0,0,.056.207l2.485,4.272a.162.162,0,0,1,0,.167Z"
                              transform="translate(-109.98 -222.087) rotate(39)"
                              fill="#212121"
                              stroke="#212121"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" text-primaryDate">
                        {moment(item.createdOn).format("ll")}
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </section>
        </motion.div>
      ) : (
        <div>
          <div className="card-header">{state.singleCard.title}</div>
          <div className="card-date">{state.singleCard.createdOn}</div>
          <div className="card-detials">{state.singleCard.content}</div>
        </div>
      )}
    </>
  );
};
