import { useState } from "react";
import styles from "./CheckBox.module.css";

export default function CheckBox({ name, check, change }) {
  return (
    <div className={styles.select}>
      <input type="checkbox" checked={check} onChange={change} />
      <span>{name}</span>
    </div>
  );
}
