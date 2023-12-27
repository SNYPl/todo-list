import React, { useContext, useState } from "react";
import style from "./style.module.css";
import Input from "../input/Input";
import { MenuCtrx } from "../store/menuStore";

const Search: React.FC = () => {
  const { searchname, setSearchname } = useContext(MenuCtrx);

  return (
    <section className={style.search}>
      <Input
        type="search"
        placeholder="Search for notes"
        name="search"
        inputValue={searchname}
        setInputValue={setSearchname}
      />
    </section>
  );
};

export default Search;
