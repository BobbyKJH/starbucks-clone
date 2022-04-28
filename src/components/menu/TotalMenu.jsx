import SelectCoffee from "../SelectCoffee";
import ColdBrewCoffee from "../../json/ColdBrewCoffee.json";
import BrewedCoffee from "../../json/BrewedCoffee.json";
import Esspresso from "../../json/Esspresso.json";
import Frappuccino from "../../json/Frappuccino.json";
import Blended from "../../json/Blended.json";
import Fijio from "../../json/Fijio.json";
import Tea from "../../json/Tea.json";
import Etc from "../../json/Etc.json";

export default function TotalMenu() {
  return (
    <div>
      <SelectCoffee name={"콜드 브류 커피"} menus={ColdBrewCoffee} />
      <SelectCoffee name={"브루드 커피"} menus={BrewedCoffee} />
      <SelectCoffee name={"에스프레소"} menus={Esspresso} />
      <SelectCoffee name={"프라푸치노"} menus={Frappuccino} />
      <SelectCoffee name={"블렌디드"} menus={Blended} />
      <SelectCoffee name={"스타벅스 피지오"} menus={Fijio} />
      <SelectCoffee name={"티 (티바나)"} menus={Tea} />
      <SelectCoffee name={"기타 제조 음료"} menus={Etc} />
    </div>
  );
}
