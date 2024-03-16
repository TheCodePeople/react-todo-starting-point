import "./App.css";
import todoData from "./todoData";
import TodoList from "./components/TodoList";

// TODO: Import the todoData and pass it as a prop to the TodoList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList todoData={todoData} />
      </header>
    </div>
  );
}

export default App;
