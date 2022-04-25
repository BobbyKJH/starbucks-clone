import { useState } from "react";
import styles from "./BeverageMenu.module.css";
import SecondNav from "./SecondNav";

function BeverageMenu() {
  const [coffee, setCoffee] = useState(true);

  const btn = () => {
    setCoffee(!coffee);
  };
  return (
    <div className={styles.body}>
      <div className={styles.menu}>
        <button className={styles.select} onClick={btn}>
          1
        </button>
        <button className={styles.select}>2</button>
        <button className={styles.select}>3</button>
        <button className={styles.select}>4</button>
      </div>

      {coffee ? <SecondNav /> : <div></div>}
    </div>
  );
}
export default BeverageMenu;

// 삼항 연산자를 사용하여 메뉴를 불러오는 방식으로 제작한다.
