import { useEffect } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Form from "../Form/Form";
import List from "../List/List";
import styles from "./Main.module.css";

function Main() {
  const [error, setError] = useState(null);

  const storedItems = useMemo(function () {
    try {
      return JSON.parse(localStorage.getItem("items"));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const [items, setItems] = useState(storedItems || []);
  const { theme, themeError } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  if (error || themeError) return <div>{error || themeError}</div>;

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <h1>Add your item to the bag!</h1>
      <Form items={items} setItems={setItems} />
      {items.length !== 0 ? <List items={items} setItems={setItems} /> : null}
    </div>
  );
}

export default Main;
