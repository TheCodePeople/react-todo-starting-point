import { useState } from "react";
function TodoItem({ todo, handleDelete, handleSave }) {
  //useState
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  //handle Change Title
  const handleChangeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  //handle on save click
  const handleOnSave = () => {
    handleSave(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="container">
      {isEditing ? (
        <input
          className="newInput"
          type="text"
          value={newTitle}
          onChange={handleChangeTitle}
        />
      ) : (
        <p>{todo.title}</p>
      )}

      <div className="edit_container">
        {isEditing ? (
          <sub className="ph--check-fat-fill" onClick={handleOnSave}>
            save
          </sub>
        ) : (
          <sub className="ph--pencil-light" onClick={() => setIsEditing(true)}>
            Edit
          </sub>
        )}

        <sub className="ph--trash" onClick={() => handleDelete(todo.id)}>
          Delete
        </sub>
      </div>
    </div>
  );
}
export default TodoItem;
