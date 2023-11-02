import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Form from "../Form/Form";
import List from "../List/List";
import styles from "./Main.module.css";

function Main() {
  const [items, setItems] = useState([]);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <h1>Add your item to the bag!</h1>
      <Form items={items} setItems={setItems} />
      {items.length !== 0 ? <List items={items} setItems={setItems} /> : null}
    </div>
  );
}

export default Main;
