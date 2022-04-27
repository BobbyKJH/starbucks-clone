import { useState } from "react";
import styles from "./BeverageMenu.module.css";
import SelectCoffee from "./SelectCoffee";
import Blended from "../json/Blended.json";

function BeverageMenu() {
  const [total, setTotal] = useState(true);
  const [content, setContent] = useState(false);

  const Check = () => {
    if (total === true) {
      setTotal(false);
      setContent(false);
    } else {
      setTotal(true);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.menu}>
        <div className={styles.select}>
          <input type="checkbox" checked={total} />
          <span>전체 상품 보기</span>
        </div>
        <div className={styles.select}>
          <input type="checkbox" />
          <span>콜드 브류 커피</span>
        </div>
        <div className={styles.select}>
          <input type="checkbox" checked={content} />
          <span>브루드 커피</span>
        </div>
        <div className={styles.select}>
          <input type="checkbox" checked={content} />
          <span>에스프레소</span>
        </div>
        <div className={styles.select}>
          <input type="checkbox" checked={content} />
          <span>프라푸치노</span>
        </div>
        <div className={styles.select}>
          <input type="checkbox" checked={content} />
          <span>블렌디드</span>
        </div>
        <div className={styles.select}>
          <input type="checkbox" checked={content} />
          <span>스타벅스 피지오</span>
        </div>
        <div className={styles.select}>
          <input type="checkbox" checked={content} />
          <span>티(티바나)</span>
        </div>
        <div className={styles.select}>
          <input type="checkbox" checked={content} />
          <span>기타 제조 음료</span>
        </div>
      </div>
      <hr />

      {/* {coffee ? <SelectCoffee menus={Blended} /> : <div></div>} */}
    </div>
  );
}
export default BeverageMenu;

// 삼항 연산자를 사용하여 메뉴를 불러오는 방식으로 제작한다.
