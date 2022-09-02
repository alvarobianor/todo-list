import { useState } from "react";
import styles from "./App.module.css";
import { Board } from "./components/Board";
import { FindBar } from "./components/FindBar";
import { Header } from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <FindBar />
        <Board />
      </div>
    </main>
  );
}

export default App;
