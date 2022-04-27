import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

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
        <Link to="/store" className={styles.content}>
          STORE
        </Link>

        <Link to="/signin" className={styles.signin}>
          로그인
        </Link>
      </div>
    </header>
  );
}
export default Nav;
