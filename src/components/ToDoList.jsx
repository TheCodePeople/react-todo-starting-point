import { useState, useRef } from "react";
import uuid4 from "uuid4";
import TodoItem from "./TodoItem";
import ListTask from "./ListTask";

function ToDoList({ todoData }) {
  const [copyToDo, setcopyToDo] = useState(todoData);
  const [getToDo, setToDo] = useState(todoData);
  const [todoTitel, setToDoTitel] = useState("");
  const [search, setSearch] = useState("");
  const inputTitel = useRef();

  function handleTextChange(event) {
    setToDoTitel(event.target.value);
  }

  function handleTodoCreate() {
    const newToDoObj = {
      id: uuid4(),
      title: todoTitel,
      done: false,
    };
    setToDo([...getToDo, newToDoObj]);
    inputTitel.current.value = "";
  }

  function handleDelete(todoId) {
    setToDo(getToDo.filter((todo) => todo.id !== todoId));
  }
  function handleEdit(idTodo, newText) {
    setToDo(
      getToDo.map((todo) =>
        todo.id === idTodo ? { ...todo, title: newText } : todo
      )
    );
  }

  //###########################################
  const filterTodo = (text) => {
    const filterObjects = (text, todos) => {
      if (text == 1) {
        return todos.filter((item) => item.done == false);
      } else if (text == 2) {
        return todos.filter((item) => item.done == true);
      } else {
        return todos.slice(); // Return a copy of the original array if value is not 1 or 2
      }
    };

    const filteredTodos = filterObjects(text, copyToDo);
    setToDo(filteredTodos);
  };
  //################################

  return (
    <div className="contenr">
      <input
        ref={inputTitel}
        type="text"
        placeholder="Enter New ToDo"
        onChange={handleTextChange}
        className="input-title"
        // {...getToDo("title",{required:true})}
      ></input>

      <button onClick={handleTodoCreate} className="btn-add">
        Add
      </button>
      <div className="hadar">
        <input
          type="text"
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>

        <ListTask filterTodo={filterTodo} />
      </div>

      {getToDo
        .filter((todo) => {
          return search.toLowerCase() === ""
            ? todo
            : todo.title.toLowerCase().includes(search);
        })
        .map((todo, index) => (
          <TodoItem
            index={index}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            setToDo={setToDo}
          />
        ))}
    </div>
  );
}
export default ToDoList;
