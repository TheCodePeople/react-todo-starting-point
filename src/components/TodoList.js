import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTask from "./AddTask";

function TodoList({ todoData }) {
    const options = ["All", "Active", "Completed"];

    const [todoList, setTodoList] = useState(todoData);
    const [listType, setType] = useState("All");
    const [filteredList, setFilteredList] = useState(todoList);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const searchList = todoList.filter((todo) => {
            return todo.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(searchList);
    };

    const handleDelete = (todoId) => {
        console.log(todoId);
        const updatedList = todoList.filter((item) => item.id !== todoId);
        console.log(updatedList);
        setTodoList(updatedList);

        if (listType === "Completed") {
            setFilteredList(updatedList.filter(todo => todo.done));
        } else if (listType === "Active") {
            setFilteredList(updatedList.filter(todo => !todo.done));
        } else {
            setFilteredList(updatedList);
        }
    };

    const handleEditList = (updatedTask) => {
        console.log(todoList);
        console.log(updatedTask);
        setTodoList((todoList) =>
            todoList.map((todo) =>
                todo.id === updatedTask.id ? updatedTask : todo
            )
        );
        console.log(todoList);

    };

    const handleSelect = (type) => {
        setType(type);
        if (type === "All") {
            setFilteredList(todoList);
        } else if (type === "Completed") {
            setFilteredList(todoList.filter(todo => todo.done));
        } else if (type === "Active") {
            setFilteredList(todoList.filter(todo => !todo.done));
        }
    }

    return (
        <div className="relative z-10 container mx-auto px-4 md:px-10">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-gray-900">T O D O</h1>
                    <AddTask
                        todoList={todoList}
                        setTodoList={setTodoList}
                        listType={listType}
                        setFilteredList={setFilteredList}
                    />
                </div>
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ul className="flex justify-center items-center gap-10 mb-4">
                    {options.map((type, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(type)}
                            className={`cursor-pointer text-gray-600 hover:text-gray-900 ${listType === type ? "font-bold text-blue-600" : ""
                                }`}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
                {
                    filteredList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todoId={todo.id}
                            todo={todo}
                            handleDelete={handleDelete}
                            handleEditList={handleEditList}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TodoList;
