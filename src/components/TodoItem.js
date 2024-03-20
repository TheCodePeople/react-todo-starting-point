import { useState } from "react";
function TodoItem({ todo, handleDelete, handleSave }) {
  //useState
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [isComplete, setIsComplete] = useState(false);

  //handle Change Title
  const handleChangeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  //handle on save click
  const handleOnSave = () => {
    handleSave(todo.id, newTitle);
    setIsEditing(false);
  };

  const handleComplete = () => {
    setIsComplete(!isComplete);
  };
  return (
    <div className="container">
      <div className="title-container">
        <input type="checkbox" onClick={handleComplete} />
        {isEditing ? (
          <input
            className="newInput"
            type="text"
            value={newTitle}
            onChange={handleChangeTitle}
          />
        ) : (
          <p
            style={
              isComplete
                ? { textDecorationLine: "line-through" }
                : { textDecorationLine: "none" }
            }
          >
            {todo.title}
          </p>
        )}
      </div>

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
