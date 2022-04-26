import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";
import SignInBox from "../components/SignInBox";
import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={styles.backGround}>
      <Nav />
      <div className={styles.SecondNav}>
        <SecondNav name={"HOME"} menu={"SignIn"} />
      </div>
      <SignInBox />
    </div>
  );
}
export default SignIn;
