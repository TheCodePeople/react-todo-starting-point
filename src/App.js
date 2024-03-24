import ToDoList from "./component/ToDoList"
import todoData from "./todoData";
function App() {
  return (
    <div>
      <header className="App-header">
        <ToDoList todoData={todoData} />

      
       
      </header>
    </div>
  );
}

export default App;
