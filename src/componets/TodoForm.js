import React,{useState} from 'react'
import App from '../App.css'
import index from './index.css'
export const TodoForm = ({addTodo}) => {
    const[value,setValue]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault();
        addTodo(value)
        setValue('')
    }
  return (
    <div>
        <form className="TodoForm" onSubmit={handleSubmit}>
               <input type="text" className="todo-input" value={value} placeholder='what is the task today!' onChange={(event)=>setValue(event.target.value)}></input>
               <button type="submit" className="todo-btn">Add task</button>
               
        </form>
    </div>
  )
}
