
import { useState } from 'react';
function Form () {
    const[userinput,setUserInput]=useState('')

     const handleSubmit = (event)  => {
        event.preventDefault();
        
       
    
    };

     const handleChange = (e) =>{
        setUserInput(e.target.value)
        setUserInput('')

      }
  

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