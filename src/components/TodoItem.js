import React, { useState } from "react";


function TodoItem({ todoId, todo, handleDelete
    , handleEditList }) {
    const [isEditing, setEditing] = useState(false);
    const [editedText, setEditText] = useState(todo.title);


    const handleEdit = () => {
        setEditing(true);
    }

    const handelEditChange = (e) => {
        setEditText(e.target.value);
    };

    const handleSave = (todoId) => {
        const updatedTitle = { ...todo, title: editedText };
        if (updatedTitle.title.trim() === "") {
            return;
        }

        handleEditList(updatedTitle);
        setEditing(false);
    }

    return (
        <div style={{ display: "flex", alignItems: "center", columnGap: "20px" }}>
            {isEditing ? (
                <input onChange={handelEditChange} type="text" value={editedText} />
            ) : (
                <p>{todo.title}</p>
            )}


            <sub style={{ color: "red" }} onClick={() => handleDelete(todo.id)}>
                Delete
            </sub>

            {isEditing ? (
                <sub onClick={handleSave}>Save</sub>
            ) : (
                <sub onClick={handleEdit}>Edit</sub>
            )}
        </div>
    );
}

export default TodoItem;