import { createContext, useState } from "react";

const TodoContext = createContext({
  todos: [],
  currentTab: "all",
  changeCurrentTabHandler: () => {},
  addTodoItem: () => {},
  removeTodoItem: () => {},
  changeStatusTodoItem: () => {},
  removeCompletedTodoItem: () => {},
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

  const removeCompletedTodoItem = () => {
    const filteredTodos = todos.filter((todo) => todo.status !== true);

    setTodos(filteredTodos);
  };

  const changeStatusTodoItem = (id) => {
    const updatedTodos = todos.map((x) =>
      x.id === id ? { ...x, status: !x.status } : x
    );

    // var foundIndex = todos.findIndex(x => x.id == item.id);

    // const foundTodo = todos[foundIndex]

    // setTodos((prevState)=>prevState[foundIndex]= )
    // tosdos[foundIndex] = item;

    setTodos(updatedTodos);

  };

  const context = {
    currentTab: currentTab,
    todos: todos,
    changeCurrentTabHandler: changeCurrentTabHandler,
    addTodoItem: addTodoItem,
    removeTodoItem: removeTodoItem,
    changeStatusTodoItem: changeStatusTodoItem,
    removeCompletedTodoItem: removeCompletedTodoItem,
  };

  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
