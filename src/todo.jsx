import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TodoList () {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e){
    setInputValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(inputValue === "") {
      toast.error("Please enter a todo!", {
        position: toast.POSITION.TOP_CENTER
      });
      return};
    setTodos([...todos, inputValue])
    setInputValue("")
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList