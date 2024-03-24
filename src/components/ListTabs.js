import React from "react";

const ListTabs = ({ handleShowAll, setShowCompleted }) => {
  return (
    <div className="flex m-2 mt-4">
      <button
        className="shadow-md bg-violet hover:brightness-75 hover:transition-all duration-300 w-16 p-2 text-veryLight rounded-l group focus:brightness-75 focus:outline-none "
        onClick={handleShowAll}
      >
        All
      </button>
      <button
        className="shadow-md bg-violet hover:brightness-75 hover:transition-all	duration-300  w-auto p-2 text-veryLight focus:brightness-75 focus:outline-none "
        onClick={() => setShowCompleted(false)}
      >
        Uncompleted
      </button>
      <button
        className="shadow-md bg-violet hover:brightness-75 hover:transition-all	duration-300 w-auto p-2 text-veryLight pr-6 rounded-r focus:brightness-75 focus:outline-none "
        onClick={() => setShowCompleted(true)}
      >
        Completed
      </button>
    </div>
  );
};
export default ListTabs;
