import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDoItem } from "./ToDoItem";

function TodoList({ todoData }) {
  const [todoList, setTodoList] = useState(todoData);
  const [newTodo, setNewTodo] = useState("");

  const handleTextChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleTodoCreate = () => {
    const newTodoObj = {
      id: uuidv4(),
      title: newTodo,
      done: false,
    };
    // Update the array to add the new item
    setTodoList([...todoList, newTodoObj]);
  };
  const handleDelete = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  const handleEdit = (todoId, editedTitle) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === todoId ? { ...todo, title: editedTitle } : todo;
      })
    );
  };

  return (
    <div>
      <div className="pb-5 flex justify-center gap-14">
        <input
          type="text"
          className="text-black rounded-lg px-2"
          placeholder="Enter your Data"
          onChange={handleTextChange}
        />
        <button
          className="bg-slate-400 p-2 px-3 rounded-lg"
          onClick={handleTodoCreate}
        >
          Add
        </button>
      </div>
      <div className="bg-gray-600 p-5 rounded-lg flex justify-center flex-col">
        {todoList.map((todo) => (
          <ToDoItem
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
