import React, { useState } from "react";

function NewTodo({addTodo}) {
  return (
    <div>
      <input
        type="text"
        value=""
        className="new-input"
        placeholder="write your name here"
      />
      <button>Add New Todo</button>
    </div>
  );
}

export default NewTodo;



import React, { useState } from "react";
import Todo from "../Todo/Todo";



function NewTodoInput( {addTodo} ) { 
  const [inputValue, setInputValue] = useState('');
  const handleChange = ( { target } ) => {
      const updatedInput = target.value
      setInputValue(updatedInput)
  }
  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(event)
      console.log(event.target[0].value)
      const newTodo = {
        id: (Date.now() + Math.random()).toString(),
        title: event.target[0].value, 
        isDone: false
      };
      addTodo()
  }
  return (
    <form  onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={inputValue}
        className="new-input"
        placeholder="write your name here"
      />
      <button>Add New Todo</button>
    </form>
    

  );
}

export default NewTodoInput;