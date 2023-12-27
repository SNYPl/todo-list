import React, { ReactNode, useContext, useState } from "react";
import style from "./style.module.css";
import closeImg from "../../assets/images/close.svg";
import { MenuCtrx } from "../store/menuStore";
import Input from "../input/Input";
import Button from "../button/Button";

interface taskProps {
  title: string;
  onSubmitButton?: any;
  id?: number;
  taskTitle?: string;
  taskInfo?: string;
}

const PopUp: React.FC<taskProps> = ({
  title,
  onSubmitButton,
  id,
  taskTitle,
  taskInfo,
}) => {
  const { setChoosedPopUp } = useContext(MenuCtrx);
  const [name, setName] = useState(taskTitle || "");
  const [info, setInfo] = useState(taskInfo || "");

  return (
    <section className={style.overlay}>
      <article className={style.popUp}>
        <img
          src={closeImg}
          alt="close"
          onClick={() => setChoosedPopUp("")}
          className={style.close}
        />
        <div className={style.title}>
          <h2>{title}</h2>
        </div>
        <Input
          type="text"
          inputValue={name}
          value={name}
          setInputValue={setName}
          required
        />
        <Input
          type="text"
          className={style.textfieldInput}
          inputValue={info}
          setInputValue={setInfo}
          placeholder="Type task details here..."
          value={info}
          required
        />

        <Button
          onSubmitButton={() => {
            onSubmitButton(name, info, setName, setInfo, id);
          }}
        />
      </article>
    </section>
  );
};

export default PopUp;
