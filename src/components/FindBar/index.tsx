import styles from "./styles.module.css";
import { PlusCircle } from "phosphor-react";

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
          <PlusCircle size={18} weight="bold" />
        </button>
      </div>
    </form>
  );
}
