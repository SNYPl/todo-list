import React, { useContext } from "react";
import style from "./style.module.css";
import Task from "../task/Task";
import AddTask from "./addTask/AddTask";
import { MenuCtrx } from "../store/menuStore";
import PopUp from "../popUp/PopUp";

const TasksPage: React.FC = () => {
  const { tasks, searchname, choosedPopUp } = useContext(MenuCtrx);

  return (
    <section className={style.taskPage}>
      {tasks
        .filter((task) => task.status === "incomplete")
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

      <AddTask />
    </section>
  );
};

export default TasksPage;
