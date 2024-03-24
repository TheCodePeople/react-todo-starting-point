import { useState } from "react";
import uuid4 from "uuid4";
import TodoItem from "./Todoitem";

function ToDoList({ todoData }) {
  const [toDoList, setToDoList] = useState(todoData);
  const [newTodo, setCreatList] = useState("");

  const handeltextchange = (event) => {
    setCreatList(event.target.value);
  };

  const handelToDo = () => {
    const newToDoObj = {
      id: uuid4,
      title: newTodo,
      done: false,
    };
    setToDoList([...toDoList, newToDoObj]);
    setCreatList("");
  };
  const handelDelete = (todoid) => {
    setToDoList(toDoList.filter((todo) => todo.id !== todoid));
  };
  const handleSave = (todoId, editedTitle) => {
    setToDoList(
      
      toDoList.map((todo) =>
        todo.id === todoId ? { ...todo, title: editedTitle } : todo
      )
    );
  };

  return (
    <div className="flex flex-col content-center items-center p-10  text-org	 ">
      
      <div className="bg-white p-10 rounded-xl shadow-xl">

        <input
          type="text"
          onChange={handeltextchange}
          value={newTodo}
          className="rounded-xl w-9/12 ml-10 text-black border-2 border-org h-10"
          placeholder="    add task here!!!"
        ></input>
        <button onClick={handelToDo} className="ml-1 px-3 bg-org text-white rounded-xl text-center h-9 hover:h-10">
          Add
        </button>
        {toDoList.map((todo) => (
          <TodoItem
            todo={todo}
            handelDelete={handelDelete}
            handleSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
