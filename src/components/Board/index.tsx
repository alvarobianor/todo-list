import { TaskType } from "../../App";
import { Counter } from "../Counter";
import styles from "./styles.module.css";
type Props = {
  tasks: TaskType[];
};
export function Board({ tasks }: Props) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <Counter title="Tarefas criadas" color="blue" total={tasks.length} />
        <Counter
          title="Concluídas"
          color="purple"
          concluded={tasks.filter((item) => item.isDone === true).length}
          total={tasks.length}
        />
      </section>
    </div>
  );
}
