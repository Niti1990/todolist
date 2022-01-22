function List ({todos}) {
    return (
        <div>
        <h1>Add TODOLIST</h1>
        <ul> 
            {todos.map(todo => {
                    return (
                    <li>
                        {todo.id} - {todo.title} - {todo.done}
                    
                        <button type="submit" className="button" value="Edit" >Edit </button>
                        <button type="submit" className="button" value="delete" >Delete </button>
                    </li>
                    )
                }) 
            }
        </ul>
        </div>
        
    );
}

export default List;