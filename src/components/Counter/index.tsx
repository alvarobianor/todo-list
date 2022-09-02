import styles from "./styles.module.css";

type Props = {
  title: string;
  color?: "blue" | "purple";
  value?: number;
};

export function Counter({ title = "", color = "blue", value = 0 }: Props) {
  return (
    <div className={styles.wrapper}>
      <strong className={styles[color]}>{title}</strong>
      <div className={styles.containerValue}>
        <strong>{value}</strong>
      </div>
    </div>
  );
}
