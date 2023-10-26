import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

function Form({ setItems, items }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);
  const [category, setCategory] = useState("");

  function addItem(name, amount, category) {
    setItems([...items, { name, amount, category, id: Date.now() }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addItem(name, amount, category);
    setName("");
    setAmount(1);
    setCategory("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      ></input>
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Please choose an option</option>
        <option value="clothes">Clothes</option>
        <option value="cosmethics">Cosmethics</option>
        <option value="documents">Documents</option>
        <option value="electronics">Electronics</option>
        <option value="food">Food</option>
        <option value="other">Other</option>
      </select>
      <Button text="Add"></Button>
    </form>
  );
}

export default Form;
