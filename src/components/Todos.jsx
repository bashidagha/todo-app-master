import React from "react";
import AddTodo from "./AddTodo";

const Todos = (props) => {
  return (
    <>
      {props.currentTab !== "completed" && (
        <AddTodo setTodos={props.setTodos} />
      )}

      {props.todos.map((todo) => (
        <>{todo.todo}</>
      ))}
    </>
  );
};

export default Todos;
