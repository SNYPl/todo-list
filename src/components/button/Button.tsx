import React from "react";
import style from "./style.module.css";

interface buttonProps {
  onSubmitButton: any;
}

const Button: React.FC<buttonProps> = ({ onSubmitButton, ...props }) => {
  return (
    <article className={style.button}>
      <button onClick={onSubmitButton} {...props}>
        Save
      </button>
    </article>
  );
};

export default Button;
