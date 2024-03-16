import { useState } from "react";

import uuid4 from "uuid4";
import TodoItem from "./Todoitem";
function TodoList({ tododata }) {
  const [todoList, setTodoList] = useState(tododata);
  const [newtodo, setnewtodo] = useState("");

  function handelinput(event) {
    setnewtodo(event.target.value);
  }
  function craeatlist() {
    const newTodo = {
      id: uuid4(),
      title: newtodo,
      done: false,
    };
    setTodoList([...todoList, newTodo]);
  }
  
  function deletitems(todoId) {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  }


  
  return (
    <div>
      <input type="text" onChange={handelinput} />
      <button onClick={craeatlist}>add</button>
      {todoList.map((todo) => (
        <TodoItem todo={todo} deletitems={deletitems} />
      ))}
    </div>
  );
}

export default TodoList;
