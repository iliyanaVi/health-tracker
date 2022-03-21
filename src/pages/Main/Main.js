import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import LoginContext from "../../context/login-context";

import Card from "./../../components/Card/Card";
import Feedback from "./../../components/Feedback/Feedback";

import styles from "./Main.module.scss";

function Main(props) {
  const loggedInCtx = useContext(LoginContext);
  const isLoggedIn = loggedInCtx.isLoggedIn;

  let navigate = useNavigate();

  const [options, _] = useState([
    "Track workouts",
    "Track food intake",
    "Track weight",
  ]);
  return (
    <>
      {isLoggedIn && (
        <section
          className={`vh-100 flex-column align-items-center justify-content-center`}
        >
          <h1
            className={`d-flex flex-column align-items-center justify-content-center mt-5 ${styles.heading}`}
          >
            <span className={`fs-1 ${styles.lineOne}`}>
              Track your workouts, food intake and weight.
            </span>
            <span className={`fs-4 ${styles.lineTwo}`}> All in one place!</span>
          </h1>
          <div
            className={`${styles.cardWrapper} container-sm d-flex flex-wrap justify-content-evenly py-5`}
          >
            {options.map((option, index) => {
              return (
                <Card key={index} heading={option} route={options[index]} />
              );
            })}
          </div>
        </section>
      )}
      {!isLoggedIn && (
        <section
          className={`flex-column ${styles.introSection} text-center px-3 py-lg-5 py-1`}
        >
          <div className="">
            <h1>Start tracking your progress, all in one place. </h1>
            <p>
              Often we have diffrent apps to track our food intake, calories,
              workouts and so on and in that way we don't have much visibility
              of the overall process. Here you can have a record of everything
              and in addition with different charts so that you have more
              understanding of your journey to a healthy life.
            </p>
            <p>Sign up to get started</p>
            <Button
              className="mb-5"
              text="Sign up"
              onClick={() => {
                navigate("/sign-up");
              }}
            />
            <p>Already have an account?</p>
            <Button
              className="mb-5"
              text="Log in"
              onClick={() => {
                navigate("/login");
              }}
            />
            <aside>
              <div></div>
              <div></div>
              <div></div>
            </aside>
          </div>
        </section>
      )}
      <section className={`text-center ${styles.commentsSection}`}>
        <h3>We help people achieve their goals</h3>
        <Feedback />
      </section>
    </>
  );
}
export default Main;
