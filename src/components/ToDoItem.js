import React from "react";
import { useState } from "react";
export const ToDoItem = ({ todo, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleChange = (event) => {
    setEditedTitle(event.target.value);
  };
  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-5 py-2">
      <button
        style={{ backgroundColor: "#E10032" }}
        className="text-white  px-2 rounded-lg"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
      <button onClick={handleIsEditing}>
        {isEditing ? (
          <button
            style={{ backgroundColor: "#DBE8E1", color: "#151B25" }}
            className="text-white  px-2 rounded-lg"
            onClick={() => handleEdit(todo.id, editedTitle)}
          >
            save
          </button>
        ) : (
          <button
            style={{ backgroundColor: "#DBE8E1", color: "#151B25" }}
            className=" px-2 rounded-lg"
          >
            Edit
          </button>
        )}
      </button>
      {isEditing ? (
        <input className="text-black" onChange={handleChange} type="text" />
      ) : (
        <p>{todo.title}</p>
      )}
    </div>
  );
};
