import "./App.css";
import todoData from "./todoData";
import TodoList from "./components/TodoList";
import LandingPage from "./components/LandingPage";

// TODO: Import the todoData and pass it as a prop to the TodoList component

function App() {
  return (
    <div>
      <LandingPage />
      <div className="p-[3rem]  flex justify-center align-center" >
        <TodoList todoData={todoData} />
      </div>
    </div>
  );
}

export default App;
