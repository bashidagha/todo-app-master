import React, { useContext } from "react";
import TodoContext from "../store/todo-context";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todos = (props) => {

  const ctx = useContext(TodoContext)


  return (
    <>
      {ctx.currentTab !== "completed" && (
        <AddTodo />
      )}

      {ctx.todos.map((todo) => (
        <TodoItem
          title={todo.todo}
          status={todo.status}
          key={todo.id}
          id={todo.id}
        />
      ))}
    </>
  );
};

export default Todos;
