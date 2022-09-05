import styles from "./styles.module.css";
import { BiCircle } from "react-icons/bi";
import { math } from "polished";
import { FaCheckCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { TaskType } from "../../App";

type Props = {
  task: TaskType;
  allTasks: TaskType[];
  onToggleStatusTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export function Task({
  task: { id, description, isDone },
  onToggleStatusTask,
  onDeleteTask,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button
          className={styles.containerIconTask}
          onClick={() => onToggleStatusTask(id)}
        >
          {isDone ? (
            <BiCircle size={24} className={styles.iconCircle} />
          ) : (
            <FaCheckCircle size={24} className={styles.iconCheckCircle} />
          )}
        </button>
        <div className={styles.descriptionTask}>
          <p className={isDone ? styles.textToDo : styles.textDone}>
            {description}
          </p>
        </div>
        <button
          className={styles.iconDeleteTask}
          onClick={() => onDeleteTask(id)}
        >
          <FiTrash2 size={24} />
        </button>
      </div>
    </div>
  );
}
