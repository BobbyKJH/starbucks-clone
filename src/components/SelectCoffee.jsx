import styles from "./SelectCoffee.module.css";

export default function SelectCoffee({ name, menus }) {
  return (
    <div className={styles.menu}>
      <div>
        <h4 className={styles.titleName}>{name}</h4>
      </div>
      {menus.map((menu) => (
        <ul key={menu.id} className={styles.box}>
          <img src={menu.image} alt={menu.name} className={styles.img} />
          <p className={styles.title}>{menu.name}</p>
        </ul>
      ))}
    </div>
  );
}
