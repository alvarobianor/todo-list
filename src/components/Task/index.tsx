import styles from "./styles.module.css";
import { Circle, CheckCircle, TrashSimple } from "phosphor-react";

export function Task() {
  return (
    <div>
      <div>
        <Circle />
        <p>text</p>
        <TrashSimple />
      </div>
    </div>
  );
}
