import { useState } from "react";
import styles from "./App.module.css";
import { FindBar } from "./FindBar";
import { Header } from "./Header";

function App() {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <FindBar />
      </div>
    </main>
  );
}

export default App;
