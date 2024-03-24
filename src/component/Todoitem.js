import { useState } from "react";

const TodoItem = ({ todo, handelDelete, handleSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDone,setIsDone]=useState(todo.done)
  const [newTitle, setNewTitle] = useState(todo.title);

  const handledone=()=>{
    setIsDone(!isDone)
  }
  const handelediti = () => {
    setIsEditing(!isEditing);
  };
  const handelsaveedite = (event) => {
    setNewTitle(event.target.value);
  };

  const handleSaveButton = () => {
    handleSave(todo.id, newTitle);
    setIsEditing(!isEditing);
  };

  return (
    <div className="text-2xl py-3 font-bold flex justify-center	items-center	text-black">
      {isEditing ? (
        <input onChange={handelsaveedite} value={newTitle} className="gap-5"></input>
      ) : (
isDone?<p  onClick={handledone} ><img src="https://i.pinimg.com/originals/18/ae/86/18ae86fcb295c6d30028dedf7a946970.gif" className="w-14 inline" /> <span className="mr-10 line-through decoration-red decoration-7"> {todo.title}</span> </p>:<p onClick={handledone} className="mx-10">   {todo.title}</p>
      )}
      {isEditing ? (
        <sub onClick={handleSaveButton} className="ml-3 text-org" >save</sub>
      ) : (
        <sup onClick={handelediti} className="inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="Edit"
            className="pt-8"
          >
            <path
              d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"
              fill="#DC5F00"
              class="color000000 svgShape"
            ></path>
            <path
              d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"
              fill="#CF0A0A"
              class="color000000 svgShape"
            ></path>
          </svg>
        </sup>
      )}
      <sub onClick={() => handelDelete(todo.id)}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          viewBox="0 0 24 24"
          id="Trash"
        >
          <path
            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            fill="#DC5F00"
            class="color000000 svgShape"
          ></path>
        </svg>
      </sub>
    </div>
  );
};

export default TodoItem;
