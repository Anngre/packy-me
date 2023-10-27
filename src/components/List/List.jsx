import styles from "./List.module.css";
import Button from "../Button/Button";
import { useEffect } from "react";

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

  function groupItems() {
    const itemsToGroup = [...items];

    itemsToGroup.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (b.category < a.category) return 1;
      return 0;
    });

    setItems(itemsToGroup);
  }

  return (
    <ul className={styles.list}>
      <div className={styles.groupButtonBox}>
        <Button text="group" onClick={groupItems}></Button>
      </div>
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
