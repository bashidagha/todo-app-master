import { useRef } from "react";
import "./todo.css";

const AddTodo = (props) => {
  const enteredTodo = useRef();

  const addTodoHandler = (event) => {
    event.preventDefault();

    props.setTodos((prevState) => {
      return [
        ...prevState,
        { todo: enteredTodo.current.value, status: "active" },
      ];
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
