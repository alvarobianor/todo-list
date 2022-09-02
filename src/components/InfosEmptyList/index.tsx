import styles from "./styles.module.css";
import { ClipboardText } from "phosphor-react";
export function InfosEmptyList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ClipboardText size={56} />
        <section className={styles.section}>
          <strong className={styles.title}>
            Você ainda não tem tarefas cadastradas
          </strong>
          <p className={styles.subject}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </section>
      </div>
    </div>
  );
}
