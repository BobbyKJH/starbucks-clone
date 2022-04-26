import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.backGround}>
      {/* 메인 nav */}
      <Nav />
      {/* 서브 nav */}
      <div className={styles.SecondNav}>1111</div>
    </div>
  );
}
export default Home;
