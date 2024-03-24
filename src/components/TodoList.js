import { useState } from "react";
import uuid4 from "uuid4";
import TodoItem from "./TodoItem";

function TodoList({ todoData }) {
  //useState
  const [todoList, setTodoList] = useState(todoData);
  const [todoTitle, setTodoTitle] = useState("");

  //handle change for input
  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  //handle create for add click
  const handleCreate = () => {
    const TodoObject = {
      id: uuid4(),
      title: todoTitle,
      done: false,
    };
    setTodoList([...todoList, TodoObject]);
    setTodoTitle("");
  };

  //handle delete for delete click
  const handleDelete = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  //handle save for check id for new title  in save click in components todo item
  const handleSave = (todoId, newTitle) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === todoId ? { ...todo, title: newTitle } : todo
      )
    );
  };

  return (
    <div className="parent">
      <input
        id="add_input"
        type="text"
        placeholder="Enter New Todo"
        onChange={handleChange}
        value={todoTitle}
      />
      <button onClick={handleCreate}>Add</button>
      {todoList.map((todo) => (
        <TodoItem
          key={todoList.id}
          todo={todo}
          handleDelete={handleDelete}
          handleSave={handleSave}
        />
      ))}
    </div>
  );
}

export default TodoList;
