
import { useState } from 'react';
function Form ({addNewTodo}) {
    // intialization the state
    const[userinput,setUserInput]=useState("");
    const handleChange = (event) =>{
        setUserInput(event.target.value)
    };
     
//   prevent form 
     const handleSubmit = (event)  => {
     event.preventDefault();
        addNewTodo({
        id:'1001',
       text: 'input' 
     
    });
       
    setUserInput('');
    };
  

      
  

    return (
        <div>
            <form onSubmit={handleSubmit} >
                   <label >Enter TODO</label>
                   <input type="text" className="new_input"  placeholder="Enter to do"  onChange={handleChange}required/>
                   <button type="submit" className="button"  onChange={handleChange} value="submit"  >submit </button>
                   <button type="submit" className="button" value="ClearAll" >ClearAll </button>
            </form>
        </div>
    )
    }
export default Form  