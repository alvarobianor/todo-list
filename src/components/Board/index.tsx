import { Counter } from "../Counter";
import styles from "./styles.module.css";

export function Board() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <Counter title="Tarefas criadas" color="blue" />
        <Counter title="Concluídas" color="purple" />
      </section>
    </div>
  );
}
