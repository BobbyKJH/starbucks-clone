import Nav from "../components/Nav";
import SecondNav from "../components/SecondNav";
import SignInBox from "../components/SignInBox";
import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={styles.backGround}>
      <Nav />
      <div className={styles.SecondNav}>
        <SignInBox />
      </div>
    </div>
  );
}
export default SignIn;
