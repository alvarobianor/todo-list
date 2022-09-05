import styles from "./styles.module.css";
import { BiCircle } from "react-icons/bi";
import { math } from "polished";
import { FaCheckCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

export function Task() {
  const random = Number(Math.random()) * 10 > 5 ? true : false;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.containerIconTask}>
          {/*  TODO remove this */}
          {random ? (
            <BiCircle size={24} className={styles.iconCircle} />
          ) : (
            <FaCheckCircle size={24} className={styles.iconCheckCircle} />
          )}
        </button>
        <div className={styles.descriptionTask}>
          <p className={random ? styles.textToDo : styles.textDone}>
            Lorem dolor
          </p>
        </div>
        <button className={styles.iconDeleteTask}>
          <FiTrash2 size={24} />
        </button>
      </div>
    </div>
  );
}
