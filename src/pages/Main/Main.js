import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LoginContext from "../../context/login-context";

import Card from "./../../components/Card/Card";
import Feedback from "./../../components/Feedback/Feedback";
import Button from "../../components/Button/Button";

import styles from "./Main.module.scss";

function Main() {
  const { t } = useTranslation();

  const options = [
    t("trackWorkoutsPage.trackWorkouts"),
    t("foodIntakePage.trackFood"),
    t("trackWeightPage.trackWeight"),
  ];
  const loggedInCtx = useContext(LoginContext);
  const isLoggedIn = loggedInCtx.isLoggedIn;
  const navigate = useNavigate();

  return (
    <>
      {isLoggedIn && (
        <section
          className={`flex-column align-items-center justify-content-center`}
        >
          <h1
            className={`d-flex flex-column align-items-center justify-content-center mt-5 ${styles.heading}`}
          >
            <span className={`fs-1 ${styles.lineOne}`}>
              {t("mainPage.trackWorkouts")}
            </span>
            <span className={`fs-4 ${styles.lineTwo}`}>
              {t("mainPage.allInOnePlace")}
            </span>
          </h1>
          <div
            className={`${styles.cardWrapper} d-flex flex-wrap justify-content-center py-5`}
          >
            {options.map((option, index) => {
              return <Card key={index} heading={option} index={index} />;
            })}
          </div>
        </section>
      )}
      {!isLoggedIn && (
        <section
          className={`flex-column ${styles.introSection} text-center px-3 py-lg-5 py-1`}
        >
          <div className="container-sm">
            <h1>{t("mainPage.startTracking")}</h1>
            <div className={`${styles.introText}`}>{t("mainPage.intro")}</div>
            <div className={`${styles.buttonWrapper}`}>
              <p className="my-0">{t("mainPage.signUp")}</p>
              <Button
                className="mb-5"
                text={t("mainPage.signUpText")}
                onClick={() => {
                  navigate("/sign-up");
                }}
              />
            </div>
            <div className={`${styles.buttonWrapper}`}>
              <p className="my-0">{t("mainPage.login")}</p>
              <Button
                className="mb-5"
                text={t("mainPage.loginText")}
                onClick={() => {
                  navigate("/login");
                }}
              />
            </div>
          </div>
        </section>
      )}
      <section className={`text-center ${styles.commentsSection}`}>
        <h3>{t("mainPage.feedbackHeader")}</h3>
        <Feedback />
      </section>
    </>
  );
}
export default Main;
