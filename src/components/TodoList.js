import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import TodoItem from "./TodoItem";
import ListTabs from "./ListTabs";
import Animation from "./Animation";
import DropdownMenu from "./DropdownMenu";
/////////////////////////////////////////////////////////////////////
function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [decription, setDecription] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  // const [assignedfor, setAssignedfor] = useState(null);
  let isChecked = null;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  //////////////////////////////////////////////////////////////////////////
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const toggleAnimation = () => {
    setShowAnimation(!showAnimation);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handelChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handelDescription = (e) => {
    setDecription(e.target.value);
  };
  useEffect(() => {
    let savedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (savedTodoList) {
      setTodoList(savedTodoList);
    }
  }, []);
  const handelClick = (e) => {
    setSelectedOption(null);
    if (newTodo.trim() === "") {
      return;
    }
    const newTodoObj = {
      id: uuid4(),
      title: newTodo,
      details: decription,
      isComplete: false,
      assignedto: selectedOption,
    };
    setTodoList((oldTodoList) => {
      const newArray = [...oldTodoList, newTodoObj];
      localStorage.setItem("todoList", JSON.stringify(newArray));
      return newArray;
    });
    setNewTodo("");
    setDecription("");
  };

  const handleDelete = (todoId) => {
    setTodoList((oldTodoList) => {
      const oldArray = oldTodoList.filter((todo) => todo.id !== todoId);
      localStorage.setItem("todoList", JSON.stringify(oldArray));
      return oldArray;
    });
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
  console.log(todoList);
  const filteredTodos =
    showCompleted === false
      ? todoList.filter((todo) => !todo.isComplete)
      : showCompleted === true
      ? todoList.filter((todo) => todo.isComplete)
      : todoList;
  /////////////////////////////////////////////////////////////////////
  return (
    <div>
      {showAnimation && <Animation />}
      <span className="text-violet font-semibold tracking-tight flex items-start text-3xl m-6">
        Start Your Day with Plan!!
      </span>
      <form
        className=" shadow-md flex items-start flex-col text-violet bg-darkwhite p-6  grow gap-2 w-90% m-2 mr-2 rounded-s "
        onSubmit={handleSubmit}
      >
        <label className="text-xl font-semibold" htmlFor="#todo">
          Task
        </label>
        <input
          className=" h-10 w-full p-1 rounded-full text-grey hover:brightness-95 hover:transition-all	duration-300"
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
        <DropdownMenu
          isOpen={isOpen}
          selectedOption={selectedOption}
          toggleDropdown={toggleDropdown}
          handleOptionClick={handleOptionClick}
        />
        <button
          className="bg-rose rounded-full h-12 w-12 self-end m-2 text-l font-bold text-center hover:scale-110 hover:transition-all	duration-500"
          onClick={handelClick}
        >
          +
        </button>
      </form>
      {/* //////////////////////////////////////////////////////////////// */}
      <ListTabs
        handleShowAll={handleShowAll}
        setShowCompleted={setShowCompleted}
      />
      <div className="flex p-2 flex-col items-start   gap-4">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            Edit={handleEdit}
            handleToggle={handleToggle}
            isChecked={isChecked}
            toggleAnimation={toggleAnimation}
          />
        ))}
      </div>
    </div>
  );
}
export default TodoList;
