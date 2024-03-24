import React from "react";
import "./App.css";
// TODO: Import the todoData and pass it as a prop to the TodoList component
import ToDoList from "./Components/ToDoList.js";
import todoData from "./todoData.js";

function App() {
  return (
    <div className="App">
      <ToDoList todoData={todoData} />
    </div>
  );
}

export default App;
