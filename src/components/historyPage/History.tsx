import React, { useContext } from "react";
import style from "./style.module.css";
import { MenuCtrx } from "../store/menuStore";
import Task from "../task/Task";

const HistoryPage: React.FC = () => {
  const { tasks, searchname } = useContext(MenuCtrx);

  return (
    <div className={style.historyPage}>
      {tasks
        .filter((task) => task.status === "completed")
        .filter((task) => {
          if (
            task.title.includes(searchname) ||
            task.info.includes(searchname)
          ) {
            return task;
          }
        })
        .map((el) => {
          return (
            <Task
              key={el.id}
              id={el.id}
              title={el.title}
              info={el.info}
              status={el.status}
            />
          );
        })}
    </div>
  );
};

export default HistoryPage;
