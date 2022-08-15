import React, { useContext } from "react";
import TodoContext from "../store/todo-context";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  const ctx = useContext(TodoContext);

  let showingTodos = ctx.todos;

  if (ctx.currentTab === "all") {
    showingTodos = ctx.todos;
  } else if (ctx.currentTab === "active") {
    showingTodos = ctx.todos.filter((todo) => todo.status === false);
  } else if (ctx.currentTab === "completed") {
    showingTodos = ctx.todos.filter((todo) => todo.status === true);
  }

  let lengthCompletedTodos = ctx.todos.filter(
    (todo) => todo.status === true
  ).length;

  return (
    <>
      {ctx.currentTab !== "completed" && <AddTodo />}

      {showingTodos.map((todo) => (
        <TodoItem
          title={todo.todo}
          status={todo.status}
          key={todo.id}
          id={todo.id}
        />
      ))}

      {ctx.currentTab === "completed" && lengthCompletedTodos > 0 && (
        <button className="btn-deleteall" onClick={ctx.removeCompletedTodoItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
          &nbsp;&nbsp;delete all
        </button>
      )}
    </>
  );
};

export default Todos;
