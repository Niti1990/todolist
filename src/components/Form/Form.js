function Form () {
    return (
        <div>
         <form>
        <label >Enter TODO</label>
        <input type="text" className="new_input" placeholder="typetext" required/>
        <button type="submit" className="button" value="submit" >submit </button>
        <button type="submit" className="button" value="ClearAll" >ClearAll </button>
        </form>
        </div>
    )
}
export default Form 