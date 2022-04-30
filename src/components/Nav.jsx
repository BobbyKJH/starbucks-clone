import styles from "./Nav.module.css";
import logo from "../images/starbucks_logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import SubNav from "./SubNav";

function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.body}>
        <Link to="/">
          <img src={logo} className={styles.logo} />
        </Link>
        <div className={styles.main}>
          <ul>
            <Link className={styles.link} to="/coffee">
              COFFEE
            </Link>
            <div className={styles.subMenu}>
              <SubNav />
            </div>
          </ul>
          <ul>
            <Link className={styles.link} to="/menu">
              MENU
            </Link>
            <div className={styles.subMenu}>
              <SubNav />
            </div>
          </ul>
          <ul>
            <Link className={styles.link} to="/store">
              STORE
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Nav;
