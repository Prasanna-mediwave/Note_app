import { useNavigate } from "react-router-dom";
import AddIcon from "../assets/AddIcon";
import GridIcon from "../assets/GridIcon";
import HorizontalIcon from "../assets/HorizontalIcon";
import SearchIcon from "../assets/SearchIcon";
import Card from "../components/card/Card";
import { useNote } from "../components/useContext/Context";
import "../styles/home.css";

const Home = () => {
  const { state, dispatch } = useNote();

  const navigate = useNavigate();

  const viewHandler = () => {
    dispatch({
      type: "HANDLE_BOOL_INPUT",
      payload: !state.view,
    });
  };

  return (
    <main>
      <header>
        <h1 className="header-text">Note</h1>
        <div className="flex">
          <button
            type="button"
            onClick={viewHandler}
            className="icon-container"
          >
            {!state.view ? <GridIcon /> : <HorizontalIcon />}
          </button>
          <button type="button" className="ml-5 icon-container">
            <SearchIcon />
          </button>
        </div>
      </header>
      <Card />
      <div className="min_xs:hidden">
        <button type="button" className="add-btn" onClick={()=>( navigate("/addnote"))}>
          <AddIcon />
        </button>
      </div>
    </main>
  );
};

export default Home;
