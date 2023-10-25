import Form from "../Form/Form";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <h1>Add your item to the bag!</h1>
      <Form />
    </div>
  );
}

export default Main;
