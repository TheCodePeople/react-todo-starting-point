import React from "react";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDoItem } from "./ToDoItem";

function TodoList({ todoData }) {
  const [todoList, setTodoList] = useState(todoData);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");
  const [filtered, setFiltered] = useState([]);
  // Create
  const handleTextChange = (event) => {
    setNewTodo(event.target.value);
  };
  const clear = useRef();
  const handleTodoCreate = () => {
    let errors = "";
    if (!newTodo.trim()) {
      errors = "write something";
    } else if (/\d+/.test(newTodo)) {
      errors = "must not contain numbers";
    } else if (/\W+/.test(newTodo)) {
      errors = "must not contain symbols";
    } else {
      const newTodoObj = {
        id: uuidv4(),
        title: newTodo,
        done: false,
      };
      // Update the array to add the new item
      setTodoList([...todoList, newTodoObj]);
    }
    setError(errors);
    if (errors.length === 0) {
      clear.current.value = "";
    }
  };

  // Delete
  const handleDelete = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  // Edit
  const handleEdit = (todoId, editedTitle) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === todoId ? { ...todo, title: editedTitle } : todo;
      })
    );
  };

  // Search
  useEffect(() => {
    setFiltered(todoList);
  }, [todoList]);
  const handleSearch = (e) => {
    const filter = todoList.filter((todo) =>
      todo.title.toLowerCase().includes(e.target.value)
    );
    setFiltered(filter);
  };

  return (
    <div>
      <div id="search" className="flex flex-col pb-7 items-center px-16">
        <input
          style={{ backgroundColor: "#DBE8E1" }}
          type="text"
          className="text-black rounded-lg px-2 py-1"
          placeholder="Search"
          onInput={handleSearch}
        />
      </div>
      <div
        style={{ backgroundColor: "#034687" }}
        className=" p-5 rounded-lg flex justify-center flex-col"
      >
        {filtered.map((todo) => (
          <ToDoItem
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      <div id="Add" className="pt-7 flex justify-center gap-14">
        <div className="flex flex-col ">
          <input
            ref={clear}
            type="text"
            style={{ backgroundColor: "#DBE8E1" }}
            className="text-black rounded-lg px-2 py-1"
            placeholder="Enter your Data"
            onChange={handleTextChange}
          />
          {error && (
            <span
              style={{ color: "#E10032" }}
              className=" text-sm text-left pl-2"
            >
              {error}
            </span>
          )}
        </div>
        <div>
          <button
            style={{ backgroundColor: "#034687" }}
            className=" px-2 py-1 rounded-lg"
            onClick={handleTodoCreate}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
