import { useContext } from "react";
import { ThemeContext, THEMES } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${styles.navbar} ${styles[theme]}`}>
      <span className={styles.logo}>Packy Me 🌴</span>
      <div className={styles.buttonsBox}>
        <div
          className={` ${styles.button} ${styles.buttonGreen}`}
          onClick={() => setTheme(THEMES.GREEN)}
        />
        <div
          className={`${styles.button} ${styles.buttonBlue}`}
          onClick={() => setTheme(THEMES.BLUE)}
        />
        <div
          className={`${styles.button} ${styles.buttonYellow}`}
          onClick={() => setTheme(THEMES.YELLOW)}
        />
      </div>
    </div>
  );
}

export default Navbar;
