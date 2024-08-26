import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../images/school-logo-template.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleNavbarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles["navbar-brand"]}>
          <img src={logo} alt="School Logo" className={styles.logo} />
        </div>
        <ul
          className={`${styles["navbar-nav"]} ${toggle ? styles.active : ""}`}
        >
          <li className={styles["nav-item"]}>
            <a href="#home">Home</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#about">About Us</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#course">Courses</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#blog">Blog</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <button className={`btn btn-primary ${styles["navbar-showBtn"]}`}>
          <p className="btn-text">Try for free</p>
          <span className="square"></span>
        </button>
        <button
          className={`${styles["nav-toggle-btn"]} ${
            toggle ? styles.active : ""
          }`}
          onClick={handleNavbarToggle}
        >
          <span className={styles.one}></span>
          <span className={styles.two}></span>
          <span className={styles.three}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
