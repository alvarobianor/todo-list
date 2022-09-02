import styles from "./styles.module.css";
import { ClipboardText } from "phosphor-react";

type Props = {
  children?: React.ReactNode;
};

export function ContentInfos({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {children ? (
          children
        ) : (
          <div className={styles.box}>
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
        )}
      </div>
    </div>
  );
}
