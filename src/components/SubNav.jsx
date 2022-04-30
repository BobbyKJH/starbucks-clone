import styles from "./SubNav.module.css";

export default function SubNav() {
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <ul className={styles.nav}>
          <li className={styles.navTitle}>음료</li>
          <li className={styles.navContent}>브루드</li>
          <li className={styles.navContent}>에스프레소</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
        </ul>
        <ul className={styles.nav}>
          <li className={styles.navTitle}>음료</li>
          <li className={styles.navContent}>브루드</li>
          <li className={styles.navContent}>에스프레소</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
          <li className={styles.navContent}>브</li>
        </ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
      </div>
    </div>
  );
}
