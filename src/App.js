import "./App.css";

import ToDoList from "./components/ToDoList";
import todoData from "./todoData";
// TODO: Import the todoData and pass it as a prop to the TodoList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Call the TodoList Component Here */}

        <ToDoList todoData={todoData} />
      </header>
    </div>
  );
}

export default App;
