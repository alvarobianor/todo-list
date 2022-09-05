import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import styles from "./styles.module.css";
type Props = {
  onCreateTask: (description: string) => void;
};
export function FindBar({ onCreateTask }: Props) {
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onCreateTask(description);
    setDescription("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setDescription(event.target.value);
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.findBar}
        value={description}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
      />
      <div className={styles.boxButton}>
        <button type="submit" className={styles.submitButton}>
          Criar
          <FiPlusCircle size={18} />
        </button>
      </div>
    </form>
  );
}
