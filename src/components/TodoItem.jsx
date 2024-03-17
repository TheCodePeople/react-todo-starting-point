import React from "react";
import { useState } from "react";

function TodoItem({ todo, handleDelete, handleEdit }) {
  const [editText, setEditText] = useState(false);
  const [newEditText, setNewEditText] = useState(todo.title);
  // copy text to Edit input
  function handlEdit(event) {
    setNewEditText(event.target.value);
  }
  // Edit the item
  function Editing() {
    handleEdit(todo.id, newEditText);
    setEditText(false);
  }

  return (
    <div className="items">
      {editText ? (
        <input
          className="input-title"
          type="text"
          value={newEditText}
          onChange={handlEdit}
        />
      ) : (
        <p>{todo.title}</p>
      )}
      <div className="detels">
        {editText ? (
          <sub onClick={Editing}>
            <img
              id="save-img"
              src="https://cdn-icons-png.flaticon.com/128/8832/8832119.png"
            />
          </sub>
        ) : (
          <sub onClick={() => setEditText(true)}>
            <img
              id="edit-img"
              src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"
            />
          </sub>
        )}
        <sub onClick={() => handleDelete(todo.id)}>
          <img
            id="delete-img"
            src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
          />
        </sub>
      </div>
    </div>
  );
}
export default TodoItem;
