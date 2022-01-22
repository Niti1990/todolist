function List ({id,title,done}) {
    return (
        <div>
        <h1>Add TODOLIST</h1>
        <ul>
        {id} - {title} - {done}
        </ul>
        <button type="submit" className="button" value="Edit" >Edit </button>
        <button type="submit" className="button" value="delete" >Delete </button>
        </div>
        
    );
}

export default List;