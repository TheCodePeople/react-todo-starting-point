import React, { useState } from "react";
import eidt from "./img/edit.png"
import delet from "./img/trash.png"

function TodoItem({ todo, deleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [isChecked, setisChecked] = useState(false);
  const [greencolor ,setgreencolor] = useState(false)
  const [yalowcolor ,setyalowcolor] = useState(false)
  const [redcolor ,setredcolor] = useState(false)
  const handleSave = () => {
    todo.title = newTitle;
    setIsEditing(false);
  };
  
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
 
  function handelcheckbox (){
    setisChecked(!isChecked)
  }
 
  
 function greenboxcolor (){
  setgreencolor(!greencolor)
 }
 function yaloweboxcolor(){
  setyalowcolor(!yalowcolor)
 }
 function redboxcolor (){
  setredcolor(!redcolor)
 }

  return (
    <div >
      {isEditing ? (
        <div className="flex gap-5 justify-between  bg-white mb-2 p-2 ">
          <input
          className=" text-black"
            type="text"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <button className="text-green-600" onClick={handleSave}>Save</button>
        </div>
      ) : (
            <div className={`flex gap-5 justify-between h-auto w-{100%}  mb-6 p-2 rounded-lg hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] 
             shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] ${isChecked?"bg-slate-400  text-white" : "bg-white" }`}>
            
          <div className="flex gap-3 w-{70%}" >
             <input type="checkbox" checked={isChecked} onChange={handelcheckbox}/> 
            <p className={`w-full text-black font-serif text-wrap ${isChecked ? "line-through text-gray-500  " : ""}`}>{todo.title}</p>
            </div>

            <div className={"flex gap-5 w-{30%}"}>
            
          <div className={"flex gap-2 h-5 mt-2"}>
            <div className={`${greencolor?"bg-green-500 px-2 py-2":"bg-green-100 px-2 py-2"}`} onClick={greenboxcolor}></div>
            <div  className={`${yalowcolor?"bg-yellow-400 px-2 py-2":"bg-yellow-100 px-2 py-2"}`} onClick={yaloweboxcolor}></div>
            <div  className={`${redcolor?"bg-red-500 px-2 py-2":"bg-red-100 px-2 py-2"}`} onClick={redboxcolor}></div>
          </div>

          <div className="flex gap-4">
            <label htmlFor=""></label>
            <button className="text-red-600" onClick={() => deleteItem(todo.id)}><img className="w-9" src={delet} alt="" /></button>
          <button className="text-green-600" onClick={handleEditClick}><img className="w-9" src={eidt} alt="" /></button>
          </div>
            </div>
         
        </div>
      )}
    </div>
  );
}

export default TodoItem;
