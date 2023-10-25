import Button from "../Button/Button";
import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name"></input>
      <label htmlFor="amount">Amount:</label>
      <input type="text" name="amount"></input>
      <label htmlFor="category">Category:</label>
      <select id="category">
        <option value="">Please choose an option</option>
        <option value="clothes">Clothes</option>
        <option value="cosmethics">Cosmethics</option>
        <option value="documents">Documents</option>
        <option value="electronics">Electronics</option>
        <option value="other">Other</option>
      </select>
      <Button text="Add"></Button>
    </form>
  );
}

export default Form;
