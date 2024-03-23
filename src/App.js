import "./App.css";
import todoData from "./todoData";
import TodoList from "./components/Todolist";
// TODO: Import the todoData and pass it as a prop to the TodoList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Call the TodoList Component Here */}
        <TodoList todoData={todoData}/>

      </header>
    </div>
  );
}

export default App;
