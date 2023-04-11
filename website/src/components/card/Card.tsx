import AddIcon from "../../assets/AddIcon";
import { useNote } from "../useContext/Context";
import "./card.css";

const cardData = [
  {
    note: "How to make your personal brand stand out online",
    date: "mar 8, 2023",
  },
  {
    note: "How to make your personal brand stand out online",
    date: "mar 8, 2023",
  },
  {
    note: "How to make your personal brand stand out online",
    date: "mar 8, 2023",
  },
  {
    note: "How to make your personal brand stand out online",
    date: "mar 8, 2023",
  },
  {
    note: "How to make your personal brand stand out online",
    date: "mar 8, 2023",
  },
  {
    note: "How to make your personal brand stand out online",
    date: "mar 8, 2023",
  },
];

const Card = () => {
  const { state } = useNote();
  return (
    <div className="outer-card-container">
      <div className=" max_xs:hidden">
        <button type="button" className="add-new-note">
         <span className="addIcon"><AddIcon /></span>
          <span>Create note</span>
        </button>
      </div>
      <section
        className={`card-container ${state.view ? "grid-cols-1" : null}`}
      >
        {cardData.map((item: any) => (
          <div>
            <div
              className={`bg-[#FFA186] card-wapper ${
                state.view ? "horizontial-card" : null
              }`}
            >
              <div className=" text-primaryBG">{item.note}</div>
              <div className=" text-primaryDate">{item.date}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Card;
