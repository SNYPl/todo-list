import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MenuProvider } from "./components/store/menuStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>
);
