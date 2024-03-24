import React from 'react';
import { useState } from 'react';
import { users } from '../usersData';

function EditTask({ todo, setIsEditing, handleCancel, handleEditList }) {
    const [editedTitle, setEditTitle] = useState(todo.title);
    const [editedLevel, setEditLevel] = useState(todo.level);
    const [editedUser, setEditUser] = useState(todo.user);
    const [editedStart, setEditStart] = useState(todo.startDate);
    const [editedEnd, setEditEnd] = useState(todo.endDate);
    const [editedDescription, setEditDescription] = useState(todo.description);

    // Implement your edit functionality here
    const handleSave = () => {
        if (editedTitle === "") return;

        const updatedTask = {
            ...todo,
            title: editedTitle,
            level: editedLevel ? editedLevel : "",
            user: editedUser ? editedUser : "Not assigned",
            startDate: editedStart ? editedStart : "",
            endDate: editedEnd ? editedEnd : "",
            description: editedDescription ? editedDescription : "",
            done: todo.done
        };
        handleEditList(updatedTask);
        setIsEditing(false);
    }

    const handleEditUser = (event) => {
        const userId = event.target.value;
        const user = users.find(user => user.id === Number(userId));
        setEditUser(user);
    }
    return (
        <>
            {/* Main modal */}
            <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50">
                <div className="relative p-4 w-full max-w-md">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Edit Task
                            </h3>
                            <button onClick={handleCancel} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4">
                                <div className='w-full'>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
                                            <input type="text" name="name" id="name" onChange={(event) => {
                                                setEditTitle(event.target.value);
                                            }} value={editedTitle} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type task name" required />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficulty</label>
                                            <select id="category" onChange={(event) => {
                                                setEditLevel(event.target.value);
                                            }} value={editedLevel} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                                <option defaultValue>Select Difficulty</option>
                                                <option value="easy">Easy</option>
                                                <option value="medium">Medium</option>
                                                <option value="hard">Hard</option>
                                            </select>
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assigned to</label>
                                            <select id="category" value={editedUser} onChange={(event) => handleEditUser(event)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                                <option>Select User</option>
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
                                                setEditStart(event.target.value);
                                            }} value={editedStart} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="to-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                                            <input type="date" name="to" id="to-date" onChange={(event) => {
                                                setEditEnd(event.target.value);
                                            }} value={editedEnd} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                                            <textarea id="description" rows="4" onChange={(event) => {
                                                setEditDescription(event.target.value);
                                            }} value={editedDescription} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write task description here"></textarea>
                                        </div>
                                    </div>
                                    <div className='flex justify-center align-center gap-10'>
                                        <button onClick={handleSave} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            Save
                                        </button>
                                        <button onClick={handleCancel} className="text-white inline-flex items-center bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditTask;
