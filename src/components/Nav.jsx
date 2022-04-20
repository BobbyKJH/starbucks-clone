import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.body}>
      <Link to="/" className={styles.title}>
        StarBucks
      </Link>
      <Link to="/menu" className={styles.content}>
        2
      </Link>
    </div>
  );
}
export default Nav;
