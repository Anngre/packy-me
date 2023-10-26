import styles from "./List.module.css";

function List({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => {
        return (
          <li className={styles.listItem} key={i}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemAmount}>{item.amount} pcs </span>
            <span className={styles.itemCategory}>{item.category} </span>
            <button className={styles.deleteButton}>x</button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
