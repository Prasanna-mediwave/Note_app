import { useNavigate } from "react-router-dom";
import AddIcon from "../assets/AddIcon";
import Card from "../components/card/Card";
import "../pages/styles/home.css";
import { Header } from "../components/header/Header";
import CardView from "../components/cardView/CardView";
import Search from "../components/searchFilter/Search";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        leftside="Notes"
        rigthOption1={<CardView />}
        rigthOption2={<Search />}
      />
      <Card />
      <div className="min_xs:hidden">
        <button
          type="button"
          className="add-btn"
          onClick={() => navigate("/addnote")}
        >
          <AddIcon />
        </button>
      </div>
    </>
  );
};

export default Home;
