import { useState } from "react";
import styles from "./BeverageMenu.module.css";
// 컴포넌트
import CheckBox from "./CheckBox";
import SelectCoffee from "./SelectCoffee";
import TotalMenu from "./menu/TotalMenu";
// JSON 파일
import ColdBrewCoffee from "../json/ColdBrewCoffee.json";
import BrewedCoffee from "../json/BrewedCoffee.json";
import Esspresso from "../json/Esspresso.json";
import Frappuccino from "../json/Frappuccino.json";
import Blended from "../json/Blended.json";
import Fijio from "../json/Fijio.json";
import Tea from "../json/Tea.json";
import Etc from "../json/Etc.json";

function BeverageMenu() {
  const [total, setTotal] = useState(true);
  const [coldBrewCoffee, setColdBrewCoffee] = useState(false);
  const [brewedCoffee, setbrewedCoffee] = useState(false);

  //전체 상품 보기 (checkBox)
  const CheckTotal = () => {
    setTotal(!total);
    if (total === false) {
      setColdBrewCoffee(false);
      setbrewedCoffee(false);
    }
  };

  // 콜드 브류 커피 (checkBox)
  const checkCoffee1 = () => {
    setColdBrewCoffee(!coldBrewCoffee);
    if (coldBrewCoffee === false) {
      setTotal(false);
    }
  };

  // 브루드 커피 (checkBox)
  const checkCoffee2 = () => {
    if (brewedCoffee === false) {
      setbrewedCoffee(true);
      setTotal(false);
    } else {
      setbrewedCoffee(false);
    }
  };

  //에스프레소 (checkBox)
  //프라푸치노 (checkBox)
  //블렌디드 (checkBox)
  //스타벅스 피지오(checkBox)
  //티 - 티바나(checkBox)
  //기타 제조 음료(checkBox)

  return (
    <div className={styles.body}>
      <h2>음료</h2>
      <div className={styles.menu}>
        <div className={styles.h3}>
          <h3>분류 보기</h3>
        </div>
        {/* 1 */}
        <CheckBox name={"전체 상품 보기"} check={total} change={CheckTotal} />
        {/* 2 */}
        <CheckBox
          name={"콜드 브류 커피"}
          check={coldBrewCoffee}
          change={checkCoffee1}
        />
        {/* 3 */}
        <CheckBox
          name={"브루드 커피"}
          check={brewedCoffee}
          change={checkCoffee2}
        />
        {/* 4 */}
        <CheckBox name={"에스프레소"} />
        {/* 5 */}
        <CheckBox name={"프라푸치노"} />
        {/* 6 */}
        <CheckBox name={"블렌디드"} />
        {/* 7 */}
        <CheckBox name={"스타벅스 피지오"} />
        {/* 8 */}
        <CheckBox name={"티 (티바나)"} />
        {/* 9 */}
        <CheckBox name={"기타 제조 음료"} />
        <hr />
      </div>

      {total ? <TotalMenu /> : <div></div>}
      {coldBrewCoffee ? (
        <SelectCoffee name={"콜드 브류 커피"} menus={ColdBrewCoffee} />
      ) : (
        <div></div>
      )}
      {brewedCoffee ? (
        <SelectCoffee name={"브루드 커피"} menus={BrewedCoffee} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default BeverageMenu;

// 삼항 연산자를 사용하여 메뉴를 불러오는 방식으로 제작한다.
