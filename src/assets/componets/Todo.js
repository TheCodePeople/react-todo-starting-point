import { useState } from "react";

import uuid4 from "uuid4";
import TodoItem from "./Todoitem";
import ssimg from "./img/search (1).png"

function TodoList({ tododata }) {
  const [todoList, setTodoList] = useState(tododata);
  const [newTodo, setNewTodo] = useState("");
  const [searchitem, setsearchitem] = useState("");

  const handleInput = (event) => {
    setNewTodo(event.target.value);
  };

  const createList = () => {
    const newTodoItem = {
      id: uuid4(),
      title: newTodo,
      done: false,
    };
    setTodoList([...todoList, newTodoItem]);
    setNewTodo("");
  };

  const deleteItem = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className=" w-{90%} h-full p-4 my-5 rounded-md overflow-y-auto">
      <div className="w-50 h-40 flex flex-col mb-20">
        <div className="flex  w-full m-2">
           <input
          type="text"
          value={newTodo}
          onChange={handleInput}
          placeholder="Add new task"
          className="w-full border border-gray-300 rounded text-black "
        />
        <button onClick={createList} className=" px-4 bg-green-400 text-white text-2xl rounded ">
          +
        </button>
        
        </div>
         <div className="flex  w-full m-2 bg-teal-600 h-1"></div>

         <div className="flex  w-full m-2">
           <input
          type="text"
          id="searchInput"
          value={searchitem}
          onChange={(event) => setsearchitem(event.target.value)}
          placeholder="Search tasks"
          className="w-full border border-gray-300 rounded text-black "
        />
                <label  className="mt-2"><img className="w-11" src={ssimg} alt="" /></label>

         </div>
       
      </div>

      {todoList.map((todo) => {
        if (todo.title.toLowerCase().includes(searchitem.toLowerCase())) {
          return <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} />;
        }
        return null;
      })}
    </div>
  );
}

export default TodoList;