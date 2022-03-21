import { useContext } from "react";
import LoginContext from "../../context/login-context";

import { Link } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./Header.module.scss";

function Header() {
  const loggedInCtx = useContext(LoginContext);
  const isLoggedIn = loggedInCtx.isLoggedIn;

  const clickHandler = () => {
    loggedInCtx.logout();
  };

  return (
    <header>
      <nav className={`${styles.header} navbar navbar-expand-lg navbar-light `}>
        <div className="container-sm">
          <Link to="/" className="navbar-brand fs-2">
            Health tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="w-100 d-flex justify-content-end ">
              {isLoggedIn && (
                <Link to="/profile">
                  <button className="btn">Profile</button>
                </Link>
              )}
              {isLoggedIn && (
                <Button
                  onClick={clickHandler}
                  className="mb-0 w-100"
                  text="Logout"
                />
              )}
            </div>
            <ul></ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
