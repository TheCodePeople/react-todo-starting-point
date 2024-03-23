import { useState } from "react";
import uuid4 from "uuid4";
import TodoItem from "./TodoItem";
/////////////////////////////////////////////////////////////////////
function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [decription, setDecription] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  //////////////////////////////////////////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handelChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handelDescription = (e) => {
    setDecription(e.target.value);
  };
  const handelClick = (e) => {
    if (newTodo.trim() === "") {
      return;
    }
    const newTodoObj = {
      id: uuid4(),
      title: newTodo,
      details: decription,
      isComplete: false,
    };
    setTodoList([...todoList, newTodoObj]);
    setNewTodo("");
    setDecription("");
  };

  const handleDelete = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };
  const handleEdit = (updatedTodo) => {
    setTodoList((TodoList) =>
      TodoList.map((todoItem) =>
        todoItem.id === updatedTodo.id ? updatedTodo : todoItem
      )
    );
  };
  const handleToggle = (Id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === Id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  const handleShowAll = () => {
    setShowCompleted(null);
  };

  const filteredTodos =
    showCompleted === false
      ? todoList.filter((todo) => !todo.isComplete)
      : showCompleted === true
      ? todoList.filter((todo) => todo.isComplete)
      : todoList;
  /////////////////////////////////////////////////////////////////////
  return (
    <div>
      <span>Start your day with a plan!!</span>
      <form
        className=" shadow-md flex items-start flex-col text-violet bg-darkwhite p-6  grow gap-2 w-90% m-2 mr-2 rounded-s "
        onSubmit={handleSubmit}
      >
        <label className="text-xl font-semibold" htmlFor="#todo">
          Task
        </label>
        <input
          className="h-10 w-full p-1 rounded-full text-grey hover:brightness-95 hover:transition-all	duration-300"
          id="todo"
          type="text"
          placeholder="What is the task for today?"
          onChange={handelChange}
          value={newTodo}
        />
        <label className="font-medium " htmlFor="#description">
          Description
        </label>
        <input
          className="h-10 w-full p-1 rounded-full text-grey hover:brightness-95 hover:transition-all	duration-300"
          id="description"
          type="text"
          placeholder="What is the task description?"
          onChange={handelDescription}
          value={decription}
        />
        <button
          className="bg-rose rounded-full h-12 w-12 self-end m-2 text-l font-bold text-center hover:scale-110 hover:transition-all	duration-500"
          onClick={handelClick}
        >
          +
        </button>
      </form>
      {/* //////////////////////////////////////////////////////////////// */}
      <div className="flex p-2">
        <button
          className="shadow-md bg-violet hover:brightness-75 hover:transition-all	duration-300 w-16 p-2 text-veryLight rounded-l	"
          onClick={handleShowAll}
        >
          All
        </button>
        <button
          className="shadow-md bg-violet hover:brightness-75 hover:transition-all	duration-300  w-auto p-2 text-veryLight"
          onClick={() => setShowCompleted(false)}
        >
          Uncompleted
        </button>
        <button
          className="shadow-md bg-violet hover:brightness-75 hover:transition-all	duration-300 w-auto p-2 text-veryLight pr-6 rounded-r"
          onClick={() => setShowCompleted(true)}
        >
          Completed
        </button>
      </div>
      <div className="flex p-2 flex-col items-start   gap-4">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            Edit={handleEdit}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
export default TodoList;
