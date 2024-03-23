import React, { useState } from "react";

function TodoItem({ todo, handleDelete, Edit, handleToggle }) {
  const [isEditing, setisEditing] = useState(false);
  const [todoTitle, setTodoTitel] = useState(todo.title);
  const [todoDescription, setTodoDescription] = useState(todo.details);
  ///////////////////////////////////////////////////////////////
  const handelEdit = () => {
    setisEditing(true);
  };

  const handelEditChange = (e) => {
    setTodoTitel(e.target.value);
  };
  const handelDescriptionChange = (e) => {
    setTodoDescription(e.target.value);
  };

  const handelSave = () => {
    const updatedTodo = { ...todo, title: todoTitle, details: todoDescription };
    if (updatedTodo.title.trim() === "") {
      return;
    }

    Edit(updatedTodo);
    setisEditing(false);
  };
  /////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="bg-lightwhite p-2 w-full flex items-start justify-center rounded shadow-md">
      {isEditing ? (
        <div>
          <input onChange={handelEditChange} type="text" value={todoTitle} />
          <input
            onChange={handelDescriptionChange}
            type="text"
            value={todoDescription}
          />
          <sub onClick={handelSave}>Save</sub>
          <sub onClick={() => handleDelete(todo.id)}>Delete</sub>
        </div>
      ) : (
        <div className="flex flex-col items-start w-full justify-center">
          <h3 className="text-violet font-xl">{todo.title}</h3>
          <p className="text-grey">{todo.details}</p>
          <input
            className="self-end mr-6 mb-4 "
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => handleToggle(todo.id)}
          />

          <div className="self-end flex gap-4 p-4">
            <sub onClick={handelEdit}>Edit</sub>

            <sub onClick={() => handleDelete(todo.id)}>Delete</sub>
          </div>
        </div>
      )}
    </div>
  );
}
export default TodoItem;
