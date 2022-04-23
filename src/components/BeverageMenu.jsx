import { useState } from "react";
import styles from "./BeverageMenu.module.css";

function BeverageMenu() {
  return (
    <div className={styles.body}>
      <div className={styles.menu}>
        <button className={styles.select}>1</button>
        <button className={styles.select}>2</button>
        <button className={styles.select}>3</button>
        <button className={styles.select}>4</button>
      </div>
    </div>
  );
}
export default BeverageMenu;
