
import React, { useState } from "react";


function TodoItem  ({ todo, handleDelete,handleEdit }) {
    const[isEditing,setIsEditing]=useState(false);
    const [changedTitle,setChangedTitle]= useState(todo.title);
    
    //
    const handleIsEditing=()=>{
        setIsEditing(!isEditing)
    }
    const handleChangeTitle = (event) => {
        
        setChangedTitle(event.target.value);
 };

 //
 const handleSave = () => {
    const updated={...todo, title:changedTitle};
    handleEdit(updated);
    setIsEditing(false);
  };

    return (
        <div  style={{ display: "flex", color: "yelow", alignItems:"center"}}>
            
            {isEditing? 
                  (<><input type="text" Value = {changedTitle} onChange={handleChangeTitle}/> 
                  <sub
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDelete(todo.id)}
                >
                    Delete
                </sub>
                  <sup onClick={handleSave}>Save</sup></>

                  
            ) :(
               <><p>{todo.title}</p>
               <sub
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDelete(todo.id)}
                >
                    Delete
                </sub>
                <sub
                    style={{ color: "green", cursor: "pointer" }}
                    onClick={handleIsEditing}>
                
                    Edit
                </sub>
             </> 


            )}


            
           
                
                
           
            
        </div>
    );
};
export default TodoItem;

