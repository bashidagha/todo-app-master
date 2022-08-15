import { useContext, useRef } from "react";
import TodoContext from "../store/todo-context";
import "./todo.css";

const AddTodo = (props) => {
  const enteredTodo = useRef();
  const ctx = useContext(TodoContext);

  const addTodoHandler = (event) => {
    event.preventDefault();

    ctx.addTodoItem({
      todo: enteredTodo.current.value,
      status: "active",
      id: ctx.todos.length + 1,
    });
  };

  return (
    <form className="addtodo" onSubmit={addTodoHandler}>
      <input placeholder="add details" type="text" ref={enteredTodo}></input>

      <button className="btn-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
