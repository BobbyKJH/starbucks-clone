import styles from "./Menu.module.css";
import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";

function Menu() {
  return (
    <>
      <Nav />
      <div className={styles.SecondNav}>
        <SecondNav name={"HOME"} menu={"MENU"} />
      </div>
    </>
  );
}
export default Menu;
