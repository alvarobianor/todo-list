import { Counter } from "../Counter";
import styles from "./styles.module.css";

export function Board() {
  return (
    <nav className={styles.wrapper}>
      <Counter title="Alvaro" color="purple" />
      <Counter title="Alvaro" color="purple" />
    </nav>
  );
}
