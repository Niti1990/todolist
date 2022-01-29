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



                    
                        {/* <button type="submit" className="button" value="Edit" >Edit </button>
                        <button type="submit" className="button" value="delete" >Delete </button> */}

                    </li>
                    )
                }) 
            }
        </ul>
        </div>

    );
}

export default List;