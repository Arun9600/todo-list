import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <>
      <Form todo={todo} setTodo={setTodo} formHandler={formHandler} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todo;
