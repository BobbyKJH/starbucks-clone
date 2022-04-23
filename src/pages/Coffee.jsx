import Menu from "../components/BeverageMenu";
import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";
import styles from "./Coffee.module.css";

function Coffee() {
  return (
    <>
      <Nav />
      <div className={styles.SecondNav}>
        <SecondNav name={"HOME"} menu={"COFFEE"} />
      </div>
    </>
  );
}
export default Coffee;
