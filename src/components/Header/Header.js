 function Header () {
     return (
         <div>
         <h1> TODO LIST</h1>
         <input type="text" className="new_input" placeholder="typetext" required/>
         <button type="submit" className="button" value="submit" >submit </button>
         <button type="submit" className="button" value="ClearAll" >ClearAll </button>
         </div>
     )
 }
 export default Header