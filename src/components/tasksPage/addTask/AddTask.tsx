import React, { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import closeImg from "../../../assets/images/addTask.svg";
import { MenuCtrx } from "../../store/menuStore";
import PopUp from "../../popUp/PopUp";

interface Task {
  id: number;
  title: string;
  info: string;
  status: string;
}

const Task: React.FC = () => {
  const { choosedPopUp, setChoosedPopUp, setTasks } = useContext(MenuCtrx);

  const onSubmitButton = (
    title: string,
    info: string,
    setEmptyName: any,
    setEmptyInfo: any,
    id: number
  ) => {
    setTasks((prevTasks) => {
      const updatedTasks = [
        ...prevTasks,
        { id: id, title: title, info: info, status: "incomplete" },
      ];

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return updatedTasks;
    });
    setEmptyName("");
    setEmptyInfo("");
  };

  return (
    <>
      {choosedPopUp === "add" && (
        <PopUp
          title="Create Task"
          onSubmitButton={onSubmitButton}
          id={Date.now()}
        />
      )}

      <article className={style.addBtn}>
        <img src={closeImg} alt="add" onClick={() => setChoosedPopUp("add")} />
      </article>
    </>
  );
};

export default Task;
