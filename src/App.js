import "./App.css";
import todoData from "./todoData";
import TodoList from "./components/TodoList";

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
