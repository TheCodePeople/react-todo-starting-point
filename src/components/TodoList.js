import { useState } from "react";
import uuid4 from "uuid4";
import TodoItem from "./TodoItem";

function TodoList({ todoData }) {
  const [todoList, setTodoList] = useState(todoData);
  const [newTodo, setNewTodo] = useState("");

  const handelChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handelClick = () => {
    if (newTodo.trim() === "") {
      return;
    }
    const newTodoObj = {
      id: uuid4(),
      title: newTodo,
      done: false,
    };
    setTodoList([...todoList, newTodoObj]);
    setNewTodo(" ");
  };

  const handleDelete = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };
  const handleEdit = (updatedTodo) => {
    setTodoList((TodoList) =>
      TodoList.map((todoItem) =>
        todoItem.id === updatedTodo.id ? updatedTodo : todoItem
      )
    );
  };

  return (
    <div>
      <input type="text" onChange={handelChange} value={newTodo} />
      <button onClick={handelClick}>Add</button>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          Edit={handleEdit}
        />
      ))}
    </div>
  );
}
export default TodoList;
