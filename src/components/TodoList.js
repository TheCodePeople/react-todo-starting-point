import { useState } from "react";
import uuid4 from "uuid4";
import TodoItem from "./TodoItem";


function TodoList({ todoData }) {
    const [todoList, setTodoList] = useState(todoData);
    const [todoTitle, setTodoTitle] = useState("");

    const handleTextChange = (event) => {
        setTodoTitle(event.target.value);
    };

    const handleCreate = () => {
        if (todoTitle.trim() === "") {
            return;
        }
        const Task = {
            id: uuid4(),
            title: todoTitle,
            done: false
        }
        setTodoList([...todoList, Task]);
        setTodoTitle("");
    }

    const handleDelete = (todoId) => {
        setTodoList(todoList.filter((item) => item.id !== todoId));
    };

    const handleEditList = (editedText) => {
        setTodoList((todoList) =>
            todoList.map((item) =>
                item.id === editedText.id ? editedText : item
            )
        );
    }
    return (
        <div>
            <input type='text' onChange={handleTextChange} value={todoTitle} />
            <button onClick={handleCreate}>Add</button>
            {todoList.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleEditList={handleEditList}
                />
            ))}
        </div >
    );
}

export default TodoList;