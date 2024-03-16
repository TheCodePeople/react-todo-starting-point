import React, { useState } from "react";

function TodoItem({ todo, handleDelete, Edit }) {
  const [isEditing, setisEditing] = useState(false);
  const [todoTitle, setTodoTitel] = useState(todo.title);

  const handelEdit = () => {
    setisEditing(true);
  };

  const handelEditChange = (e) => {
    setTodoTitel(e.target.value);
  };

  const handelSave = () => {
    const updatedTodo = { ...todo, title: todoTitle };
    if (updatedTodo.title.trim() === "") {
      return;
    }

    Edit(updatedTodo);
    setisEditing(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", columnGap: "20px" }}>
      {isEditing ? (
        <input onChange={handelEditChange} type="text" value={todoTitle} />
      ) : (
        <p>{todo.title}</p>
      )}

      <sub style={{ color: "red" }} onClick={() => handleDelete(todo.id)}>
        Delete
      </sub>

      {isEditing ? (
        <sub onClick={handelSave}>Save</sub>
      ) : (
        <sub onClick={handelEdit}>Edit</sub>
      )}
    </div>
  );
}
export default TodoItem;
