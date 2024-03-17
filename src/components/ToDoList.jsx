import { useState } from "react";
import uuid4 from "uuid4";
import TodoItem from "./TodoItem";
function ToDoList({ todoData }) {
  const [getToDo, setToDo] = useState(todoData);
  const [todoTitel, setToDoTitel] = useState("");

  function handleTextChange(event) {
    setToDoTitel(event.target.value);
  }

  function handleTodoCreate() {
    const newToDoObj = {
      id: uuid4(),
      title: todoTitel,
      done: false,
    };
    setToDo([...getToDo, newToDoObj]);
    setToDoTitel("");
  }

  function handleDelete(todoId) {
    setToDo(getToDo.filter((todo) => todo.id !== todoId));
  }
  function handleEdit(idTodo, newText) {
    setToDo(
      getToDo.map((todo) =>
        todo.id === idTodo ? { ...todo, title: newText } : todo
      )
    );
  }
  return (
    <div className="contenr">
      <img src="" />
      <input
        type="text"
        placeholder="Enter New ToDo"
        onChange={handleTextChange}
        className="input-title"
      ></input>
      <button onClick={handleTodoCreate} className="btn-add">
        Add
      </button>
      {getToDo.map((todo) => (
        <TodoItem
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}
export default ToDoList;
