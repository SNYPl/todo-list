import React, { useContext } from "react";
import style from "./style.module.css";
import taskImg from "../../assets/images/tasksImg.svg";
import historyImg from "../../assets/images/historyImg.svg";
import { MenuCtrx } from "../store/menuStore";

const Dashboard: React.FC = () => {
  const { choosedPage, setChoosedPage, setTasks, tasks } = useContext(MenuCtrx);

  const clearTasks = () => {
    if (choosedPage === "tasks") {
      const removedTasks = tasks.filter((task) => task.status !== "incomplete");

      setTasks(removedTasks);
      localStorage.setItem("tasks", JSON.stringify(removedTasks));
    } else if (choosedPage === "history") {
      const removedHistoryTasks = tasks.filter(
        (task) => task.status !== "completed"
      );

      setTasks(removedHistoryTasks);
      localStorage.setItem("tasks", JSON.stringify(removedHistoryTasks));
    }
  };

  return (
    <section className={style.dashboard}>
      <section className={style.dashboardMenu}>
        <article className={`${style.taskBtn} ${style.menuBtn}`}>
          <p>Tasks</p>
          <img
            src={taskImg}
            alt="tasks"
            className={`${choosedPage === "tasks" ? style.activeBtnColor : ""}`}
            onClick={() => setChoosedPage("tasks")}
          />
        </article>
        <article className={`${style.historyBtn} ${style.menuBtn}`}>
          <p>History</p>
          <img
            src={historyImg}
            alt="history"
            className={`${
              choosedPage === "history" ? style.activeBtnColor : ""
            }`}
            onClick={() => setChoosedPage("history")}
          />
        </article>
      </section>
      <article className={style.clearBtn} onClick={clearTasks}>
        <p>Clear all Tasks</p>
      </article>
    </section>
  );
};

export default Dashboard;
