import { useState } from "react";
import styles from "./App.module.css";
import { Board } from "./components/Board";
import { FindBar } from "./components/FindBar";
import { Header } from "./components/Header";
import { InfosEmptyList } from "./components/InfosEmptyList";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <FindBar />
        <Board />
        <InfosEmptyList />
      </div>
    </main>
  );
}

export default App;
