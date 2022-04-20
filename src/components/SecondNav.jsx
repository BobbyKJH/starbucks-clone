import { Link } from "react-router-dom";
import styles from "./SecondNav.module.css";

function SecondNav({ name, menu }) {
  return (
    <div className={styles.body}>
      <h3 className={styles.menu}>
        {name} {menu}
      </h3>
    </div>
  );
}
export default SecondNav;
