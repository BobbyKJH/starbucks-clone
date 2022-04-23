import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      {/* 메인 nav */}
      <Nav />
      {/* 서브 nav */}
      <div className={styles.SecondNav}></div>
    </>
  );
}
export default Home;
