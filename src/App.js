import { useContext, useState } from "react";
import Todos from "./components/Todos";
import TodoContext from "./store/todo-context";

function App() {

  const ctx = useContext(TodoContext)

  return (
    <div className="container">
      <h1>#todo</h1>

      <ul className="tabs">
        <li
          className={ctx.currentTab === "all" ? "enable" : ""}
          onClick={() => ctx.changeCurrentTabHandler("all")}
        >
          All
        </li>
        <li
          className={ctx.currentTab === "active" ? "enable" : ""}
          onClick={() => ctx.changeCurrentTabHandler("active")}
        >
          Active
        </li>
        <li
          className={ctx.currentTab === "completed" ? "enable" : ""}
          onClick={() => ctx.changeCurrentTabHandler("completed")}
        >
          Completed
        </li>
      </ul>

      <Todos/>

    </div>
  );
}

export default App;
