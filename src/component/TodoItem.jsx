import React, { useState } from 'react';
export const TodoItem = ({ todo, selectedTodo, handleDelete, handleEdit, handleSave }) => {
    const [newTodoTitle,setNewTodoTitle]= useState("")
    const handleTextChange=(event)=>{
        setNewTodoTitle(event.target.value)
    }
    return (
        todo.id === selectedTodo?.id ? <div><input type="text" defaultValue={ selectedTodo.title } onChange={handleTextChange}></input>
            <sub style={ { color: "yellow", cursor: "pointer" } } onClick={ () => handleSave(todo.id,newTodoTitle) }
            > save</sub>
        </div> :
            <div>
                <p key={ todo.id }>
                    { todo.title }</p>

                <sub
                    style={ { color: "red", cursor: "pointer" } }
                    onClick={ () => handleDelete(todo.id) }
                >
                    Delete
                </sub>
                <sub style={ { color: "green", cursor: "pointer" } } onClick={ () => handleEdit(todo) }
                > Edit</sub>

            </div>
    );
};
