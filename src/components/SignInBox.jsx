import { useState } from "react";
import styles from "./SignInBox.module.css";

function SignInBox() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const ID = (e) => {
    setLogin(e.target.value);
  };

  const PW = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    console.log(password);
  };

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h4 className={styles.title}>
          <span>Welcome!</span> 스타벅스 코리아에 오신 것을 환영합니다.
        </h4>
        <hr />
        <form className={styles.LoginBox} onSubmit={onSubmit}>
          <input
            type="text"
            className={styles.LogIn}
            onChange={ID}
            value={login}
            placeholder="아이디를 입력해주세요."
          />

          <input
            type="password"
            className={styles.LogIn}
            onChange={PW}
            value={password}
            placeholder="비밀번호를 입력해주세요."
          />

          <button className={styles.btn} type="submit">
            로그인
          </button>
        </form>
        <hr />

        <div className={styles.Membership}>
          <p className={styles.join}>회원가입</p>
          <hr />
          <p className={styles.join}>아이디 찾기</p>
          <hr />
          <p className={styles.join}>비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
}
export default SignInBox;
