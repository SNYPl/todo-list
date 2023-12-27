import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface Store {
  children: ReactNode;
}

interface MenuContextProps {
  choosedPage: string;
  setChoosedPage: Dispatch<SetStateAction<string>>;
  choosedPopUp: string;
  setChoosedPopUp: Dispatch<SetStateAction<string>>;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  searchname: string;
  setSearchname: Dispatch<SetStateAction<string>>;
}

interface Task {
  id: number;
  title: string;
  info: string;
  status: string;
}

export const MenuCtrx = createContext<MenuContextProps>({
  choosedPage: "tasks",
  setChoosedPage: () => {},
  choosedPopUp: "",
  setChoosedPopUp: () => {},
  tasks: [],
  setTasks: () => {},
  searchname: "",
  setSearchname: () => {},
});

export const MenuProvider: React.FC<Store> = ({ children }) => {
  const [choosedPage, setChoosedPage] = useState<string>("tasks");
  const [choosedPopUp, setChoosedPopUp] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchname, setSearchname] = useState<string>("");

  return (
    <MenuCtrx.Provider
      value={{
        choosedPage,
        setChoosedPage,
        choosedPopUp,
        setChoosedPopUp,
        tasks,
        setTasks,
        searchname,
        setSearchname,
      }}
    >
      {children}
    </MenuCtrx.Provider>
  );
};
