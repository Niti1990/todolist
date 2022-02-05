import React from "react";
import Todo from "../Todo/Todo";

function List ({todos, deleteCallback}) {
    return (
        <div>
        <h1>Add TODOLIST</h1>
        <ul> 
            {todos.map((todo, index) => {
                    return (
                    <li>
                        <Todo key={index} id={todo.id} title={todo.title} isDone={todo.done} deleteCallback={deleteCallback}/>
                    
                    </li>
                    )
                }) 
            }
        </ul>
        </div>
        
    );
}

export default List;