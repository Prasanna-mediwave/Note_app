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
import { motion } from "framer-motion";

const Home = () => {
  const { state, dispatch } = useNote();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => {
      dispatch({
        type: "INPUT_HANDLER",
        field: "cardDetial",
        payload: res.data.notes,
      });
    });
  }, []);
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/notes/delete/${state.singleCard._id}`)
      .then((res) => {
        dispatch({
          type: "INPUT_HANDLER",
          field: "cardDetial",
          payload: res.data,
        });
        navigate("/");
        window.location.reload();
      });
  };
  const handleEdit = () => {
    navigate("/addnote");
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
          rigthOption2={<Edit onClick={handleEdit} />}
        />
      )}
      <Card />
      {!state.viewDetial ? (
        <motion.div
          className="min_xs:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="button"
            className="add-btn"
            onClick={() => navigate("/addnote")}
          >
            <AddIcon />
          </motion.button>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
