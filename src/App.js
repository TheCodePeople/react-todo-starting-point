import "./App.css";
import TodoList from "./components/TodoList";
import todoData from "./todoData";
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
