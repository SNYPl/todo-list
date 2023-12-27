import React, { useEffect, useContext } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import Dashboard from "./components/dashboard/Dashboard";
import TasksPage from "./components/tasksPage/TasksPage";
import { MenuCtrx } from "./components/store/menuStore";
import HistoryPage from "./components/historyPage/History";
import { tasksSchema } from "./components/schema/task";

function App() {
  const { setTasks, choosedPage } = useContext(MenuCtrx);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    try {
      if (storedTasks) {
        const tasks = tasksSchema.parse(JSON.parse(storedTasks));
        setTasks(tasks);
      }
    } catch (error) {
      console.error("Invalid data format:", error);
    }

    if (storedTasks) {
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Profile />
      </header>
      <main>
        <Search />
        <Dashboard />
        {choosedPage === "tasks" && <TasksPage />}
        {choosedPage === "history" && <HistoryPage />}
      </main>
    </div>
  );
}

export default App;
