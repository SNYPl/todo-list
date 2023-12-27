import React, { InputHTMLAttributes, useState } from "react";
import style from "./style.module.css";
import searchImg from "../../assets/images/search.svg";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  inputValue: string;
  setInputValue: any;
}

const Input: React.FC<inputProps> = ({
  type,
  inputValue,
  setInputValue,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  if (props.name === "search") {
    return (
      <div className={style.input}>
        <input
          type={type}
          {...props}
          onChange={(e: any) => setInputValue(e.target.value)}
        />
        <img src={searchImg} alt="search" className={style.searchImg} />
      </div>
    );
  }

  return (
    <div
      className={`${style.inputContainer} ${props.className} ${
        isFocused || inputValue ? style.focused : ""
      }`}
    >
      <label className={`${style.inputLabel}`}>Task Name</label>
      <input
        type="text"
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e: any) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
