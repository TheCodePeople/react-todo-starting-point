import React from "react";
import { useState } from "react";

function TodoItem({ todo, handleDelete, handleEdit }) {
  const [editText, setEditText] = useState(false);
  const [newEditText, setNewEditText] = useState(todo.title);
  const [done, setDone] = useState(todo.done);
  // copy text to Edit input
  function handlEdit(event) {
    setNewEditText(event.target.value);
  }
  // Edit the item
  function Editing() {
    handleEdit(todo.id, newEditText);
    setEditText(false);
  }
  //############################ not completed
  function handleDone() {
    console.log("1", done);
    setDone(!done);
    console.log("2", done);
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
        <p className="" onClick={handleDone}>
          {todo.title}
        </p>
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
