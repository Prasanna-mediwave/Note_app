import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/AddIcon";
import { useNote } from "../useContext/Context";
import "./card.css";

const Card = () => {
  const { state } = useNote();
  const navigate = useNavigate();
  return (
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
        {(state.filter ? state.filter : state.cardDetial).map((item: any) => (
          <div>
            <div
              className={`bg-[#FFA186] card-wapper ${
                state.view ? "horizontial-card" : null
              }`}
            >
              <div className=" text-primaryBG">{item?.note}</div>
              <div className=" text-primaryDate">{item?.date}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Card;
