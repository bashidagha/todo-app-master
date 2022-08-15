import { createContext, useState } from "react";

const TodoContext = createContext({
  todos: [],
  currentTab: "all",
  changeCurrentTabHandler: () => {},
  addTodoItem: () => {},
  removeTodoItem: () => {},
  changeStatusTodoItem: () => {},
});

export function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");

  const changeCurrentTabHandler = (name) => {
    setCurrentTab(name);
  };

  const addTodoItem = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const removeTodoItem = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };

  const changeStatusTodoItem = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id === id);

    console.log(filteredTodo);
  };

  const context = {
    currentTab: currentTab,
    todos: todos,
    changeCurrentTabHandler: changeCurrentTabHandler,
    addTodoItem: addTodoItem,
    removeTodoItem: removeTodoItem,
    changeStatusTodoItem: changeStatusTodoItem,
  };

  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
