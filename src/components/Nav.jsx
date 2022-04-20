import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.body}>
      <Link to="/" className={styles.title}>
        <img
          className={styles.logo}
          src="https://t1.daumcdn.net/cfile/tistory/99857F4F5E738F472F"
          alt="starbucks logo"
        />
      </Link>
      <Link to="/menu" className={styles.content}>
        2
      </Link>
    </div>
  );
}
export default Nav;
