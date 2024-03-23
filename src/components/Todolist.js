import { useState } from "react";
import uuid4 from "uuid4";
import TodoItem from "./TodoItem";
function TodoList  ({todoData}) {
    
    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState(todoData);

   
    // change
          const handleChange = (event) => {
           setNewTodo(event.target.value);
    };
    


    //delete
    
const handleDelete =(todoId)=>
{
    setTodoList(todoList.filter((todo)=> todo.id !==todoId));
    
};

//
    const handleclick = () => {
        if(newTodo.trim()===""){
            return;
        }
    
        //
        const newTodoObj = {
            id: uuid4(),
            title: newTodo,
            done: false,
        };
        
        setTodoList([...todoList, newTodoObj]);
        setNewTodo(" ");


    } 
    //
    const handleEdit=(updated)=>{
        setTodoList((todoList)=>todoList.map((todo)=>{
            return todo.id===updated.id ?updated :todo;
        })
        );
    }
 
    //
    return (
    <div>
        <input typt="text" onChange={handleChange} 
        placeholder="Enter New Title"
        value={newTodo}/>
        <button onClick={handleclick}>Add</button>
        {todoList.map((todo) => (
        <TodoItem
        key={todo.id}
        todo={todo} 
        handleDelete={handleDelete}
         handleEdit={handleEdit}/> ))}
        
        



    </div>)}
  


export default TodoList;
