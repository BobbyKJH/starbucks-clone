import { useState } from "react";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const [menu, setMenu] = useState("false");
  const openMenu = () => {
    setMenu("true");
  };
  const closeMenu = () => {
    setMenu();
  };
  return (
    <div className={styles.body} onMouseOver={openMenu}>
      {menu ? <div className={styles.body}>1</div> : <></>}
    </div>
  );
}
