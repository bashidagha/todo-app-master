import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [enableTab, setEnableTab] = useState("all");

  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>#todo</h1>

      <ul className="tabs">
        <li
          className={enableTab === "all" ? "enable" : ""}
          onClick={() => setEnableTab("all")}
        >
          All
        </li>
        <li
          className={enableTab === "active" ? "enable" : ""}
          onClick={() => setEnableTab("active")}
        >
          Active
        </li>
        <li
          className={enableTab === "completed" ? "enable" : ""}
          onClick={() => setEnableTab("completed")}
        >
          Completed
        </li>
      </ul>

      <Todos todos={todos} setTodos={setTodos} currentTab={enableTab}/>

    </div>
  );
}

export default App;
