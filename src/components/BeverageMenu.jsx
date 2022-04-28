import { useState } from "react";
import styles from "./BeverageMenu.module.css";
// 컴포넌트
import SelectCoffee from "./SelectCoffee";
import CheckBox from "./CheckBox";
// JSON 파일
import ColdBrewCoffee from "../json/ColdBrewCoffee.json";
import BrewedCoffee from "../json/BrewedCoffee.json";
import Esspresso from "../json/Esspresso.json";
import Frappuccino from "../json/Frappuccino.json";
import Blended from "../json/Blended.json";
import Fijio from "../json/Fijio.json";
import Tea from "../json/Tea.json";
import Etc from "../json/Etc.json";
import TotalMenu from "./menu/TotalMenu";

function BeverageMenu() {
  const [total, setTotal] = useState(true);
  const [content, setContent] = useState(false);

  const CheckTotal = () => {
    if (total === false) {
      setTotal(true);
      setContent(false);
    } else {
      setTotal(false);
    }
  };

  const CheckContent = () => {
    if (content === false) {
      setContent(true);
      setTotal(false);
    } else {
      setContent(false);
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.menu}>
        {/* 1 */}
        <CheckBox name={"전체 상품 보기"} check={total} change={CheckTotal} />
        {/* 2 */}
        <CheckBox
          name={"콜드 브류 커피"}
          check={content}
          change={CheckContent}
        />
        {/* 3 */}
        <CheckBox name={"브루드 커피"} check={content} change={CheckContent} />
        {/* 4 */}
        <CheckBox name={"에스프레소"} check={content} change={CheckContent} />
        {/* 5 */}
        <CheckBox name={"프라푸치노"} check={content} change={CheckContent} />
        {/* 6 */}
        <CheckBox name={"블렌디드"} check={content} change={CheckContent} />
        {/* 7 */}
        <CheckBox
          name={"스타벅스 피지오"}
          check={content}
          change={CheckContent}
        />
        {/* 8 */}
        <CheckBox name={"티 (티바나)"} check={content} change={CheckContent} />
        {/* 9 */}
        <CheckBox
          name={"기타 제조 음료"}
          check={content}
          change={CheckContent}
        />
      </div>
      <hr />

      {total ? <TotalMenu /> : <div></div>}
    </div>
  );
}
export default BeverageMenu;

// 삼항 연산자를 사용하여 메뉴를 불러오는 방식으로 제작한다.
