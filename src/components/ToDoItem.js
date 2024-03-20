import React from "react";
import { useState } from "react";
export const ToDoItem = ({ todo, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");

  const handleChange = (event) => {
    setEditedTitle(event.target.value);
  };
  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-5 py-2">
      <button
        className="text-white bg-red-900 px-2 rounded-lg"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
      <button onClick={handleIsEditing}>
        {isEditing ? (
          <button
            className="text-white bg-red-900 px-2 rounded-lg"
            onClick={() => handleEdit(todo.id, editedTitle)}
          >
            save
          </button>
        ) : (
          <button className="bg-gray-500 px-2 rounded-lg">Edit</button>
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
