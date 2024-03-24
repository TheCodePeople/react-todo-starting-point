import React, { useState } from "react";
import Task from "./Task";

function TodoItem({ todoId, todo, handleDelete, handleEditList }) {
    const [isDone, setDone] = useState(todo.done);
    const [taskView, setTaskView] = useState(false);

    const handleDone = () => {
        setDone((prevDone) => !prevDone); // Use functional state update for consistency
        handleEditList({ ...todo, done: !isDone });
    };

    const handleView = () => {
        setTaskView((prevView) => !prevView); // Functional state update
    };

    return (
        <li key={todoId} className="flex items-center justify-between p-4 border-b border-gray-200 transition-colors hover:bg-gray-100">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={handleDone}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span
                    className={`ml-3 cursor-pointer ${isDone ? "line-through text-gray-400" : ""}`}
                    onClick={handleView}
                >
                    {todo.title}
                </span>
            </div>
            <button
                type="button"
                onClick={() => handleDelete(todoId)}
                className="text-sm text-red-500 hover:underline"
            >
                Delete
            </button>
            {taskView && (
                <Task
                    todo={todo}
                    taskView={taskView}
                    handleView={handleView}
                    handleEditList={handleEditList}
                />
            )}
        </li>
    );
}

export default TodoItem;
