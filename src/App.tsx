import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Board } from "./components/Board";
import { FindBar } from "./components/FindBar";
import { Header } from "./components/Header";
import { ContentInfos } from "./components/ContentInfos";
import { Task } from "./components/Task";
import { KEY } from "./Utils/constants";
import uuid from "react-uuid";

export type TaskType = {
  id: string;
  isDone: boolean;
  description: string;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem(KEY) as string) as TaskType[]);
  }, []);

  function handleToggleStatusTask(id: string) {
    const taskIndex = tasks.findIndex((item) => item.id === id);
    const updatedTasks = [...tasks];

    updatedTasks[taskIndex].isDone = !updatedTasks[taskIndex].isDone;

    localStorage.setItem(KEY, JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter((item) => item.id !== id);

    localStorage.setItem(KEY, JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  function handleCreateTask(description: string) {
    const updatedTasks = [...tasks];

    updatedTasks.push({
      id: uuid(),
      description,
      isDone: false,
    });

    localStorage.setItem(KEY, JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <FindBar onCreateTask={handleCreateTask} />
        <Board />
        <ContentInfos>
          {tasks.length == 0
            ? null
            : tasks.map((item) => {
                return (
                  <Task
                    key={item.id}
                    allTasks={tasks}
                    task={item}
                    onToggleStatusTask={handleToggleStatusTask}
                    onDeleteTask={handleDeleteTask}
                  />
                );
              })}
          {/* <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task /> */}
        </ContentInfos>
      </div>
    </main>
  );
}

export default App;
