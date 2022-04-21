import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";
import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <>
      <Nav />
      <div className={styles.SecondNav}>
        <SecondNav name={"HOME"} menu={"SignIn"} />
      </div>
    </>
  );
}
export default SignIn;
