import styles from "./styles.module.css";
import { BiCircle } from "react-icons/bi";
import { math } from "polished";
import { FaCheckCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

export function Task() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          {/*  TODO remove this */}
          {(Number(Math.random()) * 10 > 5 ? true : false) ? (
            <BiCircle size={24} className={styles.iconCircle} />
          ) : (
            <FaCheckCircle size={24} className={styles.iconCheckCircle} />
          )}
        </div>
        <div className={styles.descriptionTask}>
          <p>Lorem dolor</p>
        </div>
        <div className={styles.iconDeleteTask}>
          <FiTrash2 size={24} />
        </div>
      </div>
    </div>
  );
}
