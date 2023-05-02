import { useNavigate } from "react-router-dom";
import AddIcon from "../assets/AddIcon";
import { Card } from "../components/card/Card";
import "../pages/styles/home.css";
import { Header } from "../components/header/Header";
import CardView from "../components/cardView/CardView";
import Search from "../components/searchFilter/Search";
import { useNote } from "../components/useContext/Context";
import { BackIcon } from "../assets/BackIcon";
import { Delete } from "../assets/Delete";
import { Edit } from "../assets/Edit";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useNote();
  const navigate = useNavigate();
  const [singleCard, setSingleCard] = useState<any>([]);
  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => {
      dispatch({
        type: "INPUT_HANDLER",
        field: "cardDetial",
        payload: res.data,
      });
    });
  }, []);
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/notes/delete/${singleCard.id}`)
      .then((res) => console.log(res.data, "<<<<<test>>>>>>"));
    dispatch({
      type: "INPUT_HANDLER",
      field: "viewDetial",
      payload: !state.viewDetial,
    });
    window.location.reload();
  };
  return (
    <>
      {!state.viewDetial ? (
        <Header
          leftside="Notes"
          rigthOption1={<CardView />}
          rigthOption2={<Search />}
        />
      ) : (
        <Header
          leftside={
            <BackIcon
              onClick={() => {
                dispatch({
                  type: "INPUT_HANDLER",
                  field: "viewDetial",
                  payload: !state.viewDetial,
                });
              }}
            />
          }
          rigthOption1={<Delete onClick={handleDelete} />}
          rigthOption2={<Edit />}
        />
      )}
      <Card setSingleCard={setSingleCard} singleCard={singleCard} />
      {!state.viewDetial ? (
        <div className="min_xs:hidden">
          <button
            type="button"
            className="add-btn"
            onClick={() => navigate("/addnote")}
          >
            <AddIcon />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
