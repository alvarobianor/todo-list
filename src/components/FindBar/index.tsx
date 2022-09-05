import styles from "./styles.module.css";
import { FiPlusCircle } from "react-icons/fi";

export function FindBar() {
  function handleSubmit() {
    event?.preventDefault();
  }
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input type="text" className={styles.findBar} />
      <div className={styles.boxButton}>
        <button type="submit" className={styles.submitButton}>
          Criar
          <FiPlusCircle size={18} />
        </button>
      </div>
    </form>
  );
}
