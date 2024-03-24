import React, { useState } from 'react';
import uuid4 from 'uuid4';
import { users } from "../usersData"

function AddTask({ todoList, setTodoList, listType, setFilteredList }) {
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() + 3)

    const [isOpen, setIsOpen] = useState(false);
    const [todoTitle, setTitle] = useState("");
    const [todoLevel, setLevel] = useState("");
    const [todoUser, setUser] = useState(null);
    const [todoStart, setStart] = useState(defaultDate);
    const [todoEnd, setEnd] = useState(defaultDate);
    const [todoDescription, setDescription] = useState("");


    const addTask = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const startDate = new Date(todoStart);
        const endDate = new Date(todoEnd);

        // Check if end date is before start date
        if (endDate < startDate) {
            alert("End date must be after start date");
            return;
        }
        const newTask = {
            id: uuid4(),
            title: todoTitle,
            level: todoLevel,
            user: todoUser,
            startDate: todoStart,
            endDate: todoEnd,
            description: todoDescription,
            done: false
        };
        const updatedTodoList = [...todoList, newTask]; // Update todoList with the new task
        setTodoList(updatedTodoList); // Update todoList state

        // Update filteredList using the updated todoList
        if (listType === "completed") {
            setFilteredList(updatedTodoList.filter(todo => todo.done));
        } else if (listType === "active") {
            setFilteredList(updatedTodoList.filter(todo => !todo.done));
        } else {
            setFilteredList(updatedTodoList);
        }

        // Reset values and close modal
        addTask();
        setTitle("");
        setLevel("");
        setStart(defaultDate);
        setEnd(defaultDate);
        setDescription("");

    };
    const handleUser = (event) => {
        const userId = event.target.value;
        const user = users.find(user => user.id === Number(userId));
        setUser(user);
    }


    return (
        <>
            {/* Modal toggle */}
            <button onClick={addTask} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Add Task
            </button>

            {/* Main modal */}
            {isOpen && (
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50" >
                    <div className="relative p-4 w-full max-w-md">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Add New Task
                                </h3>
                                <button onClick={addTask} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <form onSubmit={handleSubmit} className="p-4 md:p-5">

                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
                                        <input type="text" name="name" id="name" onChange={(event) => {
                                            setTitle(event.target.value);
                                        }} value={todoTitle} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type task name" required />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficulty</label>
                                        <select id="category" onChange={(event) => {
                                            setLevel(event.target.value);
                                        }} value={todoLevel} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                            <option defaultValue>Select Difficulty</option>
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assigned to</label>
                                        <select id="category" onChange={(event) => handleUser(event)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                            <option defaultValue>Select User</option>
                                            {
                                                users.map((user) => (
                                                    <option key={user.id} value={user.id}>{user.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="from-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                                        <input type="date" name="from" id="from-date" onChange={(event) => {
                                            setStart(event.target.value);
                                        }} value={todoStart} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="to-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                                        <input type="date" name="to" id="to-date" onChange={(event) => {
                                            setEnd(event.target.value);
                                        }} value={todoEnd} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                                        <textarea id="description" rows="4" onChange={(event) => {
                                            setDescription(event.target.value);
                                        }} value={todoDescription} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write task description here"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                    Add new task
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddTask;
