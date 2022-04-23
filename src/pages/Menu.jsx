import styles from "./Menu.module.css";
import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";
import BeverageMenu from "../components/BeverageMenu";

function Menu() {
  return (
    <>
      <Nav />
      <div className={styles.SecondNav}>
        <SecondNav name={"HOME"} menu={"MENU"} />
      </div>
      <BeverageMenu />
    </>
  );
}
export default Menu;
