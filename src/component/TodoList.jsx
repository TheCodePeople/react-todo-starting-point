import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { TodoItem } from "./TodoItem";
function TodoList({todoData}){
    const [todoList, setTodoList]=useState(todoData)
    const [newTodo,setNewTodo]=useState("")
    const [selectedTodo,setSelectedTodo]=useState()
    // capture new to do
    const handleTextChange =(event)=>{
        setNewTodo(event.target.value)
    }
    //Adding new todo to the list
    const handleTodoCreate=()=>{
        const newTodoObj={
            id :uuidv4(),
            title: newTodo,
            done: false
        }
        setTodoList([...todoList,newTodoObj])
    }
    //delete Function
    const handleDelete=(todoId)=>{
        setTodoList(todoList.filter((todo)=>todo.id !== todoId)) 
    }
    //edit Function
    const handleEdit=(todo)=>{
        setSelectedTodo(todo)
    }
    //Save Function
    const handleSave=(todoId,newTodoTitle)=>{
        const index = todoList.findIndex((todo)=>{
        return todo.id ===todoId
        })
        if(index!== -1){
            const clonedTodoList=[...todoList]
            clonedTodoList[index].title = newTodoTitle
            setTodoList(clonedTodoList)
        }
        setSelectedTodo(undefined)
    }
    //cancel Function
    const handleCancel=()=> setSelectedTodo(undefined)

    return <div>
        <input type="text" placeholder="add your todo" onChange={handleTextChange}></input>
        <button onClick={handleTodoCreate}>add</button>
        {todoList.map((todo) => (
    <TodoItem  key ={todo.id} todo={todo} selectedTodo={selectedTodo} handleDelete={handleDelete} handleEdit={handleEdit} 
    handleSave={handleSave} handleCancel={handleCancel}/>))}
    </div>;

}
export default TodoList