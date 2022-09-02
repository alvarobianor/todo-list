import { useState } from "react";
import styles from "./App.module.css";
import { Board } from "./components/Board";
import { FindBar } from "./components/FindBar";
import { Header } from "./components/Header";
import { ContentInfos } from "./components/ContentInfos";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <FindBar />
        <Board />
        <ContentInfos></ContentInfos>
      </div>
    </main>
  );
}

export default App;
