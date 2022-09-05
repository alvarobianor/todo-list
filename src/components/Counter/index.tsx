import styles from "./styles.module.css";

type Props = {
  title: string;
  color?: "blue" | "purple";
  total?: number;
  concluded?: number;
};

export function Counter({
  title = "",
  color = "blue",
  total = 0,
  concluded,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <strong className={styles[color]}>{title}</strong>
      <div className={styles.containerValue}>
        <strong>
          {concluded != null && total > 0 ? `${concluded} de ${total}` : total}
        </strong>
      </div>
    </div>
  );
}
