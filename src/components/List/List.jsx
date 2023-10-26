import styles from "./List.module.css";

function getColor(category) {
  if (category === "clothes") {
    return "#faa2c1";
  }
  if (category === "cosmethics") {
    return "#d0bfff";
  }
  if (category === "documents") {
    return "#a5d8ff";
  }
  if (category === "electronics") {
    return "#99e9f2";
  }
  if (category === "food") {
    return "#b2f2bb";
  }
  if (category === "other") {
    return "#ffec99";
  }
}
function List({ items, setItems }) {
  function removeItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <ul className={styles.list}>
      {items.map((item, i) => {
        return (
          <li className={styles.listItem} key={i}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemAmount}>{item.amount} pcs </span>
            <span
              className={styles.itemCategory}
              style={{ backgroundColor: getColor(item.category) }}
            >
              {item.category}
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => removeItem(item.id)}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
