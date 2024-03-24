import { useState } from 'react';
import EditTask from './EditTask';

function Task({ todo, taskView, handleView, handleEditList }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <>
            {/* Main modal */}
            {taskView && (
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {todo.title}
                            </h3>
                            <button
                                onClick={handleView}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <div className="flex justify-end">
                                {isEditing ? (
                                    <EditTask todo={todo} setIsEditing={setIsEditing} handleCancel={handleCancel} handleEditList={handleEditList} />
                                ) : (
                                    <button
                                        type="submit"
                                        onClick={handleEdit}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                        Task Title
                                    </label>
                                    <h3 className="block mb-2 text-sm text-black dark:text-white">{todo.title}</h3>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                        Difficulty
                                    </label>
                                    <h3 className="block mb-2 text-sm text-black dark:text-white">{todo.level}</h3>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                        Assigned to
                                    </label>
                                    <h3 className="block mb-2 text-sm text-black dark:text-white">{todo.user ? todo.user.name : "Not Assigned"}</h3>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="from-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">From</label>
                                    <h3 className="block mb-2 text-sm text-black">{todo.startDate ? todo.startDate : "--:--:--"}</h3>

                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="to-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">To</label>
                                    <h3 className="block mb-2 text-sm text-black">{todo.endDate ? todo.startDate : "--:--:--"}</h3>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Task Description</label>
                                    <p className="block mb-2 text-sm text-black">{todo.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
            }
        </>
    );

}
export default Task;