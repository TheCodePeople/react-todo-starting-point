import React, { useState } from "react";
import uuid4 from "uuid4";
import ToDoItem from "./ToDoItem";

function ToDoList({ todoData }) {
  const [todoList, setToDoList] = useState(todoData);
  const [newTodo, setNewTodo] = useState("");

  const handleTextChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleTodoCreate = () => {
    if (newTodo === "") {
      return;
    }
    const newTodoObj = {
      id: uuid4(),
      title: newTodo,
      done: false,
    };
    setToDoList([...todoList, newTodoObj]);
    setNewTodo("");
  };

  const handleSendByEnter = (event) => {
    if (event.keyCode === 13) {
      handleTodoCreate();
    }
  };

  const handleDelete = (todoId) => {
    setToDoList(todoList.filter((todo) => todo.id !== todoId));
  };

  const handleEdit = (todoId, editedTitle) => {
    setToDoList(
      todoList.map((todo) =>
        todo.id === todoId ? { ...todo, title: editedTitle } : todo
      )
    );
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">To Do List:</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add new task"
          value={newTodo}
          onChange={handleTextChange}
          onKeyDown={handleSendByEnter}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleTodoCreate}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
        >
          Add
        </button>
      </div>
      {todoList.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList;
