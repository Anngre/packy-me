import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Packy Me 🌴</span>
    </div>
  );
}

export default Navbar;
