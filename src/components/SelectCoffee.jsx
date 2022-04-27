import styles from "./SelectCoffee.module.css";

export default function SelectCoffee({ menus }) {
  return (
    <div className={styles.menu}>
      {menus.map((menu) => (
        <ul key={menu.id} className={styles.box}>
          <img src={menu.image} alt={menu.name} className={styles.img} />
          <p className={styles.title}>{menu.name}</p>
        </ul>
      ))}
    </div>
  );
}
