import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../../context/login-context";
import styles from "./Card.module.scss";

function Card({ heading, route }) {
  const loginContext = useContext(LoginContext);
  const isLoggedIn = loginContext.isLoggedIn;

  let navigate = useNavigate();

  const clickHandler = () => {
    if (route === "Track workouts") {
      navigate("/track-workouts");
    } else if (route === "Track food intake") {
      navigate("/track-food-intake");
    } else if (route === "Track weight") {
      navigate("/track-weight");
    }
  };

  return (
    <div
      onClick={clickHandler}
      className={`d-flex justify-content-center align-items-center mx-5 mb-3 ${styles.optionWrapper}`}
    >
      <p className="">{heading}</p>
    </div>
  );
}
export default Card;
