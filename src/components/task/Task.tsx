import React, { useContext, useState } from "react";
import style from "./style.module.css";
import arrowImg from "../../assets/images/arrow.svg";
import editImg from "../../assets/images/edit.svg";
import deleteImg from "../../assets/images/delete.svg";
import successImg from "../../assets/images/success.svg";
import PopUp from "../popUp/PopUp";
import { MenuCtrx } from "../store/menuStore";

interface Task {
  id: number;
  title: string;
  info: string;
  status: string;
}

const Task: React.FC<Task> = ({ id, title, info, status }) => {
  const [showInfo, setShowInfo] = useState(true);
  const { choosedPopUp, setChoosedPopUp, tasks, setTasks } = useContext(
    MenuCtrx
  );
  const [editedTaskId, setEditedTaskId] = useState<number>();

  const onSubmitButton = (
    newTitle = title,
    newInfo = info,
    setEmptyName: any,
    setEmptyInfo: any
  ) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editedTaskId) {
        return {
          ...task,
          title: newTitle,
          info: newInfo,
        };
      } else {
        return task;
      }
    });

    setEmptyName(newTitle);
    setEmptyInfo(newInfo);

    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleTask = () => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);

    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  const statusChangehandler = () => {
    const statusChangeTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: "completed",
        };
      } else {
        return task;
      }
    });

    setTasks(statusChangeTasks);

    localStorage.setItem("tasks", JSON.stringify(statusChangeTasks));
  };

  return (
    <>
      {choosedPopUp === "edit" && editedTaskId === id && (
        <PopUp
          title="Edit task name"
          onSubmitButton={onSubmitButton}
          id={editedTaskId}
          taskTitle={title}
          taskInfo={info}
        />
      )}
      <article className={`${style.task} ${!showInfo && style.shorted}`}>
        <div className={style.taskTitle}>
          <div className={style.titleSection}>
            <h2>{title}</h2>
            {status === "completed" && !showInfo && (
              <img src={successImg} alt="success" />
            )}
          </div>

          <img
            src={arrowImg}
            alt="arrow"
            onClick={() => setShowInfo(!showInfo)}
            className={` ${showInfo ? "" : style.rotateArrow}`}
          />
        </div>

        {showInfo && (
          <div className={`${style.taskInfo} `}>
            <p>{info}</p>
          </div>
        )}

        <article className={style.taskMenu}>
          <div className={style.menuItems}>
            {status !== "completed" && (
              <img
                src={editImg}
                alt="edit"
                onClick={() => {
                  setEditedTaskId(id);
                  setChoosedPopUp("edit");
                }}
              />
            )}
            <img
              src={deleteImg}
              alt="delete"
              onClick={deleTask}
              className={`${
                status === "completed" && !showInfo
                  ? style.historyTaskhidden
                  : ""
              }`}
            />
          </div>
          <div
            className={`${style.successItem} ${
              status === "completed" && !showInfo ? style.historyTaskhidden : ""
            } `}
            onClick={statusChangehandler}
          >
            <p>{status !== "completed" ? "Mark complete" : "Completed"}</p>
            <img src={successImg} alt="success" />
          </div>
        </article>
      </article>
    </>
  );
};

export default Task;
