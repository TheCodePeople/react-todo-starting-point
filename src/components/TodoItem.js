import React, { useState } from "react";
import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";
import Animation from "./Animation";
function TodoItem({ todo, handleDelete, Edit, handleToggle, toggleAnimation }) {
  const [isEditing, setisEditing] = useState(false);
  const [todoTitle, setTodoTitel] = useState(todo.title);
  const [todoDescription, setTodoDescription] = useState(todo.details);
  const [isChecked, setIsChecked] = useState(todo.isComplete);
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
    <div className="w-full bg-lightwhite p-2 w-full flex items-start justify-center rounded shadow-md">
      {isEditing ? (
        <div className="flex flex-col gap-2 items-start w-full">
          <input
            className="text-violet h-10 w-full p-1 rounded-full text-grey hover:brightness-95 hover:transition-all	duration-300"
            onChange={handelEditChange}
            type="text"
            value={todoTitle}
            placeholder="What is the task?"
          />
          <input
            className="text-violet h-10 w-full p-1 rounded-full text-grey hover:brightness-95 hover:transition-all	duration-300"
            onChange={handelDescriptionChange}
            type="text"
            value={todoDescription}
            placeholder="What is the description?"
          />
          <div className="self-end flex justify-center aitems-center gap-6 p-4">
            <button
              className="text-sm bg-violet font-bold rounded-full p-2 text-white		"
              onClick={handelSave}
            >
              Save
            </button>
            <sub onClick={() => handleDelete(todo.id)}>
              {" "}
              <img className="w-6" src={trash} alt="trash-icon" />
            </sub>
          </div>
        </div>
      ) : (
        <div className="ml-4 flex flex-col items-start w-full justify-center gap-2">
          <div onClick={toggleAnimation}>{isChecked && <Animation />}</div>
          <h3 className="text-rose font-6xl">{todo.title}</h3>
          <p className="text-grey">{todo.details}</p>
          <p className="text-xs text-lightgrey italic">
            Assigned to: {todo.assignedto.label}
          </p>
          <input
            className="self-end mr-6 mb-4  w-6 h-6 border border-violet-300 rounded-md checked:bg-violet checked:border-transparent focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet relative"
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              handleToggle(todo.id);
              setIsChecked(!isChecked);
            }}
          />

          <div className="self-end flex aitems-center gap-6 p-4">
            <sub onClick={handelEdit}>
              <img className="w-6" src={edit} alt="React Logo" />
            </sub>

            <sub onClick={() => handleDelete(todo.id)}>
              <img className="w-6" src={trash} alt="trash-icon" />
            </sub>
          </div>
        </div>
      )}
    </div>
  );
}
export default TodoItem;
