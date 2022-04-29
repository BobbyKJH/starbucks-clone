import styles from "./Nav.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.body}>
        <Link to="/" className={styles.title}>
          <img
            className={styles.logo}
            src="https://t1.daumcdn.net/cfile/tistory/99857F4F5E738F472F"
            alt="starbucks logo"
          />
        </Link>
        <Link to="/coffee" className={styles.content}>
          COFFEE
        </Link>
        <Link to="/menu" className={styles.content}>
          MENU
        </Link>
        <div className={styles.sideBar}>
          <Link to="/store" className={styles.content}>
            STORE
          </Link>
          <div className={styles.h1}>1</div>
        </div>

        <Link to="/signin" className={styles.signin}>
          로그인
        </Link>
      </div>
    </header>
  );
}
export default Nav;
