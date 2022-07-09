import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../../context/login-context";
import styles from "./Card.module.scss";

function Card({ heading, index }) {
  const loginContext = useContext(LoginContext);
  const isLoggedIn = loginContext.isLoggedIn;

  let navigate = useNavigate();

  const clickHandler = () => {
    if (index === 0) {
      navigate("/track-workouts");
    } else if (index === 1) {
      navigate("/track-food-intake");
    } else if (index === 2) {
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
