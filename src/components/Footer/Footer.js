import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

function Footer(params) {
  return (
    <footer className={styles.footer}>
      <div className={`pt-3`}>
        {/* <img src{} alt="logo" className={`${styles.footerLogo}`}/> */}
        <h3 className={`${styles.footerLogo} ms-1 ms-lg-5 mt-5`}>
          Health tracker
        </h3>
      </div>
      <div className={`${styles.footerNav} w-lg-50 ms-1 ms-lg-5 mt-3`}>
        <ul className={`${styles.footerList}`}>
          <li className={`${styles.footerItem}`}>
            <Link to="/" className={`${styles.footerLink}`}>
              About us
            </Link>
          </li>
          <li className={`${styles.footerItem}`}>
            <Link to="/" className={`${styles.footerLink}`}>
              Contacts
            </Link>
          </li>
          <li className={`${styles.footerItem}`}>
            <Link to="/" className={`${styles.footerLink}`}>
              Privacy policy
            </Link>
          </li>
        </ul>
      </div>
      <a
        className="ms-1 ms-lg-5"
        href="https://www.freepik.com/vectors/background"
      >
        <span className="fs-6">
          Background vector created by freepik - www.freepik.com
        </span>
      </a>
    </footer>
  );
}
export default Footer;
