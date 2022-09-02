import { useState } from "react";
import styles from "./App.module.css";
import { FindBar } from "./components/FindBar";
import { Header } from "./components/Header";

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
