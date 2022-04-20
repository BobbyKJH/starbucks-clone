import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      {/* 메인 nav */}
      <Nav />
      {/* 서브 nav */}
      <div className={styles.SecondNav}>
        <SecondNav name={"coffee"} menu={"coffe"} />
      </div>
    </>
  );
}
export default Home;
