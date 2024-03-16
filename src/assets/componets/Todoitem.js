import React, { useState } from "react";

function TodoItem({ todo, deletitems }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleInputChange = (event) => {
    setNewTitle(event.target.value);
  };

 

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={handleInputChange}
          />
          <sub >Save</sub>
        </div>
      ) : (
        <div>
          <p key={todo.id}>{todo.title}</p>
          <sub onClick={() => deletitems(todo.id)} style={{ color: "red" }}>
            delete
          </sub>
          <sub onClick={handleEditClick}>Edit</sub>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
